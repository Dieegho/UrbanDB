import React, {FC} from 'react';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

interface props{
    user:{
        nombre:string;
        admin:number;
    }[],
}

const MyMenuButtons: FC<props> = ({user}) => {

    if(user.admin == 1){
        return(
            <>
                <Button variant="outline-dark" as={Link} to="/areas">Revisar Inventario</Button>
                <Button variant="dark" as={Link} to="/ingresar-item">Ingresar Producto</Button>
                <Button variant="dark" as={Link} to="/retirar-item">Retirar Productos</Button>
                <Button variant="dark" as={Link} to="/nuevo-item">Ingresar Nuevo Producto</Button>
            </>
        )
    }
    else if(user.admin == 0){
        return(
            <>
                <Button variant="outline-dark" as={Link} to="/areas">Revisar Inventario</Button>
            </>
        )
    }
    return(
        <></>
    );
}

export default MyMenuButtons;