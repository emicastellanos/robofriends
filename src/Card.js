import React from 'react';

const Card = ( {id,name,email} ) => {
//const id,name,email = props; (podria hacer eso si recibiera props por parametro. 
//Pero tambien se puede deseccionar dentro de los parametros and it is even cleaner)
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt = 'robotito' src={`https://robohash.org/${id}?150x150`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}}</p>
            </div>
        </div>
    );
}

export default Card;