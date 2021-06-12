import React, { useState, useEffect } from 'react';
import filterFactory, { selectFilter } from 'react-bootstrap-table2-filter';
import axios from 'axios';

import Alert from 'react-bootstrap/Alert';

import Container from 'react-bootstrap/Container';
import MyNavbar from '../../components/Navbar';
import MyTittle from '../../components/Tittle';
import MyTable from '../../components/Table';
import MyButton from '../../components/Buttons';
import MyCodigo from '../../components/Codigo';

let menuNavItems = [
  {
    name: "Menú",
    rute: "/menu"
  },
  {
    name: "Áreas",
    rute: "/areas"
  },
];

//debo poner las alertas
const selectOptionsArr = [{
  value: 0,
  label: 'Stock Ok'
}, {
  value: 1,
  label: 'Stock casi bajo'
}, {
  value: 2,
  label: '¡Stock Bajo!'
}];


let headTable = [
  {
    dataField: 'codigo',
    text: 'Código'
  },
  {
    dataField: 'nombre',
    text: 'Nombre'
  },
  {
    dataField: 'cantidad',
    text: 'Cantidad'
  },
  {
    dataField: 'unidad_medida',
    text: 'Unidad de Medida'
  },
  {
    dataField: 'timestamp',
    text: 'Fecha'
  },
  {
    text: ' Estado ',
    formatter: (cell, row) => aviso_stock(row.cantidad, row.critico),
    filter: selectFilter({
      options: selectOptionsArr
    })
  },
  {
    text: 'Código',
    formatter: (cell, row) => codigo(row.id, row.nombre)
  }
];

let aviso_stock = (cantidad, critico) => {
  if (cantidad > (critico + 4)) {
    return (
      <Alert variant='success'>Stock Ok</Alert>
    )
  }
  else if (cantidad > (critico + 2) && cantidad <= (critico + 4)){
    return (
      <Alert variant='warning'>Stock casi bajo</Alert>
    )
  }
  else if (cantidad <= (critico + 2)){
    return (
      <Alert variant='danger'>¡Stock Bajo!</Alert>
    )
  }
};

let codigo = (id, nombre) => {
  let items = {
    id: id,
    nombre: nombre
  }
  return (
    <MyCodigo items={items}/>
  );
};

const Items = ({match}) => {
  let params = match.params;
  const [items, setItems] = useState([]);
  useEffect(()=>{
    axios.get(`https://control-inventarios-usurban.herokuapp.com/${params.id}`)
    .then(res => {
      setItems(res.data)
    })
  },[])

  return (
    <div className="Items">
      <MyNavbar menuArr={menuNavItems}/>
      <Container style={{marginTop: "150px"}}>
        <MyTittle nombres_items={items}/>
        <MyTable headArr={headTable} bodyArrItems={items}/>
        <MyButton items={items}/>
      </Container>
    </div>
  );
};

export default Items;
