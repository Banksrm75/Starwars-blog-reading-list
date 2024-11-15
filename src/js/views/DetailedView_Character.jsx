import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { Context } from "../store/appContext.js"

const style = {
    "maxWidth": "540px"
}


let CharBaseImageURL = 'https://starwars-visualguide.com/assets/img/characters'
let CharBaseURL = `https://www.swapi.tech/api/people/`

const DetailedViewCharacter = ({ id, name, imageURL }) => {
    
    const {store, actions} = useContext(Context);

    // Pulls id from route
    const params = useParams();

    useEffect( () => {
        actions.getSingleCharacter(params.id)
    }, [])
    
    
    

    

    return(
        <>
            <div className="card mb-3" style={style}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`${CharBaseImageURL}/${params.id}.jpg`} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{store.singleCharacter.name}</h5>
                            <p className="card-text">Birth Year: {store.singleCharacter.birth_year}</p>
                            <p className="card-text">Eye Color: {store.singleCharacter.eye_color}</p>
                            <p className="card-text">Hair Color: {store.singleCharacter.hair_color}</p>
                            <p className="card-text">Height: {store.singleCharacter.height}</p>
                            <p className="card-text">Mass: {store.singleCharacter.mass}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailedViewCharacter

