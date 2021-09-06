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
        cantidad_retirada: number;
        area: string;
        categoria: string;
        nombre: string;
        fecha_retirado: string;
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

    let auxB = [];
    let auxE = [];
    let auxC = [];
    let auxD = [];
    let auxA = [];
    let i = -1;    

    if(bodyArea){
        headArea=headAreas;
        bodyArea=bodyAreas;
        bodyRetirado=bodyRetirados;
        
        bodyRetirado.map((elem)=>{
            elem.fecha_retirado = elem.fecha_retirado.slice(0, 10)
            elem.mes = elem.fecha_retirado.slice(3,5)
            //console.log(elem.mes);
            //console.log(elem.fecha_retirado)
            i+=1;
            if(elem.area == 'Bombas de Agua Potable'){
        
                if(!auxB.includes(bodyRetirado[i].nombre)){
                    bodyRetirado_Bombas_de_Agua_Potable.push(bodyRetirado[i]);
                    cantidad.push(elem.cantidad_retirada);
                }

                auxB.push(elem.nombre);
            }
            else if(elem.area == 'Electricidad'){
                
                if(!auxE.includes(bodyRetirado[i].nombre)){
                    bodyRetirado_Electricidad.push(bodyRetirados[i]);
                    cantidad.push(elem.cantidad_retirada);
                }

                auxE.push(elem.nombre);
            }
            else if(elem.area == 'Clima'){
                
                if(!auxC.includes(bodyRetirado[i].nombre)){
                    bodyRetirado_Clima.push(bodyRetirados[i]);
                    cantidad.push(elem.cantidad_retirada);
                }

                auxC.push(elem.nombre);
            }
            else if(elem.area == 'Detección de Incendios'){
                
                if(!auxD.includes(bodyRetirado[i].nombre)){
                    bodyRetirado_Deteccion_de_Incendios.push(bodyRetirados[i]);
                    cantidad.push(elem.cantidad_retirada);
                }

                auxD.push(elem.nombre);
            }
            else if(elem.area == 'Ascensores'){
                 
                if(!auxA.includes(bodyRetirado[i].nombre)){
                    bodyRetirado_Ascensores.push(bodyRetirados[i]);
                    cantidad.push(elem.cantidad_retirada);
                }

                auxA.push(elem.nombre);
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