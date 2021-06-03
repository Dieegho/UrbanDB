import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

import AuthService from "./../../services/auth.services";

const MyButtonsMenu = () => {
    const [showLectorBoard, setShowLectorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);

    useEffect(() => {
        const user = AuthService.getCurrentUser();
    
        if (user.admin == true) {
          setShowAdminBoard(true);
        }
        else if(user.admin == false){
            setShowLectorBoard(true);
        }
      }, []);

    // if(showAdminBoard){
    //     return(
    //         <>
    //             <Button variant="dark" size="lg" block as={Link} to="/areas">Revisar Inventario</Button>
    //             <Button variant="dark" size="lg" block as={Link} to="/ingresar-item">Ingresar Producto</Button>
    //             <Button variant="dark" size="lg" block as={Link} to="/retirar-item">Retirar Productos</Button>
    //             <Button variant="dark" size="lg" block as={Link} to="/nuevo-item">Ingresar Nuevo Producto</Button>
    //         </>
    //     )
    // }
    // else if(showLectorBoard){
    //     return(
    //         <>
    //             <Button variant="dark" size="lg" block as={Link} to="/areas">Revisar Inventario</Button>
    //         </>
    //     )
    // }
    return(
        <>
            {showAdminBoard && (
                <>
                    <Button variant="dark" size="lg" block as={Link} to="/areas">Revisar Inventario</Button>
                    <Button variant="dark" size="lg" block as={Link} to="/ingresar-item">Ingresar Producto</Button>
                    <Button variant="dark" size="lg" block as={Link} to="/retirar-item">Retirar Productos</Button>
                    <Button variant="dark" size="lg" block as={Link} to="/nuevo-item">Ingresar Nuevo Producto</Button>
                </>
            )}
            {showLectorBoard && (
                <Button variant="dark" size="lg" block as={Link} to="/areas">Revisar Inventario</Button>
            )}
        </>
    );
}

export default MyButtonsMenu;