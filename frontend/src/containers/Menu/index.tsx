import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import MyNavbar from '../../components/Navbar';
import Alerts from '../../components/Alerts';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

let menuNav = [{name: " ", rute: " "}];
const Menu = () => {
  const [items, setItems] = useState([]);
  useEffect(()=>{
    axios.get(`http://127.0.0.1:5000/item/todo`)
    .then(res => {
      console.log(res);
      setItems(res.data)
    })
  },[])
  console.log(items);

  return (
    <div>
      {/* <Alerts alertas={items}></Alerts> */}
      <div className="Menu">
        <MyNavbar menuArr={menuNav}> </MyNavbar>
      </div>
      <h2> Bienvenido al control de inventarios del "Edificio 7"</h2>
      <h2>¿Qué desea hacer?</h2>
      <div className="Menu">

        <ButtonGroup vertical>
          <Button variant="outline-dark" as={Link} to="/areas">Revisar Inventario</Button>
          <Button variant="outline-dark" as={Link} to="/ingresar-item">Ingresar Producto</Button>
          <Button variant="outline-dark" as={Link} to="/retirar-item">Retirar Productos</Button>
        </ButtonGroup>
        {/* <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link as={Link} to="/areas"> Revisar Inventario </Nav.Link>
          <Nav.Link as={Link} to="/ingresar-item">Ingresar Producto</Nav.Link>
          <Nav.Link as= {Link} to="/retirar-item">Retirar Productos</Nav.Link>
        </Nav> */}
      </div>
    </div>
  );
};

export default Menu;
