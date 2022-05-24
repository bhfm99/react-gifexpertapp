import React, {useState} from 'react';
import PropTypes from 'prop-types';
 
export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');//Dejamos al input como un String vacio
//'e' es el evento
//Manejar el valor de entrada
    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
//Para prevenir el comportamiento por defecto del formularios es '.preventDefault();'
        e.preventDefault();
        //console.log('Echo!!!!');

/*Hacemos la condicional para que no acepte espacios en blanco (que no escriban nada en el Input) 
debe de tener al menos dos caracteres
El método trim( ) elimina los espacios en blanco en ambos extremos del string*/
        if(inputValue.trim().length >= 2){
            setCategories(cats => [inputValue, ...cats]);
//Esto para que no pueda insertar dos veces la misma propiedad al array
            setInputValue('');
        }  
    }

    return(
    //Como el 'form' es un elemento que agrupa todo lo demas, no es necesario utilizar un 'fragment' o un 'div'
        <form onSubmit={handleSubmit}>
            <input 
                //Es de tipo texto
                type="text"
                /*El input value siempre va a ser el ultimo valor actualizado de lo que 
                la persona escibio en el input*/
                value={inputValue}
                /*Permite realizar cambios en el imput, osea escribir utilizando el metodo handleInputValue*/
                onChange={handleInputValue}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}