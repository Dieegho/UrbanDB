import React, {useState} from 'react';

import Container from 'react-bootstrap/Container';
import MyTable from '../../components/Table';
import MyNavbar from '../../components/Navbar';
import MyFormNewItem from '../../components/FormNewItem';

let menuNav = [
  {
    name:"Menú",
    rute: "/menu"
  },
];
let headTable = [
  {
    dataField: 'area',
    text: 'Área'
  },
  {
    dataField: 'categoria',
    text: 'Categoría'
  },
  {
    dataField: 'nombre',
    text: 'Nombre'
  },
  {
    dataField: 'unidad_medida',
    text: 'Und.'
  },
  {
    dataField: 'critico',
    text: 'Stock Crítico'
  },
];

const NuevoItem = () => {
  
  const [newItems, setnewItems] = useState([]);

  const handleAddNewItemsTable = (data) => {
    let aux = [...newItems];
    aux.push(data);
    setnewItems(aux);
  };

  return (
    <>
      <MyNavbar menuArr={menuNav}> </MyNavbar>
      <Container style={{marginTop: "150px"}}>
        <MyFormNewItem handleAddNewItemsTable={handleAddNewItemsTable}/>
        <MyTable headArr={headTable} bodyArrItems={newItems}></MyTable>
      </Container>
    </>
  );
};

export default NuevoItem;