import React from "react";

const style = {
    width: "18rem"
}
const Card = ({ id, name, imageURL }) => {

    return (
    <>
        <div className="card" style={style}>
            <img src={
                name === "Tatooine" 
                ? 
                "https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg" 
                :
                `${imageURL}/${id}.jpg`}className="card-img-top" alt="..." 
                />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Learn More</a>
            </div>
        </div>
    </>
    );
}

export default Card;