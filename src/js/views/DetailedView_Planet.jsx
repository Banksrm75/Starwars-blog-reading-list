import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { Context } from "../store/appContext.js"

const style = {
    "maxWidth": "540px"
}


let PlanetBaseImageURL = 'https://starwars-visualguide.com/assets/img/planets'
let PlanetBaseURL = `https://www.swapi.tech/api/planet/`

const DetailedViewPlanet = ({ id, name, imageURL }) => {
    
    const {store, actions} = useContext(Context);

    // Pulls id from route
    const params = useParams();

    useEffect( () => {
        actions.getSinglePlanet(params.id)
    }, [])
    
    
    

    

    return(
        <>
            <div className="card mb-3" style={style}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`${PlanetBaseImageURL}/${params.id}.jpg`} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{store.singlePlanet.name}</h5>
                            <p className="card-text">Diameter: {store.singlePlanet.diameter}</p>
                            <p className="card-text">Rotation Period: {store.singlePlanet.rotation_period}</p>
                            <p className="card-text">Orbital Period: {store.singlePlanet.orbital_period}</p>
                            <p className="card-text">Gravity: {store.singlePlanet.gravity}</p>
                            <p className="card-text">Population: {store.singlePlanet.population}</p>
                            <p className="card-text">Climate: {store.singlePlanet.climate}</p>
                            <p className="card-text">Terrain: {store.singlePlanet.terrain}</p>
                            <p className="card-text">Surface Water: {store.singlePlanet.surface_water}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailedViewPlanet

