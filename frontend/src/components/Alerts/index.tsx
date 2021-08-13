import React, {useState, FC} from 'react';
import Alert from 'react-bootstrap/Alert';

interface props{
  alertas_menu:{
    id: number;
    critico: string;
    cantidad: string;
    nombre:string;
    area:string;
    categoria:string;
  }[];
};

let Alerts: FC<props> = ({alertas_menu}) => {
  let countR = 0;
  let countA = 0;

  const [bajo, setBajo] = useState(true);
  const [medio, setMedio] = useState(true);
  const [alto, setAlto] = useState(true);

  let mapeoR = alertas_menu.map((elem) => {
    if(elem.cantidad <= elem.critico){
      countR++;
      return(
        <p key={elem.id.toString()}>
          El producto {elem.nombre} de la categoría {elem.categoria} del área {elem.area} está bajo.
        </p>
      )
    }
  })

  let mapeoA = alertas_menu.map((elem) =>{
    if(elem.cantidad > elem.critico  && elem.cantidad <= (elem.critico + 2)){
        countA++;
        
        return(
          <p key={elem.id.toString()}>
            El producto {elem.nombre} de la categoría {elem.categoria} del área {elem.area} está a punto de agotarse.
          </p>
        )
    }
  }) 

  console.log('AMARILLO',countA)
  console.log(countR)

  return(
    <>
      {(bajo && countR > 0) && (
        <>
          <Alert variant="danger" key={1} onClose={() => setBajo(false)}>
            <Alert.Heading>Stock bajo!</Alert.Heading>
            <p>
              Tu stock se encuentra al límite. 
              {mapeoR}
            </p>
          </Alert>
        </>
      )}
      {(medio && countA > 0) && (
        <Alert variant="warning" key={2} onClose={() => setMedio(false)}>
        <Alert.Heading>Stock casi bajo!</Alert.Heading>
        <p>
          Tu stock está a punto de llegar a niveles críticos!
          {mapeoA}
        </p>
        </Alert>
      )}
      {(alto && (countA == 0) && (countR ==0) &&
        (<Alert variant="success" key={3} onClose={() => setAlto(false)} dismissible>
          <Alert.Heading>Stock Ok!</Alert.Heading>
          <p>
            Todo bien, aun tienes stock en tu inventario.
          </p>
          <p className="mb-0">
            Recuerda siempre llenarlo.
          </p>
        </Alert>)
      )}
    </>
  )
}  
export default Alerts;