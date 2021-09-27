import React, {FC} from 'react';
import { Bar } from 'react-chartjs-2';

interface props{
  info :{
    cantidad_retirada: number;
    nombre: string;
    area: string;
    fecha_retirado: string;
    mes: string;
    anio: string;
  }[];

  date?:{
    mes: string;
    anio: string;
  }[];
}

const HorizontalBarChart: FC<props> = ({info, date}) => {
  console.log('barra', date);
  
  let areas = [];
  let cantidades = [];
  let cantidades2 = [];
  let items = [];
  let suma = 0;
  let mes = date.mes;
  let anio = date.anio;
  let i = 0;
  let j = 0;
  console.log('info', info);
  info.map((elem)=>{
    cantidades.push(elem.cantidad_retirada);
    // elem.mes = elem.fecha_retirado.slice(3,5);
    //elem.fecha_retirado = elem.fecha_retirado.slice(6,10);
    console.log('barra',elem.mes, elem.anio);
  })
  
  

  info.map((elem)=>{
    i+=1
    if(elem.anio==anio && elem.mes == mes){
      if(!areas.includes(elem.area)){
        areas.push(elem.area);
      }
  
      if(!items.includes(elem.nombre)){
        j+=1
        items.push(elem.nombre);
        for (let k=j; k<i+1; k++){
          suma=suma+cantidades[k];
        }
        cantidades2.push(suma);
      }
    }
  })

  const data = {

    labels: items,
    datasets: [
      {
        label: 'Cantidad',
        data: cantidades,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
    },
  };

  return(
    <>
      <p>Cantidad de productos retirados</p>
      <Bar data={data} options={options} />
    </>

  )
}

export default HorizontalBarChart;