import React from 'react';
import Container from 'react-bootstrap/Container';
import MyNavbar from '../../components/Navbar';
import MyFormRegister from '../../components/FormRegister';

let menuNavLog =[
  {
  name: "",
  rute: ""
  }
];

const Login = () => {
  return (
    <>
      <MyNavbar menuArrLog={menuNavLog}> </MyNavbar>
      <Container style={{marginTop: "150px"}}>
        <MyFormRegister/>
      </Container>
    </>
  );
}

export default Login;