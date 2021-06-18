import React, {useEffect, useState} from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import MyTable from '../../components/Table';
import MyNavbar from '../../components/Navbar';
import MyFormNewItem from '../../components/FormNewItem/FormNewItem';

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
    dataField: 'area',
    text: 'Área'
  },
  {
    dataField: 'categoria',
    text: 'Categoría'
  },
  {
    dataField: 'nombre',
    text: 'Nombre'
  },
  {
    dataField: 'unidad_medida',
    text: 'Und.'
  },
  // {
  //   dataField: 'cantidad',
  //   text: 'Cantidad'
  // },
  {
    dataField: 'critico',
    text: 'Stock Crítico'
  },
  // {
  //   dataField: 'timestamp',
  //   text: 'Fecha'
  // },
];

const NuevoItem = () => {
  // const [items, setItems] = useState([]);
  const [newItems, setnewItems] = useState([]);

  const handleAddNewItemsTable = (data) => {
    let aux = [...newItems];
    aux.push(data);
    setnewItems(aux);
  };
  
  // useEffect(()=>{
  //   axios.get('http://127.0.0.1:5000/item/todo')
  //   .then(res => {
  //     console.log(res);
  //     setItems(res.data)
  //   })
  // },[])

  return (
    <>
      <MyNavbar menuArr={menuNav}> </MyNavbar>
      <Container style={{marginTop: "150px"}}>
        <MyFormNewItem handleAddNewItemsTable={handleAddNewItemsTable}/>
        <MyTable headArr={headTable} bodyArrItems={newItems}></MyTable>
      </Container>
    </>
  );
};

export default NuevoItem;