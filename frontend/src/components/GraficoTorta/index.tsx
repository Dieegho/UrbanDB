import React, {FC} from 'react';
import Chart from "react-apexcharts";


interface props{
  info :{
    cantidad_retirada: number;
    area: string;
  }[];
}

const PieChart: FC<props> = ({info}) => {

  let area = []
  let cantidad = []
  let cantidad_B = 0;
  let cantidad_E = 0;
  let cantidad_C = 0;
  let cantidad_D = 0;
  let cantidad_A = 0;

  info.map((elem) => {
    if(!area.includes(elem.area)){
      area.push(elem.area);
    }

    if(elem.area == 'Bombas de Agua Potable'){
      cantidad_B = cantidad_B + elem.cantidad_retirada; 
    }
    else if(elem.area == 'Electricidad'){
      cantidad_E = cantidad_E + elem.cantidad_retirada;    
    }
    else if(elem.area == 'Clima'){
      cantidad_C = cantidad_C + elem.cantidad_retirada;   
    }
    else if(elem.area == 'Detección de Incendios'){
      cantidad_D = cantidad_D + elem.cantidad_retirada;  
    }
    else if(elem.area == 'Ascensores'){
      cantidad_A = cantidad_A + elem.cantidad_retirada;
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