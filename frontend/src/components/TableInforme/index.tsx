import React, {FC} from 'react';

import BootstrapTable from 'react-bootstrap-table-next';

interface props{
    headArr?: {
        dataField: string;
        text: string;
    }[];

    headArea?: {
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

    bodyarea ?:{
        nombre:string;
    }[];
}

const TableInforme: FC<props> = ({bodyitem, headArr, headArea, bodyarea}) =>{
    console.log(bodyarea);
    
    let columns=[];
    let rows=[];
    let head=[];
    let data=[];

    if(bodyitem){
        columns=headArr;
        rows=bodyitem;
        head=headArea;
        data=bodyarea;
    }

    const expandRow = {
        renderer: row => (
          <div>
            <BootstrapTable
                keyField='id'
                data={ rows }
                columns={ columns }
                striped
                hover
                condensed
            />
          </div>
        )
    };

    return(
        <div>
            <BootstrapTable
                keyField='id'
                data={ data }
                columns={ head }
                expandRow={ expandRow }
                striped
                hover
                condensed
            />
        </div>
    )
}

export default TableInforme;