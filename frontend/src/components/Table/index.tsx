import React, {FC} from 'react';
import './index.css';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
// import { CSVLink } from "react-csv";

interface tableArr {
  headArr: {
    dataField: string;
    text: string;
  }[];

  bodyArrItems ? : {
    id: number;
    codigo: string;
    nombre: string;
    cantidad: number;
    rank: number;
    unidad_medida: number;
    critico: number;
    categoria: string;
    area: string;
    timestamp: string;
  }[];

  bodyArrAreas ? : {
    id: number;
    nombre: string;
  }[];

  bodyArrCategorias ? : {
    id: number;
    id_area: number;
    categorias: string;
  }[];

  bodyArrMov ? : {
    id: number;
    codigo: string;
    nombre: string;
    cantidad: number;
    accion: number;
    unidad_medida: number;
    critico: number;
    categoria: string;
    area: string;
    timestamp: string;
  }[];
}

const MyTable: FC<tableArr> = ({headArr, bodyArrItems, bodyArrAreas, bodyArrCategorias, bodyArrMov}) => {

  let columns=[];
  let rows=[];

  if(bodyArrItems){
      columns= headArr;
      rows=bodyArrItems;
  }
  else if(bodyArrAreas){
    columns= headArr;
    rows=bodyArrAreas;
  }
  else if(bodyArrCategorias){
      columns= headArr;
      rows=bodyArrCategorias;
  }
  else if(bodyArrMov){
    columns=headArr;
    rows=bodyArrMov;
  }

  const customTotal = (from, to, size) => {

    if(bodyArrItems){
      
      return(
        <span className="react-bootstrap-table-pagination-total">
          Producto { from } al { to } de un total { size }.
        </span>
      )  
    }

    else if(bodyArrAreas){

      return(
        <span className="react-bootstrap-table-pagination-total">
          Área { from } al { to } de un total { size }.
        </span>
      )  
    }
    else if(bodyArrCategorias){

      return(
        <span className="react-bootstrap-table-pagination-total">
          Categoría { from } al { to } de un total { size }.
        </span>
      )  
    }
    else if(bodyArrMov){

        return(
          <span className="react-bootstrap-table-pagination-total">
            Producto { from } al { to } de un total { size }.
          </span>
        )  
    }
  }

  const options = {
    paginationSize: 5,
    pageStartIndex: 1,
    prePageText: 'Atrás',
    nextPageText: 'Siguiente',
    prePageTitle: 'Pre page',
    firstPageTitle: 'Next page',
    lastPageTitle: 'Last page',
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true
  };

  return (
    <div>
        <BootstrapTable
          keyField='id'
          data={ rows }
          columns={ columns }
          pagination={ paginationFactory(options) }
          striped
          hover
          condensed
        />
      {/* <CSVLink 
        data={rows} 
        //headers={columns}
        // filename={"my-file.csv"}
        // className="btn btn-primary"
        // target="_blank"
      >
        Download me
      </CSVLink>; */}
    </div>
  );
}

export default MyTable;
