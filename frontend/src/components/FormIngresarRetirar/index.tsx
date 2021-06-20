import React, { useState, FC, useRef } from 'react';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import AuthService from "./../../services/auth.services";

interface props {
  handleAddItemsTable ?: (item) => void;
  handleRetirarItems ?: (item) => void;

  items_id:{
    id:number;
    codigo: string;
    nombre: string;
    unidad_medida: string;
    cantidad: string;
  }[];
}

const MyForm: FC<props> = ({ handleAddItemsTable, handleRetirarItems, items_id}) => {
  const [scannerid, setScannerId] = useState(false);
  const [codigo, setCodigo] = useState("");
  const [name, setName] = useState("");
  const [unidadMedida, setUnidadMedida] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [cantidadMax, setCantidadMax] = useState("");
  const [userid, setUserId] = useState("");
  const [validated, setValidated] = useState(false);
  const idScannerRef = useRef(null);
  const [show, setShow] = useState(false);
  
  const user = AuthService.getCurrentUser();

  const handleIdScanner = (e) => {
    let id = e.target.value;
    setScannerId(id);
    
    items_id.map((elem)=>{
      if(id == elem.id){
        setCodigo(elem.codigo);
        setName(elem.nombre);
        setUnidadMedida(elem.unidad_medida);
        setShow(false);
        setCantidadMax(elem.cantidad);
      }
    })
  }
    
  const handleSubmit = (e) =>{
    
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();        
    }

    setValidated(true);
    
    const data = {
      codigo: codigo,
      nombre: name,
      unidad_medida: unidadMedida,
      cantidad: cantidad,
    }

    setUserId(user.id);

    if(handleAddItemsTable){

      
      axios.post('https://control-inventarios-usurban.herokuapp.com/item/', {codigo, name, unidadMedida, cantidad, userid} )
      .then(res => {
        console.log(res);
        handleAddItemsTable(data);
      })
      
    }

    else if(handleRetirarItems){

      
      axios.post('https://control-inventarios-usurban.herokuapp.com/item/todo', {codigo, name, unidadMedida, cantidad, userid})
      .then(res => {
        console.log(res);
        handleRetirarItems(data);
      })
    }


  }

  return(
    <>
    {handleAddItemsTable && (
      <>
        <Form validated={validated} onSubmit = {handleSubmit}>
          <Form.Row>
          <Form.Group as={Col} md="4" controlId="codigo">
              <Form.Label>Código</Form.Label>
              <Form.Control
                required 
                type="text"
                placeholder="Ingrese el código del producto"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                required 
                type="text"
                placeholder="Ingrese el nombre del producto"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="unidad_medida">
              <Form.Label>Unidad de Medida</Form.Label>
              <Form.Control
                required 
                defaultValue="Seleccione la unidad de medida"  
                as="select"
                value={unidadMedida}
                onChange={(e) => setUnidadMedida(e.target.value)}  
              >
                <option>Seleccione la unidad de medida</option>
                <option>UN</option>
                <option>kit</option>
              </Form.Control>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="4" controlId="cantidad">
              <Form.Label>Cantidad de Productos</Form.Label>
              <Form.Control
                required 
                type="number" 
                value={cantidad}
                min={1}
                onChange={(e) => setCantidad(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Button variant="dark" type="submit">
            Ingresar
          </Button>
          <Button 
            variant="danger" 
            onClick = {() =>{
              setShow(true);
            }}>
            Escanear
          </Button>

          <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Por favor escanee el código</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Recuerde mantener los códigos de barra en buen estado para una mejor lectura.
              <Form>
                <Form.Row>
                  <Form.Group as={Col} md="4" controlId="id_scanner">
                    <Form.Control
                      required
                      hidden={false}
                      ref={idScannerRef}
                      type="number" 
                      value={scannerid}
                      onChange={handleIdScanner}
                    />
                  </Form.Group>
                </Form.Row>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick = {(e) => idScannerRef.current.focus()}>
                Iniciar Escaneo
              </Button>
              <Button variant="outline-secondary" onClick={() => setShow(false)}>
                Cancelar
              </Button>
            </Modal.Footer>
          </Modal>
        </Form>
      </>
    )}
    {handleRetirarItems && (
      <>
        <Form validated={validated} onSubmit = {handleSubmit}>
        <Form.Row>
        <Form.Group as={Col} md="4" controlId="codigo">
            <Form.Label>Código</Form.Label>
            <Form.Control
              required 
              type="text"
              placeholder="Ingrese el código del producto"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              required 
              type="text"
              placeholder="Ingrese el nombre del producto"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="unidad_medida">
            <Form.Label>Unidad de Medida</Form.Label>
            <Form.Control
              required 
              defaultValue="Seleccione la unidad de medida"  
              as="select"
              value={unidadMedida}
              onChange={(e) => setUnidadMedida(e.target.value)}  
            >
              <option>Seleccione la unidad de medida</option>
              <option>UN</option>
              <option>kit</option>
            </Form.Control>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} md="4" controlId="cantidad">
            <Form.Label>Cantidad de Productos</Form.Label>
            <Form.Control
              required 
              type="number" 
              value={cantidad}
              min={1}
              max={cantidadMax}
              onChange={(e) => setCantidad(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Button variant="dark" type="submit">
          Retirar
        </Button>
        <Button 
          variant="danger" 
          onClick = {() =>{
            setShow(true);
          }}>
          Escanear
        </Button>

        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Por favor escanee el código</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Recuerde mantener los códigos de barra en buen estado para una mejor lectura.
            <Form>
              <Form.Row>
                <Form.Group as={Col} md="4" controlId="id_scanner">
                  <Form.Control
                    required
                    hidden={false}
                    ref={idScannerRef}
                    type="number" 
                    value={scannerid}
                    onChange={handleIdScanner}
                  />
                </Form.Group>
              </Form.Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick = {(e) => idScannerRef.current.focus()}>
              Iniciar Escaneo
            </Button>
            <Button variant="outline-secondary" onClick={() => setShow(false)}>
              Cancelar
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
      </>
    )}
    </>
  )
};

export default MyForm;