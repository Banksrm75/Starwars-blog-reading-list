import React from 'react';
import VehicleCard from './Card_Vehicle.jsx';

const CardListVehicle = ({ array, imageURL, modifier }) => {
    return (
        <div className="row d-flex flex-nowrap overflow-auto">
            {
                array.map(item => {
                    return (
                        <>
                            <VehicleCard 
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

export default CardListVehicle;