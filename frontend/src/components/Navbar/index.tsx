import React, {FC} from 'react';
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

interface MenuNav {
  menuArr: {
    name: string;
    rute: string;
  }[];
  menuArrLog: {
    name: string;
    rute: string;
  }[];
}

const MyNavbar: FC<MenuNav> = ({menuArr, menuArrLog}) => {
  if(menuArrLog){
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
          <Navbar.Brand>
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
            {menuArrLog.map((elem)=>{
              return(
                <Nav.Link as={Link} key={"#" + elem.rute} to={elem.rute}> {elem.name}</Nav.Link>
              )
            })}
          </Nav>
          <Nav>
            <Nav.Link as={Link} key={"#" + '/menu'} to={'/menu'}>Menú</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  };
  if(menuArr){
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
          <Navbar.Brand href="/menu">
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
            <Nav.Link as={Link} key={"#" + '/'} to={'/'}>Cerrar Sesión</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  };

  return(
    <div></div>
  )
};

export default MyNavbar;