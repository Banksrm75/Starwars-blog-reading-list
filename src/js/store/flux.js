import React, { useContext } from 'react';

let baseURL = "https://www.swapi.tech/api"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: { 		
			characters: [],
			planets: [],
			vehicles: [],
			singleCharacter: [],
			singlePlanet: [],
			singleVehicle: [],

			favorites: [],
			modifier: ""
		},
		actions: {
			
			loadStarWars: () => {
				getActions().getCharacters()
				getActions().getPlanets()
				getActions().getVehicles()
			},

			getCharacters: () => {
				let modifier = '/people'
				fetch(`${baseURL}${modifier}`)
				.then (response => {
					if(!response.ok) {
						throw Error("Error trying to get more info")
					}
					return response.json();
				})
				.then(data => {	
					setStore( {characters: data.results} )
				})
				.catch(error => console.log("Error: ", error))
			},

			getPlanets: () => {
				let modifier = '/planets'
				fetch(`${baseURL}${modifier}`)
				.then (response => {
					if(!response.ok) {
						throw Error("Error trying to get info")
					}
					return response.json();
				})
				.then(data => {				
					setStore( {planets: data.results} )
				})
				.catch(error => console.log("Error: ", error))
			},

			getVehicles: () => {
				let modifier = '/vehicles'
				fetch(`${baseURL}${modifier}`)
				.then (response => {
					if(!response.ok) {
						throw Error("Error trying to get info")
					}
					return response.json();
				})
				.then(data => {				
					setStore( {vehicles: data.results} )
				})
				.catch(error => console.log("Error: ", error))
			},

			addToFavorites: ( faveId, faveName, faveImageURL, modifier ) => {
				
				let currentFavorites = getStore().favorites;
				let inTheList = false;

				for (let i = 0; i < currentFavorites.length; i++) {
					if (currentFavorites[i].name === faveName) {
						inTheList = true;
					}
				}

				if (inTheList === false) {
					
					let fave = {
						key: faveId,
						id: faveId,
						name: faveName,
						imageURL: faveImageURL,
						modifier: modifier
					}
	
					let currentFavorites = getStore().favorites;
					let updatedFavorites = [...currentFavorites, fave]
					setStore( {favorites: updatedFavorites} )	
				}
			},

			displayFavorites: () => {
                let showFavorites = getStore().favorites;
                return showFavorites.map((item, index) => (
                    <li key={index} onClick={() => {getActions().deleteFave(item.id)}}>
                        <a className="dropdown-item" href="#">
                            {item.name}
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                fill="currentColor"
                                className="bi bi-trash3-fill delete-favorite"
                                viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                            </svg>
                        </a>
                    </li>
                ));
            },

			deleteFave: (faveId) => {
                let currentFavorites = getStore().favorites;
                let updatedFavorites = currentFavorites.filter(item => item.id !== faveId);
                setStore({ favorites: updatedFavorites });
            },

			getSingleCharacter: characterID => {
				let modifier = '/people'
				fetch(`${baseURL}${modifier}/${characterID}`)
				.then (response => {
					if(!response.ok) {
						throw Error("Error trying to get more info")
					}
					return response.json();
				})
				.then(data => {	
					setStore( {singleCharacter: data.result.properties} )
				})
				.catch(error => console.log("Error: ", error))
			},

			getSinglePlanet: planetID => {
				let modifier = '/planets'
				fetch(`${baseURL}${modifier}/${planetID}`)
				.then (response => {
					if(!response.ok) {
						throw Error("Error trying to get more info")
					}
					return response.json();
				})
				.then(data => {	
					setStore( {singlePlanet: data.result.properties} )
				})
				.catch(error => console.log("Error: ", error))
			},

			getSingleVehicle: vehicleID => {
				let modifier = '/vehicles'
				fetch(`${baseURL}${modifier}/${vehicleID}`)
				.then (response => {
					if(!response.ok) {
						throw Error("Error trying to get more info")
					}
					return response.json();
				})
				.then(data => {	
					setStore( {singleVehicle: data.result.properties} )
				})
				.catch(error => console.log("Error: ", error))
			}
		}
	};
}


export default getState;
