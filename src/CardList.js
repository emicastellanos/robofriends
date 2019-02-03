import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    // la consola del chrome dice: "Warning: Each child in an array or iterator should have a unique "key" prop
    //entonces podemos agregar una prop key unica (por ejemplo el id)
    
    // const cardComponent = robots.map( (user,index) => {
    //     return (
    //         <Card 
    //         key={index} 
    //         id={robots[index].id} 
    //         name={robots[index].name} 
    //         email={robots[index].email} />
    //     )
    // });
    //Pero mas cheto y mas cleaner si lo hacemos asi:
    return (
        <div>
            {
                robots.map ( (user,index) => {
                    return (
                        <Card
                        key={index} 
                        id={user.id} 
                        name={user.name} 
                        email={user.email} 
                        />
                        );
                    }) // en realidad va entre llaves porque es javascript dentro de html
            }
        </div>
    );
}

export default CardList;
