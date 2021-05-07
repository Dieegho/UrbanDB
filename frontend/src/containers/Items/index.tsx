import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MyTable from '../../components/Table';
import MyNavbar from '../../components/Navbar';
import MyTittle from '../../components/Tittle';
import MyFooter from '../../components/Footer';
import Alert from 'react-bootstrap/Alert';

let menuNav = [
  {
    name: "Menú",
    rute: "/menu"
  },
  {
    name: "Áreas",
    rute: "/areas"
  },
  {
    name: "Categorías",
    rute: `/categorias/:id`,
  },
];

let headTable = [
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
    dataField: 'unidad_medida',
    text: 'Unidad de Medida'
  },
  {
    dataField: 'timestamp',
    text: 'Fecha'
  },
  {
    text: ' alerta ',
    formatter: (cell, row) => aviso_stock(row.cantidad, row.critico),
  }
];

let aviso_stock = (cantidad, critico) => {
  if (cantidad > (critico + 4)) {
    return (
      <Alert variant='success'>Stock Ok</Alert>
    )
  }
  else if (cantidad > (critico + 2) && cantidad <= (critico + 4)){
    return (
      <Alert variant='warning'>Stock casi bajo</Alert>
    )
  }
  else if (cantidad <= (critico + 2)){
    return (
      <Alert variant='danger'>¡Stock Bajo!</Alert>
    )
  }
};

const Items = ({match}) => {
  let params = match.params;
  const [items, setItems] = useState([]);
  useEffect(()=>{
    axios.get(`http://127.0.0.1:5000/item/todo/${params.id}`)
    .then(res => {
      setItems(res.data)
    })
  },[])

  return (
    <div>
      <div className="Items">
        <MyNavbar menuArr={menuNav}/>
      </div>
      <div className="Items">
        <MyTittle nombres_items={items}/>
      </div>
      <div className="Items">
        <MyTable headArr={headTable} bodyArrItems={items}/>
      </div>
      {/* <div className="Items">
        <MyFooter/>
      </div> */}
    </div>
  );
};

export default Items;
