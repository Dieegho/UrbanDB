import React from 'react';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

import AuthService from "./../../services/auth.services";

const MyButtonsMenu = () => {
    const currentUser = AuthService.getCurrentUser();
    if(currentUser.admin == true){
        return(
            <>
                <Button variant="dark" size="lg" block as={Link} to="/areas">Revisar Inventario</Button>
                <Button variant="dark" size="lg" block as={Link} to="/ingresar-item">Ingresar Producto</Button>
                <Button variant="dark" size="lg" block as={Link} to="/retirar-item">Retirar Productos</Button>
                <Button variant="dark" size="lg" block as={Link} to="/nuevo-item">Ingresar Nuevo Producto</Button>
            </>
        )
    }
    else if(currentUser.admin == false){
        return(
            <>
                <Button variant="dark" size="lg" block as={Link} to="/areas">Revisar Inventario</Button>
            </>
        )
    }
    return(
        <></>
    );
}

export default MyButtonsMenu;