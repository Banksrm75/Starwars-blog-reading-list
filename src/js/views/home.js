import React from "react";
import "../../styles/home.css";

import CardList from "./CardList.jsx";

let characterResults = [
        {
            "uid": "1",
            "name": "Luke Skywalker",
            "url": "https://www.swapi.tech/api/people/1"
        },
        {
            "uid": "2",
            "name": "C-3PO",
            "url": "https://www.swapi.tech/api/people/2"
        },
        {
            "uid": "3",
            "name": "R2-D2",
            "url": "https://www.swapi.tech/api/people/3"
        },
        {
            "uid": "4",
            "name": "Darth Vader",
            "url": "https://www.swapi.tech/api/people/4"
        },
        {
            "uid": "5",
            "name": "Leia Organa",
            "url": "https://www.swapi.tech/api/people/5"
        },
        {
            "uid": "6",
            "name": "Owen Lars",
            "url": "https://www.swapi.tech/api/people/6"
        },
        {
            "uid": "7",
            "name": "Beru Whitesun lars",
            "url": "https://www.swapi.tech/api/people/7"
        },
        {
            "uid": "8",
            "name": "R5-D4",
            "url": "https://www.swapi.tech/api/people/8"
        },
        {
            "uid": "9",
            "name": "Biggs Darklighter",
            "url": "https://www.swapi.tech/api/people/9"
        },
        {
            "uid": "10",
            "name": "Obi-Wan Kenobi",
            "url": "https://www.swapi.tech/api/people/10"
        }
    ]
	let planetResults = [
		{
            "uid": "1",
            "name": "Tatooine",
            "url": "https://www.swapi.tech/api/planets/1"
        },
        {
            "uid": "2",
            "name": "Alderaan",
            "url": "https://www.swapi.tech/api/planets/2"
        },
        {
            "uid": "3",
            "name": "Yavin IV",
            "url": "https://www.swapi.tech/api/planets/3"
        },
        {
            "uid": "4",
            "name": "Hoth",
            "url": "https://www.swapi.tech/api/planets/4"
        },
        {
            "uid": "5",
            "name": "Dagobah",
            "url": "https://www.swapi.tech/api/planets/5"
        },
        {
            "uid": "6",
            "name": "Bespin",
            "url": "https://www.swapi.tech/api/planets/6"
        },
        {
            "uid": "7",
            "name": "Endor",
            "url": "https://www.swapi.tech/api/planets/7"
        },
        {
            "uid": "8",
            "name": "Naboo",
            "url": "https://www.swapi.tech/api/planets/8"
        },
        {
            "uid": "9",
            "name": "Coruscant",
            "url": "https://www.swapi.tech/api/planets/9"
        },
        {
            "uid": "10",
            "name": "Kamino",
            "url": "https://www.swapi.tech/api/planets/10"
        }
	]
	let vehicleResults = [
		{
			"uid": "4",
			"name": "Sand Crawler",
			"url": "https://www.swapi.tech/api/vehicles/4"
		},
		{
			"uid": "7",
			"name": "X-34 landspeeder",
			"url": "https://www.swapi.tech/api/vehicles/7"
		},
		{
			"uid": "6",
			"name": "T-16 skyhopper",
			"url": "https://www.swapi.tech/api/vehicles/6"
		},
		{
			"uid": "8",
			"name": "TIE/LN starfighter",
			"url": "https://www.swapi.tech/api/vehicles/8"
		},
		{
			"uid": "14",
			"name": "Snowspeeder",
			"url": "https://www.swapi.tech/api/vehicles/14"
		},
		{
			"uid": "18",
			"name": "AT-AT",
			"url": "https://www.swapi.tech/api/vehicles/18"
		},
		{
			"uid": "16",
			"name": "TIE bomber",
			"url": "https://www.swapi.tech/api/vehicles/16"
		},
		{
			"uid": "19",
			"name": "AT-ST",
			"url": "https://www.swapi.tech/api/vehicles/19"
		},
		{
			"uid": "20",
			"name": "Storm IV Twin-Pod cloud car",
			"url": "https://www.swapi.tech/api/vehicles/20"
		},
		{
			"uid": "24",
			"name": "Sail barge",
			"url": "https://www.swapi.tech/api/vehicles/24"
		}
	]


let baseURL = 'https://starwars-visualguide.com/assets/img';
let baseImageURL = 'https://starwars-visualguide.com/assets/img';
let characterModifier = '/characters'
let planetModifier = '/planets'
let vehicleModifier = '/vehicles'



export const Home = () => (
	
	<>
		<div className="row">
			<div className="col-1"></div>
			<div className="col-10">
				<div className="my-5">
					<h1>Characters</h1>
					<CardList 
						array={characterResults}
						imageURL={baseURL + characterModifier}
                        characterModifier = {characterModifier}
						imageURL={baseImageURL + characterModifier}
                        modifier = {characterModifier}
					/>
				</div>
				<div className="my-5">
					<h1>Planets</h1>
					<CardList 
						array={planetResults}
						imageURL={baseURL + planetModifier}
                        planetModifier = {planetModifier}
						imageURL={baseImageURL + planetModifier}
                        modifier = {planetModifier}
					/>
				</div>
				<div className="my-5">
					<h1>Vehicles</h1>
					<CardList 
						array={vehicleResults}
						imageURL={baseURL + vehicleModifier}
                        vehicleModifier = {vehicleModifier}
						imageURL={baseImageURL + vehicleModifier}
                        modifier = {vehicleModifier}
					/>
				</div>
			</div>
			<div className="col-1"></div>
		</div>
		
	</>
);
