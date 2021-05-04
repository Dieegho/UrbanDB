import React, {useState, FC} from 'react';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

interface props{
  alertas:{
    critico: string;
    cantidad: string;
    nombre:string;
    area:string;
    categoria:string;
  }[];
};

let Alerts: FC<props> = ({alertas}) => {
  console.log(alertas[1]);
  let countR = 0;
  let countA = 0;
  const [bajo, setBajo] = useState(true);
  const [medio, setMedio] = useState(true);
  const [alto, setAlto] = useState(true);
//hacer un count if count >= 1 return alerta
  let mapeoR = alertas.map((elem) => {
    if(elem.cantidad <= (elem.critico + 2)){
      countR++;
      return(
        <p>
          El producto {elem.nombre} de la categoría {elem.categoria} del área {elem.area} está bajo.
        </p>
      )
    }
  })

  let mapeoA = alertas.map((elem) =>{
    if(elem.cantidad > (elem.critico + 2) && elem.cantidad <= (elem.critico + 4)){
        countA++;
        return(
          <p>
            El producto {elem.nombre} de la categoría {elem.categoria} del área {elem.area} está a punto de agotarse.
          </p>
        )
    }
  })  


  if(bajo && countR > 0){
    return (
      <Alert variant="danger" onClose={() => setBajo(false)} dismissible>
        <Alert.Heading>Stock bajo!</Alert.Heading>
        <p>
          Tu stock se encuentra al límite. 
          {mapeoR}
        </p>
      </Alert>
    ); 
  }    
  if(medio && countA > 0){
    return(
      <Alert variant="warning" onClose={() => setMedio(false)} dismissible>
        <Alert.Heading>Stock casi bajo!</Alert.Heading>
        <p>
          Tu stock está a punto de llegar a niveles críticos!
          {mapeoA}
        </p>
      </Alert>
    )
  }
  if(alto && (countA == 0) && (countR ==0)){
    return(
      <Alert variant="success" onClose={() => setAlto(false)} dismissible>
        <Alert.Heading>Stock Ok!</Alert.Heading>
        <p>
          Todo bien, aun tienes stock en tu inventario.
        </p>
        <hr />
          <p className="mb-0">
            Recuerda siempre llenarlo.
          </p>
      </Alert>
    );
  };

  return(
    <div>
    </div>
  )
}  
export default Alerts;