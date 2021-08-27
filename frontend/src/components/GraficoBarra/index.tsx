import React, {FC} from 'react';
import { Bar } from 'react-chartjs-2';

interface props{
  info :{
    cantidad_retirada: number;
    nombre: string;
    area: string;
  }[];
}

//la cantidad debería cambiar con el area cantidadA.lengh == nombres.lenght

//diferentes datas segun area
//3 cosas x: area y: cantidad nombre barra: nombre item

const HorizontalBarChart: FC<props> = ({info}) => {

  let areas = [];
  let cantidades = [];
  let items = [];
  let i = 0;

  let cantidad_B = [];
  let cantidad_E = [];
  let cantidad_C = [];
  let cantidad_D = [];
  let cantidad_A = [];
  
  info.map((elem) => {
    cantidades.push(elem.cantidad_retirada);
    items.push(elem.nombre)
    areas.push(elem.area)

    // i+=1
    // if(!areas.includes(elem.area)){
    //   if(elem.area == 'Bombas de Agua Potable'){
    //     areas[0] = elem.area;
    //   }
    //   else if(elem.area == 'Electricidad'){
    //     areas[1] = elem.area;
    //   }
    //   else if(elem.area == 'Clima'){
    //     areas[2] = elem.area;
    //   }
    //   else if(elem.area == 'Detección de Incendios'){
    //     areas[3] = elem.area;
    //   }
    //   else if(elem.area == 'Ascensores'){
    //     areas[4] = elem.area;
    //   }
    // }
    if(elem.area == 'Bombas de Agua Potable'){
      cantidad_B.push(elem.cantidad_retirada);
    }
    else if(elem.area == 'Electricidad'){
      cantidad_E.push(elem.cantidad_retirada);   
    }
    else if(elem.area == 'Clima'){
      cantidad_C.push(elem.cantidad_retirada);  
    }
    else if(elem.area == 'Detección de Incendios'){
      cantidad_D.push(elem.cantidad_retirada);
    }
    else if(elem.area == 'Ascensores'){
      cantidad_A.push(elem.cantidad_retirada);
    }
  })

  const data = {
    
    //labels: ['Bombas de Agua Potable', 'Electricidad', 'Clima', 'Detección de Incendios', 'Ascensores'],
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
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
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