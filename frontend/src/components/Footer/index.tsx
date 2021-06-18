import React from "react";

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from 'react-bootstrap/Button';

import logo from '../../img/kk.png';

const FooterPage = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="bottom">
      <Navbar.Brand>
        <img
          alt=""
          src={logo}
          width="130"
          height="90"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      {/* <Container>
        <Navbar.Text>
        <ButtonGroup vertical>
          <Button variant="outline-secondary">Pamela Pinilla</Button>
          <Button variant="outline-secondary">pamela.pinilla98@gmail.com</Button>
        </ButtonGroup>
        </Navbar.Text>
      </Container> */}
    </Navbar>
  );
}

export default FooterPage;