import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    //const categories = ['Dragon Ball', 'Pokemon', 'One Punch'];*/
    const [categories, setCategories] = useState(['Dragon Ball']);

    //const handleAdd = () => {
                        //'...' operador spreed  
        //setCategories([...categories, 'Samurai X']);
        //setCategories(cat => [...cat, 'Samurai X']);
    //}*/ 

    return(
        <>
            <h2>GifExpertApp</h2>
{/*Gracias a esto podemos mandar como argumento a setCategories de la funcion hacia AddCategorys*/}
            <AddCategory 
                setCategories={setCategories}
            />
            <hr/>
                <ol>
                    {
                    //MAP sirve para transformar cada uno de los elementos que estan dentro del arreglo
                    //Al igual que este fragmento de codigo nos sirve como un for, puesto que recorre los elementos.
                        categories.map(category =>( 
                            <GifGrid 
                                key={category}
                                category={category}
                            />
                        ))
                    }
                </ol>
        </>  
    );      
}