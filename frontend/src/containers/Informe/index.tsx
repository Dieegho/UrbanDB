import React, {useState, useEffect} from 'react';
import axios from 'axios';

import MyNavbar from '../../components/Navbar';
import MyBarra from '../../components/GraficoBarra';
import MyTorta from '../../components/GraficoTorta';
import MyTable from './../../components/TableInforme';

import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

let menuNav = [
  {
    name: "Menú",
    rute: "/menu"
  }
];

let headTable = [
  {
    dataField: 'codigo',
    text: 'Código',
  },
  {
    dataField: 'nombre',
    text: 'Nombre',
  },
  {
    dataField: 'cantidad',
    text: 'Cantidad',
  },
  {
    dataField: 'unidad_medida',
    text: 'Und.',
  },
  {
    dataField: 'timestamp',
    text: 'Fecha',
  }
];

let headArea = [
  {
    dataField: 'nombre',
    text: 'Área',
  }
];

// le mando un área y que me entregue los items relacionado a esa área
const Informe = ({ match }) => {

  //el area llega a la tabla
  //de la tabla lo envía de vuelta para acá en un prop
  //meto el area en un estado
  //esa área va a ser la ruta del get

  //hacer el get en la tabla

  const [areas, setAreas] = useState([]);
  const [todo, setTodo] = useState([]);

  useEffect(()=>{
    axios.get('https://control-inventarios-usurban.herokuapp.com/area/')
    .then(res => {    
      setAreas(res.data.data)
    })
    .catch(error => {
      console.log(error)
    });

    axios.get(`https://control-inventarios-usurban.herokuapp.com/movimientos`)
    .then(res => {
      res.data.map((elem)=>{
        if(elem.accion == 1){
          elem.accion = 'Ingresado';
        }
        else if(elem.accion == 2){
          elem.accion = 'Retirado';
        }
        else if(elem.accion == 3){
          elem.accion = 'Nuevo';
        }
      })

      setTodo(res.data)
    });

  },[])



  return(
    <>
      <MyNavbar menuArr={menuNav}/>
      <Container style={{marginTop: "150px"}}>
        <Row>
          <Col><MyTorta/></Col>
          <Col><MyBarra/></Col>
        </Row>
        <Col style={{marginTop: "50px", marginBottom:"70px"}}>
          <MyTable headArr={headTable} headArea={headArea} bodyarea={areas} bodyitem={todo}/>
        </Col>
      </Container>
    </>
  )
}

export default Informe;