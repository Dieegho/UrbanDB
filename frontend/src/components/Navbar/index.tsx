import React, {FC, useEffect, useState} from 'react';
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

interface MenuNav {
  menuArr: {
    name: string;
    rute: string;
  }[];
}

//desde items debe llegar el id de categorías
const MyNavbar: FC<MenuNav> = ({menuArr}) => {

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="130"
            height="90"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {menuArr.map((elem)=>{
              return(
                <Nav.Link as={Link} key={"#" + elem.rute} to={elem.rute}> {elem.name}</Nav.Link>
              )
            })}
          </Nav>
          <Nav>
            <Nav.Link as={Link} key={"#" + '/login'} to={'/login'}>Cerrar Sesión</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
