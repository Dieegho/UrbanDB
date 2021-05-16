import React, {useEffect, useState} from 'react';
//import { useHistory } from 'react-router-dom';
//import '../App.global.css';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import MyTable from '../../components/Table';
import MyNavbar from '../../components/Navbar';
import MyCodigo from '../../components/Codigo';
import MyForm from '../../components/Form';
import Alert from 'react-bootstrap/Alert';
import MyFooter from '../../components/Footer';

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
  // {
  //   dataField: 'rank',
  //   text: 'Rank',
  //   formatter: (cell, row) => rankFormatter(row.cantidad, row.critico),
  //   formatExtraData: {
  //     up: 'glyphicon glyphicon-chevron-up',
  //     down: 'glyphicon glyphicon-chevron-down'
  // },
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

// const rankFormatter = (cantidad, critico) =>{
//   let 
//   return (
//     <i className={ formatExtraData[cell] } />
//   );
// }

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

const IngresarProducto = () => {

  const [items, setItems] = useState([]);
  const [newItems, setnewItems] = useState([]);

  const handleAddItemsTable = (data) => {
    console.log(newItems);
    let aux = [...newItems];
    aux.push(data);
    setnewItems(aux);    
  };

  useEffect(()=>{
    axios.get('http://127.0.0.1:5000/item/todo')
    .then(res => {
      setItems(res.data)
    })
  },[])

  return (
    <>
      <MyNavbar menuArr={menuNav}> </MyNavbar>
      <Container style={{marginTop: "150px"}}>
        <MyForm handleAddItemsTable={handleAddItemsTable} items_id={items}></MyForm>
        <MyTable headArr={headTable} bodyArrItems={items}></MyTable>
      </Container>
    </>
  );
};

export default IngresarProducto;