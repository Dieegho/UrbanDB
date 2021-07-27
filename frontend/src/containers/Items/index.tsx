import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Alert from 'react-bootstrap/Alert';

import Container from 'react-bootstrap/Container';
import MyNavbar from '../../components/Navbar';
import MyTittle from '../../components/Tittle';
import MyTable from '../../components/Table';
import MyButton from '../../components/Buttons';
import MyModalCodigo from '../../components/ModalCodigo';

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
    text: 'Und.'
  },
  {
    dataField: 'critico',
    text: 'Stock Crítico'
  },
  {
    dataField: 'timestamp',
    text: 'Fecha'
  },
  {
    text: ' Estado ',
    formatter: (cell, row) => aviso_stock(row.cantidad, row.critico)
  },
  {
    text: 'Código',
    formatter: (cell, row) => codigo(row.codigo, row.nombre)
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

let codigo = (codigo, nombre) => {

  let items = {
    codigo: codigo,
    nombre: nombre
  }
  //le tengo que entregar items al modal para que se lo entregue al código
  // const handleCodigo = (data) =>{
  //   const [item, setItem] = useState([]);
  //   setItem(data);
  // }

  return (
    <MyModalCodigo items={items}/>
  );
};

const Items = ({match}) => {
  let params = match.params;
  const [items, setItems] = useState([]);

  useEffect(()=>{
    axios.get(`https://control-inventarios-usurban.herokuapp.com/item/todo/${params.id}`)
    .then(res => {
      setItems(res.data)
    })
  },[])

  return (
    <>
      <MyNavbar menuArr={menuNavItems}/>
      <Container style={{marginTop: "150px"}}>
        <MyTittle nombres_items={items}/>
        <MyTable headArr={headTable} bodyArrItems={items}/>
        <MyButton items={items}/>
      </Container>
    </>
  );
};

export default Items;
