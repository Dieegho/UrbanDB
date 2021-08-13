import React, {FC} from 'react';
import { Link } from 'react-router-dom';

import logo from '../../img/logo.png';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import AuthService from "./../../services/auth.services";

interface MenuNav {
  menuArr ?: {
    name: string;
    rute: string;
  }[];
  menuArrLog ?: {
    name: string;
    rute: string;
  }[];
}

const MyNavbar: FC<MenuNav> = ({menuArr, menuArrLog}) => {
  const logOut = () => {
    AuthService.logout();
  };

  if(menuArrLog){
    return (
      <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand>
          <img
            alt=""
            src={logo}
            width="130"
            height="90"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          {menuArrLog.map((elem)=>{
            return(
              <Nav.Link as={Link} key={"#" + elem.rute} to={elem.rute}> {elem.name}</Nav.Link>
            )
          })}
        </Nav>
      </Navbar>
    );
  };
  if(menuArr){
    return (
      <Navbar bg="dark" variant="dark" fixed="top" >
        <Navbar.Brand as={Link} key={"/menu"} to={"/menu"}>
          <img
            src={logo}
            width="130"
            height="90"
            className="d-inline-block align-top"
          />
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
          <Nav.Link as={Link} key={"#" + '/'} to={'/'} onClick={logOut}>Cerrar Sesión</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };

  return(
    <div></div>
  )
};

export default MyNavbar;