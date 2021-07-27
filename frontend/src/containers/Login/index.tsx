import React from 'react';
import Container from 'react-bootstrap/Container';
import MyNavbar from '../../components/Navbar';
import MyFormLogin from '../../components/FormLogin';
import Footer from '../../components/Footer';

let menuNavLog =[
  // {
  // name: "Registrar Usuario",
  // rute: "/register"
  // },
  {
    name: "",
    rute: ""
  }
];

const Login = () => {
  return (
    <>
      <MyNavbar menuArrLog={menuNavLog}> </MyNavbar>
      <Container style={{marginTop: "150px", marginBottom:"350px"}}>
        <MyFormLogin/>
      </Container>
      <Footer/>
    </>
  );
}

export default Login;
