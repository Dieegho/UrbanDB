import React, {useEffect, useState} from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';

import MyNavbar from '../../components/Navbar';
import MyTable from '../../components/Table';

let menuNav = [
    {
      name:"Menú",
      rute: "/menu"
    },
];

let headTable = [
    {
       dataField: 'area',
       text: 'Áreas'
    },
    {
      dataField: 'categoria',
      text: 'Categorías'
    },
    {
      dataField: 'codigo',
      text: 'Código'
    },
    {
      dataField: 'nombre',
      text: 'Nombre'
    },
    {
      dataField: 'cantidad',
      text: 'Cantidad'
    },
    {
      dataField: 'cantidad_ingresada',
      text: 'Ingreso/Retiro'
    },
    {
      dataField: 'accion',
      text: 'Acción'
    },
    {
      dataField: 'unidad_medida',
      text: 'Und.'
    },
    {
      dataField: 'timestamp',
      text: 'Fecha'
    },
    {
      dataField: 'user',
      text: 'Usuario'
    },
];

const Movimientos = () => {

  const [todo, setTodo] = useState([]);

  useEffect(()=>{
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
    })
  },[])

    return(
      <>
        <MyNavbar menuArr={menuNav}/>
        <Container style={{marginTop: "150px"}}>
            <h4>Registro de Entradas y Salidas</h4>
            <MyTable headArr={headTable} bodyArrMov={todo} />
        </Container>
      </>
    )
}

export default Movimientos;