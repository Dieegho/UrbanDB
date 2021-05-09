import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

interface props {
    items ? :{
        categoria: string;
        id: number;
        id_area: number;
    }[];
}
const MyButton: FC<props> = ({items}) => {
    let mensaje = "Regresar a ";
    let id;
    let categoria;
    
    let mapeo = items.map((elem) => {
        id= elem.id_area;
        categoria= elem.categoria;
    })
    mapeo;
    console.log(id);

    return(
        <div>
            <Button variant="outline-danger" as={Link} to={`/categorias/${id}`}> {mensaje} {categoria}</Button> 
        </div>
    )
};

export default MyButton;