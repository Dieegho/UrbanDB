import React, {FC, useState} from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import MyCodigo from './../Codigo';

interface props{
    items ?:{
        id: number;
        codigo: string;
        nombre: string;
    }[];
}

const MyModalCodigo: FC<props> = ({items}) => {

  const [show, setShow] = useState(false);

  return(
    <>
      <Button variant="outline-secondary" onClick={() => setShow(true)}>
        Imprimir Código
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>¿Desea Imprimir el código de "{items.nombre}"?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <MyCodigo items={items}/>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModalCodigo;