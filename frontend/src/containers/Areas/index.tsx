import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import MyTable from '../../components/Table';
import MyNavbar from '../../components/Navbar';

let menuNavAreas = [
  {
    name: "Menú",
    rute: "/menu"
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
  return(
    <Button variant="outline-dark" as={Link} to={`/categorias/${id}`}> Revisar </Button>
  )
}

const Areas = () =>  {
  const [areas, setAreas] = useState([]);
  useEffect(()=>{    
    axios.get('https://control-inventarios-usurban.herokuapp.com/area/')
    .then(res => {    
      setAreas(res.data.data)
    })
    .catch(error => {
      console.log(error)
    });
  },[])  

  return (
    <div className="Areas">
      <MyNavbar menuArr={menuNavAreas}/>
      <Container style={{marginTop: "150px"}}>
        <MyTable headArr={headTable} bodyArrAreas={areas}/>
        <Button variant="outline-danger" as={Link} to={'menu'}> Regresar al menú</Button> 
      </Container>

    </div>
  );
};

export default Areas;