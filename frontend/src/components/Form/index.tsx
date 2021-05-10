import React, { useState, FC, useRef } from 'react';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

interface props {
  handleAddItemsTable ?: (item) => void;
  handleRetirarItems ?: (item) => void;
  handleLoginUsers ?: (user) => void;
  handleAddNewItemsTable ?: (item) => void;
}

const MyForm: FC<props> = ({ handleAddItemsTable, handleRetirarItems, handleLoginUsers, handleAddNewItemsTable}) => {

  if(handleAddItemsTable){
    const [scannerid, setScannerId] = useState("")
    const [codigo, setCodigo] = useState("");
    const [name, setName] = useState("");
    const [unidadMedida, setUnidadMedida] = useState("");
    const [critico, setCritico] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [id_categoria, setId_categoria] = useState("");
    const [validated, setValidated] = useState(false);
    const idScannerRef = useRef(null);

    const handleSubmit = (e) =>{
      const form = e.currentTarget;

      if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();        
      }
      setValidated(true);
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

    const handleIdScanner = (e) => {
      const id = e.target.value;
      console.log(id);
      setScannerId(id);
      
      const data = {
        codigo: codigo,
        nombre: name,
        unidad_medida: unidadMedida,
        critico: critico,
        id_categoria: id_categoria,
      }

      axios.get(`http://127.0.0.1:5000/item/pistola/${id}`)
      .then(res => {
        console.log(res);
      })

      setCodigo(data.codigo)
      setName(data.nombre)
      setUnidadMedida(data.unidad_medida)
      setCritico(data.critico)
      setId_categoria(data.id_categoria)
    }

    return(
      <div>
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
                defaultValue="UN"  
                as="select"
                value={unidadMedida}
                onChange={(e) => setUnidadMedida(e.target.value)}  
              >
                <option>UN</option>
                <option>kit</option>
              </Form.Control>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
          <Form.Group as={Col} md="4" controlId="id_categoria">
            <Form.Label>ID Categoría</Form.Label>
              <Form.Control
                required type="number" 
                value={id_categoria}
                min={1}
                onChange={(e) => setId_categoria(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="critico">
              <Form.Label>Stock crítico</Form.Label>
              <Form.Control
                required 
                type="number" 
                min={0}
                
                value={critico}
                onChange={(e) => setCritico(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

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

          <Form.Row>
            <Form.Group as={Col} md="4" controlId="id_scanner">
              <Form.Control
                required
                hidden={true}
                ref={idScannerRef}
                type="number" 
                value={scannerid}
                onChange={handleIdScanner}
              />
            </Form.Group>
          </Form.Row>

          <Button variant="outline-dark" type="submit">
            Ingresar
          </Button>
          <Button variant="outline-dark" onClick = {(e) => idScannerRef.current.focus()}>
            Escanear
          </Button>
        </Form>
      </div>
    )
  }

  else if(handleRetirarItems){
    const [scannerid, setScannerId] = useState("")
    const [codigo, setCodigo] = useState("");
    const [name, setName] = useState("");
    const [unidadMedida, setUnidadMedida] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [validated, setValidated] = useState(false);
    const idScannerRef = useRef(null);

    const handleRetirarData = (e) => {
      const form = e.currentTarget;

      if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();        
      }
      setValidated(true);
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

    const handleIdScanner = (e) => {
      const id = e.target.value;
      console.log(id);
      setScannerId(id);
      
      //llamada a backend

      const data = {
        codigo: "codigo",
        nombre: "name",
        unidad_medida: (id % 2 === 0 ? "kit":"UN") ,
      }
      setCodigo(data.codigo)
      setName(data.nombre)
      setUnidadMedida(data.unidad_medida)
    }

    return(
      <div>
        <Form validated={validated} onSubmit = {handleRetirarData}>
          <Form.Row>
            <Form.Group as={Col} controlId="codigo">
              <Form.Label>Código</Form.Label>
              <Form.Control
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="cantidad">
              <Form.Label>Cantidad</Form.Label>
              <Form.Control
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="unidad_medida">
              <Form.Label>Unidad de Medida</Form.Label>
              <Form.Control
                required 
                defaultValue="UN"  
                as="select"
                value={unidadMedida}
                onChange={(e) => setUnidadMedida(e.target.value)}  
              >
                <option>UN</option>
                <option>kit</option>
              </Form.Control>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="4" controlId="id_scanner">
              <Form.Control
                required
                hidden={true}
                ref={idScannerRef}
                type="number" 
                value={scannerid}
                onChange={handleIdScanner}
              />
            </Form.Group>
          </Form.Row>

          <Button variant="outline-dark" onClick = {(e) => idScannerRef.current.focus()}>
            Retirar
          </Button>

          <Button variant="outline-dark" onClick = {(e) => idScannerRef.current.focus()}>
            Escanear
          </Button>
        </Form>
      </div>
    )
  }
  else if(handleAddNewItemsTable){
    const [codigo, setCodigo] = useState("");
    const [name, setName] = useState("");
    const [unidadMedida, setUnidadMedida] = useState("");
    const [critico, setCritico] = useState("");
    const [id_categoria, setId_categoria] = useState("");
    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) =>{
      const form = e.currentTarget;

      if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();        
      }
      setValidated(true);
      e.preventDefault();
      const data = {
        codigo: codigo,
        nombre: name,
        unidad_medida: unidadMedida,
        critico : critico,
        id_categoria: id_categoria,
      }

      handleAddNewItemsTable(data);
      axios.post('http://127.0.0.1:5000/item/', {codigo, name, unidadMedida, critico, id_categoria} )
      .then(res => {
        console.log(res);
      })
    }

    return(
      <div>
        <Form noValidate validated={validated} onSubmit = {handleSubmit}>
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
                type="text"
                defaultValue="Choose..."  
                as="select"
                value={unidadMedida}
                onChange={(e) => setUnidadMedida(e.target.value)}  
              >
                <option>UN</option>
                <option>kit</option>
              </Form.Control>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
          <Form.Group as={Col} md="4" controlId="id_categoria">
            <Form.Label>ID Categoría</Form.Label>
              <Form.Control
                required type="number" 
                value={id_categoria}
                onChange={(e) => setId_categoria(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="critico">
              <Form.Label>Stock crítico</Form.Label>
              <Form.Control
                required 
                type="number" 
                value={critico}
                onChange={(e) => setCritico(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Button variant="outline-dark" type="submit">
            Ingresar
          </Button>
        </Form>
      </div>
    )
  }

  else if(handleLoginUsers){
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
        password: password,
      }
      handleLoginUsers(data);
      axios.post('http://127.0.0.1:5000/auth/login', {email, password} )
      .then(res => {
        console.log(res);
      })
    }
    return(
      <div>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group md="4" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              required 
              type="email" 
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group md="4" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              required 
              type="password" 
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
  
          <Button type="submit">Ingresar</Button>
        </Form>
      </div>
    )
  }
  return(
    <div></div>
  )
};

export default MyForm;