import React, {FC, useState} from 'react';
import Barcode from 'react-barcode';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

interface props{
    items:{
        id: number;
        codigo: string;
        nombre: string;
    }
}

const MyCodigo: FC<props> = ({items}) => {

    const [show, setShow] = useState(false);

    return(
        <>
        <Button variant="outline-secondary" onClick={() => setShow(true)}>
          Imprimir Código
        </Button>
  
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>¿Desea Imprimir el código de {items.nombre}?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Barcode value={items.codigo} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Cancelar
            </Button>
            <Button variant="danger" onClick={() => setShow(false)}>
              Imprimir
            </Button>
          </Modal.Footer>
        </Modal>
        
      </>
    );
};

export default MyCodigo;