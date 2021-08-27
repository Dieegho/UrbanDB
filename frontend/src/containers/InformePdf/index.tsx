import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import MyBarra from '../../components/GraficoBarra';
import MyTorta from '../../components/GraficoTorta';
import MyTable from './../../components/TableInforme';

import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { PDFExport, savePDF } from '@progress/kendo-react-pdf';


let headRetirados = [
    {
      dataField: 'nombre',
      text: 'Nombre',
    },
    {
      dataField: 'cantidad_retirada',
      text: 'Cantidad',
    }
  ];
  
  let headArea = [
    {
      dataField: 'nombre',
      text: 'Area',
    }
  ];
  
  const Informe = () => {
  
    const [areas, setAreas] = useState([]);
    const [retirados, setRetirados] = useState([]);  
  
    useEffect(()=>{
      axios.get('https://control-inventarios-usurban.herokuapp.com/area/')
      .then(res => {    
        setAreas(res.data.data)
      })
      .catch(error => {
        console.log(error)
      });
  
      axios.get('https://control-inventarios-usurban.herokuapp.com/movimientos/retirados/')
      .then(res => {    
        //console.log(res.data);
        setRetirados(res.data)
        
      })
      .catch(error => {
        console.log(error)
      });
  
    },[])
  
    const pdfExportComponent = useRef(null);
  
    const  handleExportWithComponent  = (e) => {
      pdfExportComponent.current.save();
    }
  
    return(
      <>
          <Container style={{marginTop: "50px"}}>
            <Col style={{marginTop: "50px", marginBottom:"30px"}}>
              <div className="button-area">
              <Button variant="danger" onClick={handleExportWithComponent}>Descargar PDF</Button>
              <Button variant="dark" as={Link} to={'/Informe'}>Cancelar</Button>
              </div>
            </Col>
            <PDFExport  ref={pdfExportComponent}  paperSize="B2">
                <Container style={{marginTop: "50px"}}>
                    <h3>Informe mensual</h3>
                    <Col style={{marginTop: "50px", marginBottom:"70px"}}>
                        <MyTorta info={retirados}/>
                    </Col>
                    <Col style={{marginTop: "50px", marginBottom:"70px"}}>
                        <MyBarra info={retirados}/>
                    </Col>
                    <Col style={{marginTop: "50px", marginBottom:"70px"}}>
                        <MyTable headRetirados={headRetirados} headAreas={headArea} bodyAreas={areas} bodyRetirados={retirados}/>
                    </Col>
                </Container>
            </PDFExport>
          </Container>
      </>
    )
  }
  
  export default Informe;