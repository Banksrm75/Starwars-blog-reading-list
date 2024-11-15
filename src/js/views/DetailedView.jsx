import React, { useState, useContext } from 'react';

import { Context } from "../store/appContext.js"

const DetailedView = ({ id, name, imageURL }) => {

    const {store, actions} = useContext(Context);

    let exampleData = {
        
        "message": "ok",
        "result": {
            "properties": {
                "height": "172",
                "mass": "77",
                "hair_color": "blond",
                "skin_color": "fair",
                "eye_color": "blue",
                "birth_year": "19BBY",
                "gender": "male",
                "created": "2024-11-12T09:46:11.204Z",
                "edited": "2024-11-12T09:46:11.204Z",
                "name": "Luke Skywalker",
                "homeworld": "https://www.swapi.tech/api/planets/1",
                "url": "https://www.swapi.tech/api/people/1"
            },
            "description": "A person within the Star Wars universe",
            "_id": "5f63a36eee9fd7000499be42",
            "uid": "1",
            "__v": 0
        }
    }




    return(
        <>
            <div className="card" style="width: 18rem;">
                <img src={
                    name === "Tatooine" 
                    ? 
                    "https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg" 
                    :
                    `${imageURL}/${id}.jpg`
                }
                className="card-img-top" alt="..." 
                />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo similique, provident beatae, quis aperiam natus commodi tenetur ipsam dolore expedita, nemo sit! Corporis enim vero cupiditate asperiores incidunt natus quia!</p>
           
                </div>
            </div>
        </>
    );
}

export default DetailedView

