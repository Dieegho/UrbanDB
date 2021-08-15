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
        timestamp: string;
    }[];

    bodyarea ?:{
        nombre:string;
    }[];
}

const TableInforme: FC<props> = ({bodyitem, headArr, headArea, bodyarea}) =>{    
    
    let columns=[];
    let rows=[];
    let head=[];
    let data=[];
    
    if(bodyarea){
        head=headArea;
        data=bodyarea;
        columns=headArr;
        rows=bodyitem;
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
        <>
            <h3>Detalle por producto retirado</h3>
            <BootstrapTable
                keyField='id'
                data={ data }
                columns={ head }
                expandRow={ expandRow }
                striped
                hover
                condensed
            />
        </>
    )
}

export default TableInforme;