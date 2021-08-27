import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import MyNavbar from '../../components/Navbar';
import MyBarra from '../../components/GraficoBarra';
import MyTorta from '../../components/GraficoTorta';
import MyTable from './../../components/TableInforme';

import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

let menuNav = [
  {
    name: "Menú",
    rute: "/menu"
  }
];

let headRetirados = [
  {
    dataField: 'nombre',
    text: 'Nombre',
  },
  {
    dataField: 'cantidad_retirada',
    text: 'Cantidad',
  }
];

let headArea = [
  {
    dataField: 'nombre',
    text: 'Area',
  }
];

const Informe = () => {

  const [areas, setAreas] = useState([]);
  const [retirados, setRetirados] = useState([]);  

  useEffect(()=>{
    axios.get('https://control-inventarios-usurban.herokuapp.com/area/')
    .then(res => {    
      setAreas(res.data.data)
    })
    .catch(error => {
      console.log(error)
    });

    axios.get('https://control-inventarios-usurban.herokuapp.com/movimientos/retirados/')
    .then(res => {    
      //console.log(res.data);
      setRetirados(res.data)
      
    })
    .catch(error => {
      console.log(error)
    });

  },[])

  return(
    <>
      <MyNavbar menuArr={menuNav}/>
        <Container style={{marginTop: "150px"}}>
          <Col style={{marginTop: "50px", marginBottom:"30px"}}>
            <h3>Informe Mensual</h3>
            <div className="button-area">
            <Button variant="danger" as={Link} to={'/InformePDF'}>Exportar PDF</Button>
            </div>
          </Col>
          <Row>
            <Col>
              <MyTable headRetirados={headRetirados} headAreas={headArea} bodyAreas={areas} bodyRetirados={retirados}/>
            </Col>
            <Col>
              <MyTorta info={retirados}/>
            </Col>
          </Row>
          <Col style={{marginTop: "50px", marginBottom:"70px"}}>
            <MyBarra info={retirados}/>
          </Col>
        </Container>
    </>
  )
}

export default Informe;