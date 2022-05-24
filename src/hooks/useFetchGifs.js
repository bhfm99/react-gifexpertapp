import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });
    
    /*Lo que hace este codigo es que se ejecuta solo cuando el componente 
    es renderizado por primera vez. Asi no vuelve a llamar a nuestra api*/
    //Arreglo de dependencias '[]'
//Se hace el efecto para que solo se dispare cuando cambie la categoria
    useEffect( () => {
        /*Aqui adentro del efecto ejecutamos el cuerpo de mi peticion HTTP,
        aqui es donde necesito hacer esa peticion y traer esas imagenes, 
        como retorna una promesa utilizamos then*/
//Hace la peticion HTTP
        getGifs(category)
//Aqui tenemos las imagenes
        .then(imgs => {
//Y cuando tenemos la data se llama al setState para cambiarle la informacion
            setState({
                data: imgs,
                loading: false
            });
        });
    }, [category])
    /*Colocamos en el arreglo de dependencias la category 
    debido a que nos sirve por si esta cambia, entonces lo que indicamos 
    es que se vuelva a ejecutar este efecto, esta funcion*/
    
    return state; //{ data:[], loading: true};
}
