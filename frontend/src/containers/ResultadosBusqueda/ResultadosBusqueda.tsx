import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

import MyTableBuscador from './../../components/TableBuscador/TableBuscador';
import MyNavbar from './../../components/Navbar';
import MyCodigo from './../../components/Codigo';

let menuNav = [
  {
    name: 'Menú',
    rute: '/menu',
  },
];

let headTable = [
  {
    dataField: 'area',
    text: 'Área',
  },
  {
    dataField: 'categoria',
    text: 'Categoría',
  },
  {
    dataField: 'codigo',
    text: 'Código',
  },
  {
    dataField: 'nombre',
    text: 'Nombre',
  },
  {
    dataField: 'cantidad',
    text: 'Cantidad',
  },
  {
    dataField: 'unidad_medida',
    text: 'Und.',
  },
  {
    dataField: 'timestamp',
    text: 'Fecha',
  },
  {
    text: ' Estado ',
    formatter: (cell, row) => aviso_stock(row.cantidad, row.critico),
  },
  {
    text: 'Código',
    formatter: (cell, row) => codigo(row.codigo, row.nombre),
  },
];

let aviso_stock = (cantidad, critico) => {
  if (cantidad > critico + 4) {
    return <Alert variant="success">Stock Ok</Alert>;
  } else if (cantidad > critico + 2 && cantidad <= critico + 4) {
    return <Alert variant="warning">Stock casi bajo</Alert>;
  } else if (cantidad <= critico + 2) {
    return <Alert variant="danger">¡Stock Bajo!</Alert>;
  }
};

let codigo = (codigo, nombre) => {
  let items = {
    codigo: codigo,
    nombre: nombre,
  };
  return <MyCodigo items={items} />;
};

const ResultadosBusqueda = ({ match }) => {

  const [items, setItems] = useState([]);
  let query = match.params.filter

  query = query.split(":")

  const searchType = query[0]
  const value = query[1]

  useEffect(() =>{
      axios.get(`https://control-inventarios-usurban.herokuapp.com/item/buscador?type=${searchType}&value=${value}`)
      .then(res => {
        setItems(res.data)
      })
  },[])

  return (
    <div className="Menu">
      <MyNavbar menuArr={menuNav} />
      <Container style={{ marginTop: '150px' }}>
        <MyTableBuscador headArr={headTable} bodyitem={items}/>
      </Container>
    </div>
  );
};

export default ResultadosBusqueda;