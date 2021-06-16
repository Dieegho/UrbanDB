import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


const MyBuscador= () => {
  const [data_input, setDataInput] = useState('');
  const [type_busqueda, setTypeBusqueda] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    if (data_input.length !== 0 && type_busqueda.length !== 0) {
      history.push(`/resultados-busqueda/${type_busqueda + ':' + data_input}`);
    } else {
      console.log("falta el filtro")
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div key="checkbox" className="mb-3">
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={2}>
              Escoja el tipo de búsqueda
            </Form.Label>
            <Form.Check
              inline
              type="radio"
              label="Código"
              name="searchType"
              id="codigo"
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
