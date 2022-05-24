//El useEffect permite ejecutar cierto codigo de manera condicional para no ciclar de manera infinita 
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
//Mandamos como argumento la 'category' a nuestro useFetchGifs
    const {data:images, loading} = useFetchGifs(category);
//Para renombrar 'data' se utliza la desestructuracion ':' y despues el nombre que le queremos dar
    return(
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            {loading && <p className='animate__animated animate__flash'>Loading...</p>}
            <div className='card-grid'>
                    {
                        images.map(img => (
                            <GifGridItem 
                                key={img.id}
                                {...img}/>
                        ))
                    }
            </div>
        </> 
    )
}
