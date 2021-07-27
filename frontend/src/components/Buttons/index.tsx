import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

interface props {
    items ? :{
        area: string;
        id: number;
        id_area: number;
    }[];
}
const MyButton: FC<props> = ({items}) => {
    let mensaje = "Regresar a ";
    let id;
    let area;
    
    items.map((elem) => {
        id= elem.id_area;
        area= elem.area;
    })

    return(
        <div>
            <Button variant="outline-danger" as={Link} to={`/categorias/${id}`}> {mensaje} {area}</Button> 
        </div>
    )
};

export default MyButton;