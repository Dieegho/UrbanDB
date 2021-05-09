import React, {useEffect, useState} from 'react';
//import { useHistory } from 'react-router-dom';
//import '../App.global.css';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import MyTable from '../../components/Table';
import MyNavbar from '../../components/Navbar';
import MyForm from '../../components/Form';
import MyCodigo from '../../components/Codigo';

let menuNav = [
  {
    name:"Menú",
    rute: "/menu"
  },
];
let headTable = [
  {
    dataField: 'codigo',
    text: 'Código'
  },
  {
    dataField: 'categoria',
    text: 'Categoría'
  },
  {
    dataField: 'area',
    text: 'Área'
  },
  {
    dataField: 'nombre',
    text: 'Nombre'
  },
  {
    dataField: 'unidad_medida',
    text: 'UM'
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
  },
  {
    text: 'código',
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

const NuevoItem = () => {
  const [items, setItems] = useState([]);
  const [newItems, setnewItems] = useState([]);
  const handleAddNewItemsTable = (data) => {
    console.log(newItems);
    let aux = [...newItems];
    aux.push(data);
    setnewItems(aux);
  };
  useEffect(()=>{
    axios.get('http://127.0.0.1:5000/item/todo')
    .then(res => {
      console.log(res);
      setItems(res.data)
    })
  },[])

  return (
    <div className="IngresarProducto">
      <MyNavbar menuArr={menuNav}> </MyNavbar>
      <Container style={{marginTop: "150px"}}>
        <MyForm handleAddNewItemsTable={handleAddNewItemsTable}></MyForm>
        <MyTable headArr={headTable} bodyArrItems={items}></MyTable>
      </Container>
    </div>
  );
};

export default NuevoItem;