import React from 'react';

export const GifGridItem = ({title, url}) => {
    return (
        <div className="card animate__animated animate__fadeIn">
            {/*El atributo alt sirve para poner algun mensaje*/}
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}