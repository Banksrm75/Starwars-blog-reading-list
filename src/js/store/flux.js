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
				
			]
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
				fetch('https://www.swapi.tech/api/people')
				modifier = '/characters'
				fetch(`https://www.swapi.tech/api/${modifier}`)
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
			},
			getVehicles: () => {
				fetch('https://www.swapi.tech/api/vehicles')
				modifier = '/vehicles'
				fetch(`https://www.swapi.tech/api/${modifier}`)
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
			},
			getPlanets: () => {
				fetch('https://www.swapi.tech/api/planets')
				modifier = '/planets'
				fetch(`https://www.swapi.tech/api/${modifier}`)
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
			}
		}
	}
};


export default getState;
