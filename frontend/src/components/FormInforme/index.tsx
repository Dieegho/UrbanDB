import React, {FC, useState} from "react";

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

interface props{
    handleChangeDate: (data) => void;
}

const FormInforme: FC<props> =({handleChangeDate}) => {

    const [mes, setMes] = useState("");
    const [anio, setAnio] = useState("");

    const handleSubmit = (e) => {
        const data = {
            mes: mes,
            anio: anio
        }
        handleChangeDate(data);
    }

    return(
        <>
        <Form onSubmit = {handleSubmit}>
        <Form.Row> 
            <Form.Group as={Col} md="4" controlId="Mes">
                <Form.Control
                    required
                    defaultValue="Mes"
                    as="select"
                    type="text"
                    value={mes}
                    onChange={(e) => setMes(e.target.value)}
                >
                    <option>Mes</option>
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                </Form.Control>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="Anio">
                <Form.Control
                    required
                    defaultValue="Año"
                    as="select"
                    type="text"
                    value={anio}
                    onChange={(e) => setAnio(e.target.value)}
                >
                    <option>Año</option>
                    <option>2021</option>
                </Form.Control>
                </Form.Group>
            </Form.Row>

            <Button variant="dark" type="submit">
            Ingresar
            </Button>
        </Form>

        </>
        
    )
}

export default FormInforme;