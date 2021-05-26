import React, { useState, FC, useRef } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface props {
  handleAddItemsTable ?: (item) => void;
  handleRetirarItems ?: (item) => void;
  // handleLoginUsers ?: (user) => void;
  handleAddNewItemsTable ?: (item) => void;
  items_id:{
    id:number;
    codigo: string;
    nombre: string;
    unidad_medida: string;
    cantidad: string;
  }[];
}

const MyForm: FC<props> = ({ handleAddItemsTable, handleRetirarItems, handleAddNewItemsTable, items_id}) => {
  
  if(handleAddItemsTable){

    const [scannerid, setScannerId] = useState(false);
    const [codigo, setCodigo] = useState("");
    const [name, setName] = useState("");
    const [unidadMedida, setUnidadMedida] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [validated, setValidated] = useState(false);
    const idScannerRef = useRef(null);
    const [show, setShow] = useState(false);
    
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
        cantidad: cantidad,
      }

      handleAddItemsTable(data);
      axios.post('http://127.0.0.1:5000/item/', {codigo, name, unidadMedida, cantidad} )
      .then(res => {
        console.log(res);
      })
    }

    const handleIdScanner = (e) => {
      let id = e.target.value;
      console.log(id);
      setScannerId(id);
      
      items_id.map((elem)=>{
        if(id == elem.id){
          setCodigo(elem.codigo);
          setName(elem.nombre);
          setUnidadMedida(elem.unidad_medida);
        }
      })
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

          {/* <Form.Row>
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
          </Form.Row> */}

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
    const [show, setShow] = useState(false);

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
      let cantidad_tabla;
      let id = e.target.value;
      console.log(id);
      setScannerId(id);
      
      items_id.map((elem)=>{
        if(id == elem.id){
          setCodigo(elem.codigo);
          setName(elem.nombre);
          setUnidadMedida(elem.unidad_medida);
        }
      })

      console.log(cantidad_tabla);
      
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
          </Form.Row>
          <Form.Row>

            <Form.Group as={Col} controlId="cantidad">
              <Form.Label>Cantidad</Form.Label>
              <Form.Control
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
                min={1}
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

          {/* <Form.Row>
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
          </Form.Row> */}

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
      </div>
    )
  }

  else if(handleAddNewItemsTable){
    const [codigo, setCodigo] = useState("");
    const [name, setName] = useState("");
    const [unidadMedida, setUnidadMedida] = useState("");
    const [critico, setCritico] = useState("");
    const [categoria, setCategoria] = useState("");
    const [area, setArea] = useState("");
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
        categoria: categoria,
        area: area,
      }
      console.log(data.unidad_medida);
      handleAddNewItemsTable(data);
      axios.post('http://127.0.0.1:5000/item/nuevo_item', {codigo, name, unidadMedida, critico, categoria, area} )
      .then(res => {
        console.log(res);
      })
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

            {/* <Form.Group as={Col} md="4" controlId="unidad_medida">
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
            </Form.Group> */}
            <Form.Group as={Col} md="4" controlId="unidad_medida">
              <Form.Label>Unidad de Medida</Form.Label>
              <Form.Control
                required
                type="text"
                value={unidadMedida}
                onChange={(e) => setUnidadMedida(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="4" controlId="critico">
              <Form.Label>Stock crítico</Form.Label>
              <Form.Control
                required 
                type="number" 
                value={critico}
                onChange={(e) => setCritico(e.target.value)}
                min={1}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="area">
              <Form.Label>Área</Form.Label>
              <Form.Control
                required 
                type="text" 
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="categoria">
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                required type="text" 
                value={categoria}
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

  // else if(handleLoginUsers){
  //   const [validated, setValidated] = useState(false);
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  //   const handleSubmit = (e) => {
  //     const form = e.currentTarget;
  //     if (form.checkValidity() === false) {
  //       e.preventDefault();
  //       e.stopPropagation();
  //     }
  //     setValidated(true);
  //     e.preventDefault();
  //     const data ={
  //       email: email,
  //       password: password,
  //     }
  //     handleLoginUsers(data);
  //     axios.post('http://127.0.0.1:5000/auth/login', {email, password} )
  //     .then(res => {
  //       console.log(res);
  //     })
  //   }
  //   return(
  //     <div>
  //       <Form noValidate validated={validated} onSubmit={handleSubmit}>
  //         <Form.Group md="4" controlId="email">
  //           <Form.Label>Email</Form.Label>
  //           <Form.Control 
  //             required 
  //             type="email" 
  //             placeholder="Enter email"
  //             value={email}
  //             onChange={(e) => setEmail(e.target.value)}
  //           />
  //           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
  //         </Form.Group>
  //         <Form.Group md="4" controlId="password">
  //           <Form.Label>Password</Form.Label>
  //           <Form.Control 
  //             required 
  //             type="password" 
  //             placeholder="Contraseña"
  //             value={password}
  //             onChange={(e) => setPassword(e.target.value)}
  //             />
  //           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
  //         </Form.Group>
  
  //         <Button variant="dark" /*onClick={}*/>Ingresar</Button>
  //       </Form>
  //     </div>
  //   )
  // }
  return(
    <div></div>
  )
};

export default MyForm;