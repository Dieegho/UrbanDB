import React, {useEffect, useState} from 'react';
//import { useHistory } from 'react-router-dom';
//import '../App.global.css';
import axios from 'axios';
import MyTable from '../../components/Table';
import MyNavbar from '../../components/Navbar';
import MyForm from '../../components/Form';
import MySubmitButton from '../../components/Tittle';
import MyFooter from '../../components/Footer';

let menuNav = [
  {
    name:"Menú",
    rute: "/menu"
  },
];
let headTable = [
  {
    dataField: 'codigo',
    text: 'Código'
  },
  {
    dataField: 'categoria',
    text: 'Categoría'
  },
  {
    dataField: 'area',
    text: 'Área'
  },
  {
    dataField: 'nombre',
    text: 'Nombre'
  },
  {
    dataField: 'unidad_medida',
    text: 'UM'
  },
  {
    dataField: 'cantidad',
    text: 'Cantidad'
  },
  {
    dataField: 'critico',
    text: 'Stock Crítico'
  },
  {
    dataField: 'timestamp',
    text: 'Fecha'
  },
];

const IngresarProducto = () => {
  const [items, setItems] = useState([]);
  const [newItems, setnewItems] = useState([]);
  const handleAddItemsTable = (data) => {
    console.log(newItems);
    let aux = [...newItems];
    aux.push(data);
    setnewItems(aux);
  };
  useEffect(()=>{
    axios.get('http://127.0.0.1:5000/item/todo')
    .then(res => {
      console.log(res);
      setItems(res.data)
    })
  },[])

  return (
    <div>
      <div className="IngresarProducto">
        <MyNavbar menuArr={menuNav}> </MyNavbar>
      </div>
      <div>Por favor ingrese un producto</div>
      <div className="IngresarProducto">
        <MyForm handleAddItemsTable={handleAddItemsTable}></MyForm>
        <MyTable headArr={headTable} bodyArrItems={items}></MyTable>
      </div>
      {/* <div className="IngresarProducto inline (css)">
        <MyFooter></MyFooter>
      </div> */}
    </div>
  );
};

export default IngresarProducto;
