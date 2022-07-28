import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import MyTable from '../../components/Table';
import MyTittle from '../../components/Tittle';
import MyNavbar from '../../components/Navbar';

let menuNav = [
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
    dataField: 'nombre',
    text: 'Categorías'
  },
  {
    text: 'Revisar',
    formatter: (cell, row) => revisar(row.id),
  },
];

let revisar = (id) => {

  return(
    <Button variant="outline-dark" as={Link} to={`/items/${id}`}> Revisar </Button>
  )
}

const Categorias = ({match}) => {
  let params = match.params;
  const [categorias, setCategorias] = useState([]);
  useEffect(()=>{
    axios.get(`https://control-inventarios-usurban.herokuapp.com/categoria/${params.id}`)
    .then(res => {
      setCategorias(res.data)
    })
  },[])

  return (
    <>
      <MyNavbar menuArr={menuNav}></MyNavbar>
      <Container style={{marginTop: "150px"}}>
        <MyTittle nombres_areas={categorias}></MyTittle>
        <MyTable headArr={headTable} bodyArrCategorias={categorias}/>
        <Button variant="outline-danger" as={Link} to={'/areas'}>Regresar a Áreas</Button> 
      </Container>
    </>
  );
};

export default Categorias;
