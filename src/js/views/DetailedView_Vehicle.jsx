import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { Context } from "../store/appContext.js"

const style = {
    "maxWidth": "540px"
}


let VehBaseImageURL = 'https://starwars-visualguide.com/assets/img/vehicles'
let VehBaseURL = `https://www.swapi.tech/api/vehicle/`

const DetailedViewVehicle = ({ id, name, imageURL }) => {
    
    const {store, actions} = useContext(Context);

    // Pulls id from route
    const params = useParams();

    useEffect( () => {
        actions.getSingleVehicle(params.id)
    }, [])
    
    
    

    

    return(
        <>
            <div className="card mb-3" style={style}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`${VehBaseImageURL}/${params.id}.jpg`} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{store.singleVehicle.name}</h5>
                            <p className="card-text">Model: {store.singleVehicle.model}</p>
                            <p className="card-text">Vehicle Class: {store.singleVehicle.vehicle_class}</p>
                            <p className="card-text">Manufacturer: {store.singleVehicle.manufacturer}</p>
                            <p className="card-text">Cost: {store.singleVehicle.cost_in_credits} credits</p>
                            <p className="card-text">Length: {store.singleVehicle.length}</p>
                            <p className="card-text">Crew: {store.singleVehicle.crew}</p>
                            <p className="card-text">Passengers: {store.singleVehicle.passengers}</p>
                            <p className="card-text">Max Atmoshpering Speed: {store.singleVehicle.max_atmosphering_speed}</p>
                            <p className="card-text">Cargo Capacity: {store.singleVehicle.cargo_capacity}</p>
                            <p className="card-text">Consumables: {store.singleVehicle.consumables}</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailedViewVehicle

