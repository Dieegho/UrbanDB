import React, { useState, FC } from 'react';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import MyTable from '../../components/Table';

interface props {
  handleAddItemsTable ?: (item) => void;
  handleRetirarItems ?: (item) => void;
  handleLoginUsers ?: (user) => void;
}

const MyForm: FC<props> = ({ handleAddItemsTable, handleRetirarItems, handleLoginUsers}) => {

  if(handleAddItemsTable){
    const [codigo, setCodigo] = useState("");
    const [name, setName] = useState("");
    const [unidadMedida, setUnidadMedida] = useState("");
    const [critico, setCritico] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [id_categoria, setId_categoria] = useState("");
    const handleSubmit = (e) =>{
      e.preventDefault();
      const data = {
        codigo: codigo,
        nombre: name,
        unidad_medida: unidadMedida,
        critico : critico,
        cantidad: cantidad,
        id_categoria: id_categoria,
      }
      handleAddItemsTable(data);

      axios.post('http://127.0.0.1:5000/item/', {codigo, name, unidadMedida, critico, cantidad, id_categoria} )
      .then(res => {
        console.log(res);
      })
    }
    return(
      <div>
        <Form onSubmit = {handleSubmit}>
          <Form.Row>
          <Form.Group as={Col} controlId="codigo">
              <Form.Label>Código</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el código del producto"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el nombre del producto"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="unidad_medida">
              <Form.Label>Unidad de Medida</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese la unidad de medida"
                value={unidadMedida}
                onChange={(e) => setUnidadMedida(e.target.value)}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="id_categoria">
              <Form.Label>ID Categoría</Form.Label>
              <Form.Control
                value={id_categoria}
                onChange={(e) => setId_categoria(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="critico">
              <Form.Label>Stock crítico</Form.Label>
              <Form.Control
                value={critico}
                onChange={(e) => setCritico(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="cantidad">
              <Form.Label>Cantidad de Productos</Form.Label>
              <Form.Control
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
              />
            </Form.Group>
          </Form.Row>
          <Button variant="outline-dark" type="submit">
            Ingresar
          </Button>
        </Form>
      </div>
    )
  }

  else if(handleRetirarItems){
    const [codigo, setCodigo] = useState("");
    const [name, setName] = useState("");
    const [unidadMedida, setUnidadMedida] = useState("");
    const [cantidad, setCantidad] = useState("");
    const handleRetirarData = (e) => {
      e.preventDefault();
      const data ={
        codigo: codigo,
        nombre: name,
        unidad_medida: unidadMedida,
        cantidad: cantidad,
      }
      handleRetirarItems(data);
      axios.post('http://127.0.0.1:5000/item/todo', {codigo, name, unidadMedida, cantidad})
      .then(res => {
        console.log(res);
      })
    }
    return(
      <div>
        <h1>RETIRAR PRODUCTO</h1>
        <Form onSubmit = {handleRetirarData}>
          <Form.Row>
            <Form.Group as={Col} controlId="codigo">
              <Form.Label>Código</Form.Label>
              <Form.Control
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="cantidad">
              <Form.Label>Cantidad</Form.Label>
              <Form.Control
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
              />
            </Form.Group>

          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el nombre del producto"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="unidad_medida">
              <Form.Label>Unidad de Medida</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese la unidad de medida"
                value={unidadMedida}
                onChange={(e) => setUnidadMedida(e.target.value)}
              />
            </Form.Group>
          </Form.Row>
          <Button variant="outline-dark" type="submit">
            Retirar
          </Button>
        </Form>
      </div>
    )
  }
  else if(handleLoginUsers){
    const [validated, setValidated] = useState(false);
    const handleSubmit = (e) => {
      const form = e.currentTarget;
      if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
      }
      setValidated(true);
      e.preventDefault();
      const data ={
        email: email,
        username: username,
        password: password,
      }
      handleLoginUsers(data);
      axios.post('http://127.0.0.1:5000/api/user/<public_id>', {data} )
      .then(res => {
        console.log(res);
      })
    }
    return(
      <div>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group md="4" controlId="username">
            <Form.Label>Nombre</Form.Label>
            <Form.Control required type="text" placeholder="First name"/>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group md="4" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control required type="email" placeholder="Enter email" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group md="4" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control required type="password" placeholder="Password" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
  
          <Button type="submit">Submit form</Button>
        </Form>
      </div>
    )
  }
  return(
    <div></div>
  )
};

export default MyForm;
