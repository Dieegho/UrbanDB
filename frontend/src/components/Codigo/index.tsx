import React, {FC, useRef} from 'react';

import Barcode from 'react-barcode';
import ReactToPrint from "react-to-print";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

interface props{
  items?:{
      id: number;
      codigo: string;
      nombre: string;
  }[];
}

const MyCodigo: FC<props> = ({items}) => {

  //if codigo > numero => barcode mas grande
  // if codigo < número => barcode mas pequeño

  //codigo.lenght > 4 = width = 3.1

  //NLC7
  // ecarrasco@usurbanrealty.com
  const componentRef = useRef();
  const config = {
    // marginTop: "20px",
    // marginBottom: "20px",
    fontOptions: "bold",
    width: 2.3,
    height: 45,
    format: "CODE128",
    fontSize: 12
  };

  const mystyle = {
    color: "Black",
    backgroundColor: "White",
    padding: "3px",
    fontFamily: "bold",
    fontSize: "13px"
  };
  
  return(
    <>
      <Container  ref={componentRef}>
        <Barcode value = {items.codigo} {...config}/>
        <center style={mystyle}>{items.nombre}</center>
      </Container>
      <ReactToPrint
      trigger={() =>
        <Button variant="danger">
          Imprimir
        </Button>
      }
      content={() => componentRef.current}
      copyStyles={false}
      />
    </>
  )
}

export default MyCodigo;