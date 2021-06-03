import React, {FC, useState} from 'react';
import {Link} from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

interface props{
    item ?:{ //viene desde el menú
        codigo: string;
        nombre: string;
    }[];
}
const MyBuscador: FC<props> = ({item}) => { //item.nombre || item.codigo == input 
//hacer un buscar por item por área o por categoría => todo direcciona a un listado de items o un item.
//usar estados para guardar lo que entra en el buscador, luego compararlo con todo lo que traigo de la tabla
//si encuentra que son iguales a lo que entró del buscador redirecciona a la tabla
//sino retorno algo que diga que ese producto no existe

    const [data_input, setDataInput] = useState("");
    let data;
    let search;

    const handleSubmit = (e) =>{
        search = item.map((elem)=>{
            if(data_input == elem.codigo){
                data = data_input;
            }
            else if(data_input == elem.nombre){
                data = data_input;
            }
        })
    }

    return(
        <>
            <Form onSubmit = {handleSubmit}>
                <InputGroup className="mb-2 mr-sm-2">
                    <InputGroup.Prepend>
                    <Button variant="danger" as={Link} to={`/resultados-busqueda/${data}`}>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="16" 
                            height="16" 
                            fill="currentColor" 
                            className="bi bi-search" 
                            viewBox="0 0 16 16"
                        >
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </Button>
                    </InputGroup.Prepend>
                    <FormControl 
                        required 
                        type="text"
                        placeholder="Buscador"
                        value={data_input}
                        onChange={(e) => setDataInput(e.target.value)}
                    />
                </InputGroup>
            </Form>
        </>
    )
}

export default MyBuscador;