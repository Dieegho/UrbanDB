import React, { useState, FC, useRef } from 'react';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

interface props{
    handleAddNewItemsTable: (item) => void;
}

const MyFormNewItem: FC<props> = ({handleAddNewItemsTable}) => {
    
    const [name, setName] = useState("");
    const [unidadMedida, setUnidadMedida] = useState("");
    const [categoria, setCategoria] = useState("");
    const [area, setArea] = useState("");
    const [critico, setCritico] = useState("");
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
        nombre: name,
        unidad_medida: unidadMedida,
        categoria: categoria,
        area: area,
        critico: critico
      }

      handleAddNewItemsTable(data);

      axios.post('http://127.0.0.1:5000/item/nuevo_item', {name, unidadMedida, categoria, area, critico} )
      .then(res => {
        console.log(res);
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

            {/* <Form.Group as={Col} md="4" controlId="unidad_medida">
                <Form.Label>Unidad de medida</Form.Label>
                <Form.Control
                    required 
                    type="text"
                    placeholder="Unidad de medida"
                    value={unidadMedida}
                    onChange={(e) => setUnidadMedida(e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group> */}

            <Form.Group as={Col} md="4" controlId="critico">
              <Form.Label>Stock Crítico</Form.Label>
              <Form.Control
                required 
                type="numer"
                placeholder="Stock crítico"
                value={critico}
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
    // const [name, setName] = useState("");
    // const [unidadMedida, setUnidadMedida] = useState("");
    // const [critico, setCritico] = useState("");
    // const [categoria, setCategoria] = useState("");
    // const [area, setArea] = useState("");
    // const [validated, setValidated] = useState(false);

    // const handleSubmit = (e) =>{
    //   const form = e.currentTarget;
    //   console.log(unidadMedida);
      
    //   if (form.checkValidity() === false) {
    //     e.preventDefault();
    //     e.stopPropagation();        
    //   }
    //   setValidated(true);
    //   e.preventDefault();

    //   const data = {
    //     nombre: name,
    //     unidad_medida: unidadMedida,
    //     critico : critico,
    //     categoria: categoria,
    //     area: area,
    //   }
    //   console.log("UNIDAD MEDIDA:");
      
    //   console.log(data);
    //   handleAddNewItemsTable(data);
    //   axios.post('http://127.0.0.1:5000/item/nuevo_item', {name, unidadMedida, critico, categoria, area} )
    //   .then(res => {
    //     console.log(res);
    //   })
    // }

    // return(
    //   <div>
    //     <Form validated={validated} onSubmit = {handleSubmit}>
    //       <Form.Row>
    //       {/* <Form.Group as={Col} md="4" controlId="codigo">
    //           <Form.Label>Código</Form.Label>
    //           <Form.Control
    //             required 
    //             type="text"
    //             placeholder="Ingrese el código del producto"
    //             value={codigo}
    //             onChange={(e) => setCodigo(e.target.value)}
    //           />
    //           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    //         </Form.Group> */}

    //         <Form.Group as={Col} md="4" controlId="nombre">
    //           <Form.Label>Nombre</Form.Label>
    //           <Form.Control
    //             required 
    //             type="text"
    //             placeholder="Ingrese el nombre del producto"
    //             value={name}
    //             onChange={(e) => setName(e.target.value)}
    //           />
    //           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    //         </Form.Group>

    //         <Form.Group as={Col} md="4" controlId="unidad_medida">
    //           <Form.Label>Unidad de Medida</Form.Label>
    //           <Form.Control
    //             required 
    //             defaultValue="UN"  
    //             as="select"
    //             value={unidadMedida}
    //             onChange={(e) => setUnidadMedida(e.target.value)}  
    //           >
    //             <option>UN</option>
    //             <option>kit</option>
    //           </Form.Control>
    //           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    //         </Form.Group>
    //       </Form.Row>

    //       <Form.Row>
    //         <Form.Group as={Col} md="4" controlId="critico">
    //           <Form.Label>Stock crítico</Form.Label>
    //           <Form.Control
    //             required 
    //             type="number" 
    //             value={critico}
    //             onChange={(e) => setCritico(e.target.value)}
    //             min={1}
    //           />
    //           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    //         </Form.Group>

    //         <Form.Group as={Col} md="4" controlId="area">
    //           <Form.Label>Área</Form.Label>
    //           <Form.Control
    //             required 
    //             type="text" 
    //             value={area}
    //             onChange={(e) => setArea(e.target.value)}
    //           />
    //           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    //         </Form.Group>

    //         <Form.Group as={Col} md="4" controlId="categoria">
    //           <Form.Label>Categoría</Form.Label>
    //           <Form.Control
    //             required type="text" 
    //             value={categoria}
    //             onChange={(e) => setCategoria(e.target.value)}
    //           />
    //           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    //         </Form.Group>

    //       </Form.Row>

    //       <Button variant="dark" type="submit">
    //         Ingresar
    //       </Button>
    //     </Form>
    //   </div>
    // )
}

export default MyFormNewItem;