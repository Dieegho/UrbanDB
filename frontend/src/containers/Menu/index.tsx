import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';

import Alerts from '../../components/Alerts';
import MyNavbar from '../../components/Navbar';
import MyButtonsMenu from '../../components/ButtonsMenu';
import MyBuscador from '../../components/Buscador';
import Footer from '../../components/Footer';

let menuNav = [{name: " ", rute: " "}];
const Menu = () => {
  const [items, setItems] = useState([]);  

  useEffect(()=>{
    axios.get(`https://control-inventarios-usurban.herokuapp.com/item/todo`)
    .then(res => {
      setItems(res.data)
    })
  },[])

  return (
    <>
      <MyNavbar menuArr={menuNav}/>
      <Container style={{marginTop: "150px", marginBottom:"50px"}}>
        <h2> Bienvenido al control de inventarios de "NLC7"</h2>
        <MyBuscador items={items}/>
        <Alerts alertas_menu={items}></Alerts>
        <MyButtonsMenu/>
      </Container>

      <Footer/>
    </>
  );
};

export default Menu;
