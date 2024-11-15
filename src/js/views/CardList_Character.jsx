import React from 'react';
import CharacterCard from './Card_Character.jsx';

const CardListCharacter = ({ array, imageURL, modifier }) => {
    return (
        <div className="row d-flex flex-nowrap overflow-auto">
            {
                array.map(item => {
                    return (
                        <>
                            <CharacterCard 
                                key={item.uid}
                                id={item.uid}
                                name={item.name}
                                imageURL={imageURL}
                                modifier={modifier}
                            />
                        </>
                        
                    );
                })
            }
        </div>
        
    );
}

export default CardListCharacter;