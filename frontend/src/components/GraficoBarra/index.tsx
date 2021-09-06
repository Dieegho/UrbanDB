import React, {FC} from 'react';
import { Bar } from 'react-chartjs-2';

interface props{
  info :{
    cantidad_retirada: number;
    nombre: string;
    area: string;
  }[];
}

const HorizontalBarChart: FC<props> = ({info}) => {

  let areas = [];
  let cantidades = [];
  let items = [];
  let suma = 0;
  let i = 0;
  let j = 0;

  info.map((elem)=>{
    cantidades.push(elem.cantidad_retirada);
  })
  
  let cantidades2 = []
  info.map((elem)=>{
    i+=1
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
      console.log(suma);
    }


  })
  

  console.log('despues del filtro', items);
  

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
      <p>Cantidad de productos retirados por area</p>
      <Bar data={data} options={options} />
    </>

  )
}

export default HorizontalBarChart;