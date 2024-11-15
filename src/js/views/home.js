// Receives information and disseminates to cardList

import React, { useContext, useEffect } from "react";
import "../../styles/home.css";

import CardListCharacter from "./CardList_Character.jsx";
import CardListPlanet from "./CardList_Planet.jsx";
import CardListVehicle from "./CardList_Vehicle.jsx";
import { Context } from "../store/appContext.js"

let baseImageURL = 'https://starwars-visualguide.com/assets/img';
let characterModifier = '/characters'
let planetModifier = '/planets'
let vehicleModifier = '/vehicles'



export const Home = () => {

	const {store, actions} = useContext(Context);

    // useEffect( () => {
    //     actions.displayFavorites(store.favorites)
    // }, [store.favorites])
    
    return(
        <>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                    <div className="my-5">
                        <h1>Characters</h1>
                        <CardListCharacter 
                            array={store.characters}
                            imageURL={baseImageURL + characterModifier}
                            modifier = {characterModifier}
                        />
                    </div>
                    <div className="my-5">
                        <h1>Planets</h1>
                        <CardListPlanet
                            array={store.planets}
                            imageURL={baseImageURL + planetModifier}
                            modifier = {planetModifier}
                        />
                    </div>
                    <div className="my-5">
                        <h1>Vehicles</h1>
                        <CardListVehicle
                            array={store.vehicles}
                            imageURL={baseImageURL + vehicleModifier}
                            modifier = {vehicleModifier}
                        />
                    </div>
                    
                </div>
                <div className="col-1"></div>
		    </div>
		
	    </>
    );
	
};
