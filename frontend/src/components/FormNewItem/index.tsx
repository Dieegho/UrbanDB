import React, { useState, FC, useRef} from 'react';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import AuthService from "../../services/auth.services";

interface props{
  handleAddNewItemsTable ?: (item) => void;
  items:{
    nombre: string;
    categoria: string;
    area: string;
  }[];
}

// un arreglo y lo meto en el setCategorias como arreglo[i] en un for
const MyFormNewItem: FC<props> = ({handleAddNewItemsTable, items}) => {
  
  const user = AuthService.getCurrentUser();

  const [name, setName] = useState("");
  const [unidadMedida, setUnidadMedida] = useState("");
  const [categoria, setCategoria] = useState("");
  const [area, setArea] = useState("");
  const [critico, setCritico] = useState("");
  const [userid, setUserId] = useState("");
  const [selectCategorias, setSelectCategorias] = useState([]);

  const [validated, setValidated] = useState(false);
  const [showError, setShowError] = useState(false);

  const areaRef = useRef(null);

  
  const handleChangeCategorias = (e) => {
    let area = e.target.value;
    setArea(area);
    setUserId(user.id);

    let categorias_por_area = []
    const categorias_filtrado = []

    items.map((elem)=>{
      if(area == elem.area){     
        categorias_por_area.push(elem.categoria);
      }
    })

    const myObj = {}

    categorias_por_area.forEach(el => {
      if (!(el in myObj)) {
        myObj[el] = true
        categorias_filtrado.push(el)
      }
    })
    setSelectCategorias(categorias_filtrado);
  }

  const handleSubmit = (e) =>{

    let count = 0;

    items.map((elem) => {      
      if(elem.nombre == name){
        setShowError(true);
        count = 1;
      }
    })

    if(count==0 && userid){

      setValidated(true);
  
      const data = {
        nombre: name,
        unidad_medida: unidadMedida,
        categoria: categoria,
        area: area,
        critico: critico
      }      
      
      axios.post('https://control-inventarios-usurban.herokuapp.com/item/nuevo_item', {name, unidadMedida, categoria, area, critico, userid} )
      .then(res => {
        console.log(res);
        handleAddNewItemsTable(data);
      })
    }
  }

  return(
    <div>
      <Form validated={validated} onSubmit = {handleSubmit}>
        <Form.Row>

          <Form.Group as={Col} md="4" controlId="nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              required 
              type="text"
              placeholder="Ingrese el nombre del producto"
              value={name}
              defaultValue="DeepScan"
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="unidadMedida">
            <Form.Label>Unidad de Medida</Form.Label>
            <Form.Control
              required
              defaultValue="Seleccione la unidad de medida"
              as="select"
              type="text"
              value={unidadMedida}
              onChange={(e) => setUnidadMedida(e.target.value)}
            >
              <option>Seleccione la unidad de medida</option>
              <option>UN</option>
              <option>kit</option>
            </Form.Control>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="critico">
            <Form.Label>Stock Crítico</Form.Label>
            <Form.Control
              required 
              type="number"
              placeholder="Ingrese Stock crítico"
              value={critico}
              onChange={(e) => setCritico(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} md="4" controlId="area">
              <Form.Label>Área</Form.Label>
              <Form.Control
                  required 
                  defaultValue="Seleccione el Área"
                  ref={areaRef}
                  as="select"
                  value={area}
                  // onChange={(e) => {
                  //   setArea(e.target.value);
                  //   handleChangeCategorias;
                  // }}
                  onChange={handleChangeCategorias}
              >
                <option>Seleccione el Área</option>
                <option>Bombas de Agua Potable</option>
                <option>Electricidad</option>
                <option>Clima</option>
                <option>Detección de Incendios</option>
                <option>Ascensores</option>
                <option>Artículos Electrónicos</option>
              </Form.Control>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="categoria">
          <Form.Label>Categoría</Form.Label>
          <Form.Control
              required 
              as="select"
              placeholder="Ingrese la categoría"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
          > 
            <option>Seleccione la Categoría</option>
            {selectCategorias.map((value, index) =>{
              return(<option key={index} value={value}>{value}</option>)
            })}
          </Form.Control>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

          </Form.Group>
        </Form.Row>
        <Button variant="dark" type="submit">
          Ingresar
        </Button>
      </Form>
      <Modal show={showError} onHide={() => setShowError(false)}>
        <Modal.Header closeButton>
          <Modal.Title>¡Ese producto ya se encuentra en el sistema!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Prueba con otro producto.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShowError(false)}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default MyFormNewItem;