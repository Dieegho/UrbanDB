import React, {FC} from 'react';
import './index.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

interface tableArr {
  headArr: {
    dataField: string;
    text: string;
  }[];

  bodyArrItems ? : {
    codigo: string;
    nombre: string;
    cantidad: number;
    unidad_medida: number;
    critico: number;
    categoria: string;
    area: string;
    timestamp: string;
  }[];

  // bodyArrNewItems ? : {
  //   id: number;
  //   codigo: string;
  //   nombre: string;
  //   unidad_medida: number;
  //   critico: string;
  //   cantidad: number;
  //   id_categoria: number;
  // }[];

  bodyArrAreas ? : {
    id: number;
    nombre: string;
  }[];

  bodyArrCategorias ? : {
    id_area: number;
    categorias: string;
  }[];
}

const MyTable: FC<tableArr> = ({headArr, bodyArrItems, bodyArrAreas, bodyArrCategorias, /*bodyArrNewItems*/}) => {
  let columns=[];
  let rows=[];
  if(bodyArrItems){
      columns= headArr
      rows=bodyArrItems
  }
  else if(bodyArrAreas){
    columns= headArr
    rows=bodyArrAreas
  }
  else if(bodyArrCategorias){
      columns= headArr
      rows=bodyArrCategorias
  }
  // else if(bodyArrNewItems){
  //   columns= headArr
  //   rows=bodyArrNewItems
  // }

  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Producto { from } al { to } de un total { size }.
    </span>
  );

  const options = {
    paginationSize: 10,
    pageStartIndex: 1,
    //alwaysShowAllBtns: true, // Always show next and previous button
    //withFirstAndLast: false, // Hide the going to First and Last page button
    //hideSizePerPage: true, // Hide the sizePerPage dropdown always
    //hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    //firstPageText: 'First',
    prePageText: 'Atrás',
    nextPageText: 'Siguiente',
    //lastPageText: 'Last',
    //nextPageTitle: 'First page',
    prePageTitle: 'Pre page',
    firstPageTitle: 'Next page',
    lastPageTitle: 'Last page',
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [{
      text: '4', value: 4
    }, {
      text: '6', value: 6
    },
    // {
    //   text: 'All', value: rows.length
    // }
  ] // A numeric array is also available. the purpose of above example is custom the text
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
    </div>
  );
}

export default MyTable;
