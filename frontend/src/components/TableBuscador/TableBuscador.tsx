import React, {FC} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

interface props{
    headArr ?: {
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
    }
}

const MyTableBuscador: FC<props> = ({item, headArr}) =>{
    let columns=[];
    let rows=[];
    if(item){
        columns=headArr;
        rows=item;
    }
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