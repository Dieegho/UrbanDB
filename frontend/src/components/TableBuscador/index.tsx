import React, {FC} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

interface props{
    headArr: {
        dataField: string;
        text: string;
    }[];

    bodyitem ?:{
        codigo: string;
        nombre: string;
        cantidad: number;
        unidad_medida: number;
        critico: number;
        categoria: string;
        area: string;
        timestamp: string;
    }[];
}

const MyTableBuscador: FC<props> = ({bodyitem, headArr}) =>{
    let columns=[];
    let rows=[];
    if(bodyitem){
        columns=headArr;
        rows=bodyitem;
    }

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
            text: '5', value: 5
        }, {
            text: '10', value: 10
        },
        // {
        //   text: 'All', value: rows.length
        // }
        ] // A numeric array is also available. the purpose of above example is custom the text
    };

    return(
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
    )
}

export default MyTableBuscador;