import React from 'react';
import {Pie} from 'react-chartjs-2';
import { MDBContainer } from "mdbreact";
// const state = {
//   labels: ['January', 'February', 'March',
//            'April', 'May'],
//   datasets: [
//     {
//       label: 'Rainfall',
//       backgroundColor: [
//         '#B21F00',
//         '#C9DE00',
//         '#2FDE00',
//         '#00A6B4',
//         '#6800B4'
//       ],
//       hoverBackgroundColor: [
//       '#501800',
//       '#4B5000',
//       '#175000',
//       '#003350',
//       '#35014F'
//       ],
//       data: [65, 59, 80, 81, 56]
//     }
//   ]
// }

const state = {
  dataPie: {
    labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
    datasets: [
      {
        data: [300, 50, 100, 40, 120],
        backgroundColor: [
          "#F7464A",
          "#46BFBD",
          "#FDB45C",
          "#949FB1",
          "#4D5360",
          "#AC64AD"
        ],
        hoverBackgroundColor: [
          "#FF5A5E",
          "#5AD3D1",
          "#FFC870",
          "#A8B3C5",
          "#616774",
          "#DA92DB"
        ]
      }
    ]
  },
  barChartOptions: {
    responsive: true,
    maintainAspectRatio: true,
    responsiveAnimationDuration: 1
  }
}

const Torta = () => {
  return(
    <>
      <p>Cantidad de productos retirados por área</p>
      {/* <Pie
          data={state}
          height={550}
          width={550}
          options={{
              title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
              },
              legend:{
              display:true,
              position:'center'
              }
          }}
          /> */}
      <MDBContainer>
        <Pie data={state.dataPie} options={state.barChartOptions} />
      </MDBContainer>
      
    </>  
  )
}

export default Torta;