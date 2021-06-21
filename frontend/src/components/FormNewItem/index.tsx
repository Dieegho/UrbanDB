import React, { useState, FC, useRef } from 'react';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import AuthService from "../../services/auth.services";

interface props{
    handleAddNewItemsTable: (item) => void;
}

const MyFormNewItem: FC<props> = ({handleAddNewItemsTable}) => {
    
    const [name, setName] = useState("");
    const [unidadMedida, setUnidadMedida] = useState("");
    const [categoria, setCategoria] = useState("");
    const [area, setArea] = useState("");
    const [critico, setCritico] = useState("");
    const [userid, setUserId] = useState("");
    const [validated, setValidated] = useState(false);

    const user = AuthService.getCurrentUser();
    
    const handleSubmit = (e) =>{
              
      const form = e.currentTarget;
        
      if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();        
      }

      setValidated(true);
      e.preventDefault();
      
      const data = {
        nombre: name,
        unidad_medida: unidadMedida,
        categoria: categoria,
        area: area,
        critico: critico
      }

      setUserId(user.id);

      
      axios.post('https://control-inventarios-usurban.herokuapp.com/item/nuevo_item', {name, unidadMedida, categoria, area, critico, userid} )
      .then(res => {
        console.log(res);
        handleAddNewItemsTable(data);
      })
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
                defaultValue="DeepScan"
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
                type="numer"
                placeholder="Stock crítico"
                value={critico}
                defaultValue="DeepScan"
                onChange={(e) => setCritico(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="4" controlId="area">
                <Form.Label>Area</Form.Label>
                <Form.Control
                    required 
                    type="text"
                    placeholder="Ingrese el nombre del producto"
                    value={area}
                    defaultValue="DeepScan"
                    onChange={(e) => setArea(e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="categoria">
                <Form.Label>Categoria</Form.Label>
                <Form.Control
                    required 
                    type="text"
                    placeholder="Ingrese el nombre del producto"
                    value={categoria}
                    defaultValue="DeepScan"
                    onChange={(e) => setCategoria(e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Button variant="dark" type="submit">
            Ingresar
          </Button>
        </Form>
      </div>
    )
}

export default MyFormNewItem;