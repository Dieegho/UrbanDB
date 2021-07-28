import React, {useEffect, useState} from 'react';
//import { useHistory } from 'react-router-dom';
//import '../App.global.css';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

import MyTable from '../../components/Table';
import MyNavbar from '../../components/Navbar';
import MyForm from '../../components/FormIngresarRetirar';

let menuNav = [
  {
    name:"Menú",
    rute: "/menu"
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
    text: 'Código'
  },
  {
    dataField: 'nombre',
    text: 'Nombre'
  },
  {
    dataField: 'unidad_medida',
    text: 'Und.'
  },
  {
    dataField: 'cantidad',
    text: 'Cantidad'
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
    text: ' alerta ',
    formatter: (cell, row) => aviso_stock(row.cantidad, row.critico),
  }
];

let aviso_stock = (cantidad, critico) => {
  if (cantidad > (critico + 2)) {
    return (
      <Alert variant='success'>Stock Ok</Alert>
    )
  }
  else if (cantidad > critico && cantidad <= (critico + 2)){
    return (
      <Alert variant='warning'>Stock casi bajo</Alert>
    )
  }
  else if (cantidad <= critico){
    return (
      <Alert variant='danger'>¡Stock Bajo!</Alert>
    )
  }
};

const IngresarItem = () => {

  const [items, setItems] = useState([]);
  // const [newItems, setnewItems] = useState([]);

  const handleAddItemsTable = (data) => {
    axios.get('https://control-inventarios-usurban.herokuapp.com/item/todo')
    .then(res => {
      setItems(res.data);
    })
    // let aux = [...newItems];
    // aux.push(data);
    // setnewItems(aux);  
  };

  useEffect(()=>{
    axios.get('https://control-inventarios-usurban.herokuapp.com/item/todo')
    .then(res => {
      setItems(res.data)
    })
  },[])

  return (
    <>
      <MyNavbar menuArr={menuNav}> </MyNavbar>
      <Container style={{marginTop: "150px"}}>
        <h4>Ingresar Productos</h4>
        <MyForm handleAddItemsTable={handleAddItemsTable} items_id={items}></MyForm>
        <MyTable headArr={headTable} bodyArrItems={items}></MyTable>
      </Container>
    </>
  );
};

export default IngresarItem;