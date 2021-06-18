import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface props{
  items:{
    codigo:string;
    nombre:string;
    area:string;
    categoria:string;
  }[];
}
const MyBuscador: FC<props>= ({items}) => {
  const [data_input, setDataInput] = useState('');
  const [type_busqueda, setTypeBusqueda] = useState('');
  const [showType, setShowType] = useState(false);
  const [showData, setShowData] = useState(false);
  const [existe, setExiste] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(type_busqueda.length !== 0) {
      items.map((elem)=>{
        if(data_input == elem.area && type_busqueda == 'area'){
          setExiste(true);
          history.push(`/resultados-busqueda/${type_busqueda + ':' + data_input}`);
        }
        else if(data_input == elem.categoria && type_busqueda == 'categoria'){
          setExiste(true);
          history.push(`/resultados-busqueda/${type_busqueda + ':' + data_input}`);
        }
        else if(data_input == elem.codigo && type_busqueda == 'codigo'){
          setExiste(true);
          history.push(`/resultados-busqueda/${type_busqueda + ':' + data_input}`);
        }
        else if(data_input == elem.nombre && type_busqueda == 'nombre'){
          setExiste(true);
          history.push(`/resultados-busqueda/${type_busqueda + ':' + data_input}`);
        }
        else if(existe == false){
          setShowData(true);
        }
      })
    }else{
      setShowType(true);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div key="checkbox" className="mb-3">
          <h6>Seleccione el tipo de búsqueda:</h6>
          <Form.Group>
            <Form.Check
              inline
              type="radio"
              label="Código"
              name="searchType"
              id="codigo"
              color="green"
              onChange={() => {
                setTypeBusqueda('codigo');
              }}
            />
            <Form.Check
              inline
              type="radio"
              id="nombre"
              label="Nombre"
              name="searchType"
              onChange={() => {
                setTypeBusqueda('nombre');
              }}
            />
            <Form.Check
              inline
              type="radio"
              id="area"
              label="Área"
              name="searchType"
              onChange={() => {
                setTypeBusqueda('area');
              }}
            />
            <Form.Check
              inline
              type="radio"
              id="categoria"
              label="Categoría"
              name="searchType"
              onChange={() => {
                setTypeBusqueda('categoria');
              }}
            />
          </Form.Group>
        </div>

        <Modal show={showType} onHide={() => setShowType(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Por favor seleccione el tipo de búsqueda</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="danger" onClick={() => setShowType(false)}>
              Aceptar
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showData} onHide={() => setShowData(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Los datos ingresados no existe para el tipo de búsqueda seleccionado</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="danger" onClick={() => setShowData(false)}>
              Aceptar
            </Button>
          </Modal.Footer>
        </Modal>

        <InputGroup className="mb-2 mr-sm-2">
          <InputGroup.Prepend>
            <Button
              variant="danger"
              type="submit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </Button>
          </InputGroup.Prepend>
          <FormControl
            required
            type="text"
            placeholder="Buscador"
            name="buscador"
            value={data_input}
            onChange={(e) => setDataInput(e.target.value)}
          />
        </InputGroup>
      </Form>
    </>
  );
};

export default MyBuscador;
