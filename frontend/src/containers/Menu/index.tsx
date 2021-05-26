import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import Alerts from '../../components/Alerts';
import MyNavbar from '../../components/Navbar';
import MyButtonsMenu from '../../components/ButtonsMenu';


let menuNav = [{name: " ", rute: " "}];
const Menu = () => {
  const [items, setItems] = useState([]);
  useEffect(()=>{
    axios.get(`http://127.0.0.1:5000/item/todo`)
    .then(res => {
      setItems(res.data)
    })
  },[])

  return (
    <div className="Menu">
      <MyNavbar menuArr={menuNav}> </MyNavbar>
      <Container style={{marginTop: "150px"}}>
        <h2> Bienvenido al control de inventarios del "Edificio 7"</h2>
        <h2>¿Qué desea hacer?</h2>
        <Alerts alertas_menu={items}></Alerts>
        {/* <Button variant="dark" size="lg" block as={Link} to="/areas">Revisar Inventario</Button>
        <Button variant="dark" size="lg" block as={Link} to="/ingresar-item">Ingresar Producto</Button>
        <Button variant="dark" size="lg" block as={Link} to="/retirar-item">Retirar Productos</Button>
        <Button variant="dark" size="lg" block as={Link} to="/nuevo-item">Ingresar Nuevo Producto</Button>       */}
        <MyButtonsMenu/>
      </Container>
    </div>
  );
};

export default Menu;
