import React, {useState, useEffect} from 'react';
import axios from 'axios'

import Container from 'react-bootstrap/Container';

import Alerts from '../../components/Alerts';
import MyNavbar from '../../components/Navbar';
import MyButtonsMenu from '../../components/ButtonsMenu';
import MyBuscador from '../../components/Buscador/Buscador';


let menuNav = [{name: " ", rute: " "}];
const Menu = () => {
  const [items, setItems] = useState([]);

  useEffect(()=>{
    axios.get(`https://control-inventarios-usurban.herokuapp.com/item/todo`)
    .then(res => {
      setItems(res.data)
    })
  },[])

  console.log(items);
  
  return (
    <div className="Menu">
      <MyNavbar menuArr={menuNav}> </MyNavbar>
      <Container style={{marginTop: "150px"}}>
        <MyBuscador/>
        <h2> Bienvenido al control de inventarios del "Edificio 7"</h2>
        <h2>¿Qué desea hacer?</h2>
        <Alerts alertas_menu={items}></Alerts>
        <MyButtonsMenu/>
      </Container>
    </div>
  );
};

export default Menu;
