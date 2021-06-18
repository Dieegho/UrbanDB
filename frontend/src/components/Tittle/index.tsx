import React, {FC} from 'react';
  
interface props{
    nombres_items ?:{
        area:string;
        categoria:string;
    }[],
    nombres_areas ?:{
        area:string;
        nombre:string;
    }[],
}

const MyTittle: FC<props> = ({nombres_items, nombres_areas}) => {
    let areas;
    let categorias;
    let aux;
    let nombre;
    if(nombres_items){
        aux = nombres_items.map((elem)=>{
            areas = elem.area;
            categorias = elem.categoria;
        })
    }
    else if(nombres_areas){
        aux = nombres_areas.map((elem)=>{
            areas = elem.area;
            nombre = elem.nombre;
        })
    }
    return(
        <>
            {nombres_items && (
                <>
                    <h4>Usted se encuentra en {areas}, {categorias}</h4>
                </>
            )}
            {nombres_areas && (
                <>
                    <h4>{nombre}</h4>    
                    <h4>Se encuentra en el área "{areas}"</h4>
                </>
            )}
        </>
    )
};

export default MyTittle;