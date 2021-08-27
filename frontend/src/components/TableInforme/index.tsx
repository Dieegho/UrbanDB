import React, {FC} from 'react';

import BootstrapTable from 'react-bootstrap-table-next';

interface props{
    headRetirados?: {
        dataField: string;
        text: string;
    }[];

    headAreas?: {
        dataField: string;
        text: string;
    }[];

    bodyRetirados ?:{
        cant_retirada: number;
        area: string;
        categoria: string;
        nombre: string;
    }[];

    bodyAreas ?:{
        nombre:string;
    }[];
}

const TableInforme: FC<props> = ({bodyRetirados, headRetirados, headAreas, bodyAreas}) =>{    
    let cantidad = [];
    let headArea=[];
    let bodyArea=[];

    let headRetirado=[];
    let bodyRetirado=[];
    let bodyRetirado_Bombas_de_Agua_Potable=[];
    let bodyRetirado_Electricidad=[];
    let bodyRetirado_Clima=[];
    let bodyRetirado_Deteccion_de_Incendios=[];
    let bodyRetirado_Ascensores=[];
    let i = -1;    

    if(bodyArea){
        headArea=headAreas;
        bodyArea=bodyAreas;
        bodyRetirado=bodyRetirados;
        
        bodyRetirado.map((elem)=>{
            cantidad.push(elem.cantidad_retirada);
            i+=1;
            if(elem.area == 'Bombas de Agua Potable'){
                bodyRetirado_Bombas_de_Agua_Potable.push(bodyRetirados[i])
            }
            else if(elem.area == 'Electricidad'){
                
                bodyRetirado_Electricidad.push(bodyRetirados[i])
            }
            else if(elem.area == 'Clima'){
                
                bodyRetirado_Clima.push(bodyRetirados[i])
            }
            else if(elem.area == 'Detección de Incendios'){
                
                bodyRetirado_Deteccion_de_Incendios.push(bodyRetirados[i])
            }
            else if(elem.area == 'Ascensores'){
                
                bodyRetirado_Ascensores.push(bodyRetirados[i])
                
            }
        })
        headRetirado=headRetirados;
    }

    
    let cantidad_total = 0;
    cantidad.forEach(function(numero){
        cantidad_total += numero;
    });

    const state = { expanded: [0, 1, 2, 3, 4, 5] };
    
    const expandRow = {
        renderer: row => (
            <>
                { (bodyRetirado_Bombas_de_Agua_Potable && (row.nombre=='Bombas de Agua Potable') && (
                    <BootstrapTable
                        keyField='id'
                        data={ bodyRetirado_Bombas_de_Agua_Potable }
                        columns={ headRetirado }
                        striped
                        hover
                        condensed
                    />)
                )}
                { (bodyRetirado_Electricidad && (row.nombre=='Electricidad') && (
                    <BootstrapTable
                        keyField='id'
                        data={ bodyRetirado_Electricidad }
                        columns={ headRetirado }
                        striped
                        hover
                        condensed
                    />)
                )}
                { (bodyRetirado_Clima && (row.nombre=='Clima') && (
                    <BootstrapTable
                        keyField='id'
                        data={ bodyRetirado_Clima }
                        columns={ headRetirado }
                        striped
                        hover
                        condensed
                    />)
                )}
                { (bodyRetirado_Deteccion_de_Incendios && (row.nombre=='Detección de Incendios') && (
                    <BootstrapTable
                        keyField='id'
                        data={ bodyRetirado_Deteccion_de_Incendios }
                        columns={ headRetirado }
                        striped
                        hover
                        condensed
                    />)
                )}
                { (bodyRetirado_Ascensores && (row.nombre=='Ascensores') && (
                    <BootstrapTable
                        keyField='id'
                        data={ bodyRetirado_Ascensores }
                        columns={ headRetirado }
                        striped
                        hover
                        condensed
                    />)
                )}
            </>
        ),
        expanded: state.expanded
    };

    return(
        <>
            <p>Detalle por producto retirado</p>
            <BootstrapTable
                keyField='id'
                data={ bodyArea }
                columns={ headArea }
                expandRow={ expandRow }
                striped
                hover
                condensed
            />
            <p>Total de productos retirados: {cantidad_total}</p>
        </>
    )
}

export default TableInforme;