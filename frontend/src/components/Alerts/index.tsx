import React, {useState, FC} from 'react';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

interface props{
  alertas:{
    critico: number;
    cantidad: number;
    nombre:string;
    area:string;
    categoria:string;
  }[];
};

//mapeo a alertas y vamos a guardar en Alertas_rojo/amarllo=[{}] solo los que están en el if 
//verde es else
//if están en amarillo o en rojo return mensaje con Alertas_rojo/amarillo

let Alerts: FC<props> = ({alertas}) => {
  let cant;
  let crit;
  let mapeo;

  let Alertas_amarillo: {
    critico: number;
    cantidad: number;
    nombre:string;
    area:string;
    categoria:string;
  };
  const [bajo, setBajo] = useState(true);
  const [medio, setMedio] = useState(true);
  const [alto, setAlto] = useState(true);
  const [critico, setCritico] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [nombre, setNombre] = useState("");
  const [area, setArea] = useState("");
  const [categoria, setCategoria] = useState("");
  const [alertaRojo, setAlertaRojo] = useState([]);

  // let rojo = bajo && (cant <= (crit + 2));
  // let amarillo = medio && (cant > (crit + 2) && cant <= (crit + 4)); 
  // let verde = alto && (cant > (crit + 4));
//ME KIERO MATAR

  const AlertasRojo = {
    critico: critico,
    cantidad: cantidad,
    nombre: nombre,
    area: area,
    categoria: categoria
  };

  const handleAddItemsTable = (AlertasRojo) => {
    console.log("Alerta2");
    
    console.log(alertaRojo);
    
    let aux = [...alertaRojo];
    aux.push(AlertasRojo);    
    setAlertaRojo(aux);
    }

  mapeo = alertas.map((elem) =>{

    if(bajo && (elem.cantidad <= (elem.critico + 2))){
      setCantidad(elem.cantidad);
      setCritico(elem.critico);
      setNombre(elem.nombre);
      setArea(elem.area);
      setCategoria(elem.categoria);

      handleAddItemsTable(AlertasRojo);

    }
    
  })
  console.log("Alerta:");
  console.log(alertaRojo);
  console.log("Cantidad");
  
  console.log(cantidad);
  

  if (AlertasRojo) {
      return (
        <Alert variant="danger" onClose={() => setBajo(false)} dismissible>
          <Alert.Heading>Stock bajo!</Alert.Heading>
          <p>
            Tu stock se encuentra al límite.
            El producto {AlertasRojo.nombre} de la categoría {AlertasRojo.categoria} del área {AlertasRojo.area} está bajo. 
          </p>
        </Alert>
      );
  }
  // else if(amarillo){
  //   return(
  //     <Alert variant="warning" onClose={() => setMedio(false)} dismissible>
  //       <Alert.Heading>Stock casi bajo!</Alert.Heading>
  //       <p>
  //         Tu stock está a punto de llegar a niveles críticos!
  //       </p>
  //     </Alert>
  //   )
  // }

  // if(verde){
  //   return(
  //     <Alert variant="success" onClose={() => setAlto(false)} dismissible>
  //       <Alert.Heading>Stock Ok!</Alert.Heading>
  //       <p>
  //         Todo bien, aun tienes stock en tu inventario.
  //       </p>
  //       <hr />
  //         <p className="mb-0">
  //           Recuerda siempre llenarlo.
  //         </p>
  //     </Alert>
  //   )
  // }
  return(<div></div>)
}  
export default Alerts;