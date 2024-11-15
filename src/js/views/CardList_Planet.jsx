import React from 'react';
import PlanetCard from './Card_Planet.jsx';

const CardListPlanet = ({ array, imageURL, modifier }) => {
    return (
        <div className="row d-flex flex-nowrap overflow-auto">
                {
                    array.map(item => {
                        return (
                            <>
                                <PlanetCard 
                                    key={item.uid}
                                    id={item.uid}
                                    name={item.name}
                                    imageURL={imageURL}
                                />
                            </>
                            
                        );
                    })
                }
            </div>
    );
}

export default CardListPlanet;