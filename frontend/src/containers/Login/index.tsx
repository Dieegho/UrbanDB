import React from 'react';
import Container from 'react-bootstrap/Container';
import MyNavbar from '../../components/Navbar';
import MyFormLogin from '../../components/FormLogin/FormLogin';

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
        <MyFormLogin/>
      </Container>
    </>
  );
}

export default Login;
