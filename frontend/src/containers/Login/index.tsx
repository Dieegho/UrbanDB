import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MyNavbar from '../../components/Navbar';
import MyForm from '../../components/Form';

let menuNav =[
  {
  name: "",
  rute: ""
  }
];
const Login = () => {
  const [users, setUsers] = useState("");

  const handleLoginUsers = (user) => {
    console.log(users);
    let aux = [...users];
    aux.push(user);    
    setUsers(aux);
  };

  useEffect(()=>{
    axios.get(`http://127.0.0.1:5000/user`)
    .then(res => res.data.item)
  },[])

  return (
    <div>
      <div className="Login">
        <MyNavbar menuArr={menuNav}> </MyNavbar>
      </div>
      <div className="Login">
        <h2>Bienvenido</h2>
        <h3>Por favor, ingrese su email, nombre de usuario y contraseña.</h3>
      </div>
      <div className="Login">
        <MyForm handleLoginUsers={handleLoginUsers}></MyForm>
      </div>
    </div>
  );
}

export default Login;
