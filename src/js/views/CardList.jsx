import React, { useContext, useEffect } from "react";

import { Context } from "../store/appContext.js"

import Card from "./Card.jsx";


const CardList = ({array, imageURL, modifier}) => {

    const {store, actions} = useContext(Context);

    

    return (
        <>
            <div className="d-flex gap-3 overflow-auto"> 
                {store.contacts && store.contacts.map( item => {
                    return(
                        <Card 
                            key={item.uid}
                            id={item.uid}
                            name={item.name}
                            imageURL={imageURL}
                            modifier = {modifier}
                        />
                    );
                })}
            </div>
         
        </>
    );
}

export default CardList;