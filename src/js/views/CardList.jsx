import React from "react";
import Card from "./Card.jsx";

const CardList = ({array, imageURL}) => {
const CardList = ({array, imageURL, modifier}) => {

    console.log(array);

    return (
        <>
            <div className="d-flex gap-3 overflow-auto"> 
                {
                    array.map( item => {
                        return(
                            <Card 
                                key={item.uid}
                                id={item.uid}
                                name={item.name}
                                imageURL={imageURL}
                                modifier = {modifier}
                            />
                        );
                    })
                }
            </div>
         
        </>
    );
}

export default CardList;