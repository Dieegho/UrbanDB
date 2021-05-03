import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import MyTable from '../../components/Table';
import MyNavbar from '../../components/Navbar';
import MyFooter from '../../components/Footer';

let menuNav = [
  {
    name: "Menú",
    rute: "/"
  },
];
let headTable = [
  {
    dataField: 'nombre', 
    text: 'Áreas',
  },
  {
    text: ' ', 
    formatter: (cell, row) => revisar(row.id),
  }
];

let revisar = (id) => {
  console.log(id);
  
  return(
    <Button variant="outline-dark" as={Link} to={`/categorias/${id}`}> Revisar </Button>
  )
}

const Areas = () =>  {
  const [areas, setAreas] = useState([]);
  useEffect(()=>{
    axios.get('http://127.0.0.1:5000/area/')
    .then(res => {
      console.log(res);
      setAreas(res.data.data)
      console.log(res.data.data);
    })
  },[])

  return (
    <div>
      <div className="Areas">
        <MyNavbar menuArr={menuNav}></MyNavbar>
      </div>
      <div className="Areas">
        <h1>a</h1>
        <h2>Bienvenido al control de inventarios</h2>
        <h3>Por favor seleccione el área que desea revisar.</h3>
      </div>
      <div className="Areas">
        <MyTable headArr={headTable} bodyArrAreas={areas}></MyTable>
      </div>
      {/* <div className="Areas">
        <MyFooter></MyFooter>
      </div> */}
    </div>
  );
};

export default Areas;