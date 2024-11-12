const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			
			characters: [

			],
			planets: [

			],
			vehicles: [

			],
			favorites: [
				
			],
			modifier: ""
		},
		actions: {
			// // Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			// loadSomeData: () => {
			// 	/**
			// 		fetch().then().then(data => setStore({ "foo": data.bar }))
			// 	*/
			// },
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			getCharacters: () => {
				let modifier = '/people'
				fetch(`https://www.swapi.tech/api${modifier}`)
				.then (response => {
					if(!response.ok) {
						throw Error("Error trying to get info")
					}
					return response.json();
				})
				.then(data => {					
					setStore( {characters: data.characters} )

					
				})
				.catch(error => console.log("Error: ", error))

				let fetchedArray = getStore().characters;
    			console.log(fetchedArray)
			},

			getVehicles: () => {
				let modifier = '/vehicles'
				fetch(`https://www.swapi.tech/api${modifier}`)
				.then (response => {
					if(!response.ok) {
						throw Error("Error trying to get info")
					}
					return response.json();
				})
				.then(data => {					
					setStore( {vehicles: data.vehicles} )
				})
				.catch(error => console.log("Error: ", error))

				let fetchedArray = getStore().vehicles;
    			console.log(fetchedArray)
			},

			getPlanets: () => {
				let modifier = '/planets'
				fetch(`https://www.swapi.tech/api${modifier}`)
				.then (response => {
					if(!response.ok) {
						throw Error("Error trying to get info")
					}
					return response.json();
				})
				.then(data => {					
					setStore( {planets: data.planets} )
				})
				.catch(error => console.log("Error: ", error))

				let fetchedArray = getStore().planets;
    			console.log(fetchedArray)
			},

			addToFavorites: ( faveId, faveName, faveImageURL, modifier ) => {

				let fave = {
					key: faveId,
					id: faveId,
					name: faveId,
					imageURL: faveImageURL,
					modifier: modifier
				}

				console.log("Adding to favorites")
				setStore( {favorites: fave} )

				let showFavorites = getStore().favorites;
				console.log(showFavorites);		
			},

			getMoreInfo: ( id, name, imageURL, modifier ) => {
				fetch(`https://www.swapi.tech/api/${modifier}/${id}`)
				.then (response => {
					if(!response.ok) {
						throw Error("Error trying to get info")
					}
					return response.json();
				})
				.then(data => {					
					console.log(data);
				})
				.catch(error => console.log("Error: ", error))

			}
		}
	}
};


export default getState;
