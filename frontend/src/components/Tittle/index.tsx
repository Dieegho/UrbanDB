import React, {FC} from 'react';
  
interface props{
    nombres_items:{
        area:string;
        categoria:string;
    }[],
    nombres_areas:{
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
        return(
            <h2>Usted se encuentra en {areas}, {categorias}</h2>
        )
    }
    else if(nombres_areas){
        aux = nombres_areas.map((elem)=>{
            areas = elem.area;
            nombre = elem.nombre;
        })
        return(
            <div>
                <h2>{nombre}</h2>    
                <h4>Se encuentra en el área "{areas}"</h4>
            </div>
        )
    }
    return(
        <h1></h1>
    )
};

export default MyTittle;