import React, {useState, useEffect} from 'react';
import axios from 'axios';

import MyNavbar from '../../components/Navbar';
import MyGrafico from './../../components/Grafico';
import MyTable from './../../components/TableInforme';

import Container from 'react-bootstrap/esm/Container';

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

const Informe = () => {

  const [items, setItems] = useState([]);   
  const [areas, setAreas] = useState([]);

  useEffect(()=>{
    axios.get(`https://control-inventarios-usurban.herokuapp.com/item/todo`)
    .then(res => {
      setItems(res.data);      
    })

    axios.get('https://control-inventarios-usurban.herokuapp.com/area/')
    .then(res => {    
      setAreas(res.data.data)
    })
    .catch(error => {
      console.log(error)
    });

  },[])



  return(
    <>
      <MyNavbar menuArr={menuNav}/>
      <Container style={{marginTop: "150px"}}>
        {/* <MyGrafico/> */}
        <MyTable headArr={headTable} headArea={headArea} bodyitem={items} bodyarea={areas}/>
      </Container>
    </>
  )
}

export default Informe;