import React, {useState, useEffect} from 'react';

import axios from 'axios';

import Container from 'react-bootstrap/Container';
import MyTable from '../../components/Table';
import MyNavbar from '../../components/Navbar';
import MyFormNewItem from '../../components/FormNewItem';

let menuNav = [
  {
    name:"Menú",
    rute: "/menu"
  },
];
let headTable = [
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
  {
    dataField: 'critico',
    text: 'Stock Crítico'
  },
];

const NuevoItem = (match) => {
  
  const [newItems, setnewItems] = useState([]);
  const [items, setItems] = useState([]);

  const handleAddNewItemsTable = (data) => {
    axios.get(`https://control-inventarios-usurban.herokuapp.com/item/todo`)
    .then(res => {
      setItems(res.data);      
    })
    let aux = [...newItems];
    aux.push(data);
    setnewItems(aux);
  };

  useEffect(()=>{
    axios.get(`https://control-inventarios-usurban.herokuapp.com/item/todo`)
    .then(res => {
      setItems(res.data);
    })
  },[])

  return (
    <>
      <MyNavbar menuArr={menuNav}> </MyNavbar>
      <Container style={{marginTop: "150px"}}>
        <MyFormNewItem handleAddNewItemsTable={handleAddNewItemsTable} items={items}/>
        <MyTable headArr={headTable} bodyArrItems={newItems}></MyTable>
      </Container>
    </>
  );
};

export default NuevoItem;