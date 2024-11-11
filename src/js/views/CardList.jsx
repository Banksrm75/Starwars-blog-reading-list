import React from "react";
import Card from "./Card.jsx";

const CardList = ({array, imageURL}) => {

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
                            />
                        );
                    })
                }
            </div>
         
        </>
    );
}

export default CardList;