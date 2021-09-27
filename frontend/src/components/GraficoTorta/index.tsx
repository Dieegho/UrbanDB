import React, {FC} from 'react';
import Chart from "react-apexcharts";


interface props{
  info :{
    cantidad_retirada: number;
    area: string;
    mes: string;
    anio: string;
    fecha_retirado: string;
  }[];

  date?:{
    mes: string;
    anio: string;
  }[];
}

const PieChart: FC<props> = ({info, date}) => {

  let area = []
  let cantidad = []

  let cantidad_B = 0;
  let cantidad_E = 0;
  let cantidad_C = 0;
  let cantidad_D = 0;
  let cantidad_A = 0;

  let auxB = [];
  let auxE = [];
  let auxC = [];
  let auxD = [];
  let auxA = [];

  let mes = date.mes;
  let anio = date.anio;

  info.map((elem) => {
    //elem.mes = elem.fecha_retirado.slice(3,5);
    //elem.fecha_retirado = elem.fecha_retirado.slice(6,10);
    console.log('torta', elem.mes, elem.anio);
    
  
    if(elem.anio==anio && elem.mes == mes){
      if(!area.includes(elem.area)){
        area.push(elem.area);
      }
  
      if(elem.area == 'Bombas de Agua Potable'){
  
        if(!auxB.includes(elem.nombre)){
          cantidad_B = cantidad_B + elem.cantidad_retirada; 
        }
        auxB.push(elem.nombre);
      }
      else if(elem.area == 'Electricidad'){
  
        if(!auxE.includes(elem.nombre)){
          cantidad_E = cantidad_E + elem.cantidad_retirada;   
        }
        auxE.push(elem.nombre);
         
      }
      else if(elem.area == 'Clima'){
  
        if(!auxC.includes(elem.nombre)){
          cantidad_C = cantidad_C + elem.cantidad_retirada;  
        }
        auxC.push(elem.nombre);
          
      }
      else if(elem.area == 'Detección de Incendios'){
          
        if(!auxD.includes(elem.nombre)){
          cantidad_D = cantidad_D + elem.cantidad_retirada; 
        }
        auxD.push(elem.nombre);
      }
      else if(elem.area == 'Ascensores'){
        
        if(!auxA.includes(elem.nombre)){
          cantidad_A = cantidad_A + elem.cantidad_retirada; 
        }
        auxA.push(elem.nombre);
      }
    }
  }) 
  
  for (let i = 0; i < area.length; i++){
    if(cantidad_B>0 && (area[i] == 'Bombas de Agua Potable')){
      cantidad.push(cantidad_B);
    }
    if(cantidad_E>0 && (area[i] == 'Electricidad')){
      cantidad.push(cantidad_E);
    }
    if(cantidad_C>0 && (area[i] == 'Clima')){
      cantidad.push(cantidad_C);
    }
    if(cantidad_D>0 && (area[i] == 'Detección de Incendios')){
      cantidad.push(cantidad_D);
    }
    if(cantidad_A>0 && (area[i] == 'Ascensores')){
      cantidad.push(cantidad_A);
    }
  }  

  const state = {
    series: cantidad,
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: area,
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }
  }


  return(
    <>
      <p>Porcentaje de productos por area</p>
      <Chart options={state.options} series={state.series} type="pie" width={500} />
    </>
  )
}

export default PieChart;