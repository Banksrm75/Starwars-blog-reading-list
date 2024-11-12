import React from "react"

const DetailedView = ({ id, name, imageURL }) => {

    return(
        <>
            <div className="card" style="width: 18rem;">
            <img src={
                name === "Tatooine" 
                ? 
                "https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg" 
                :
                `${imageURL}/${id}.jpg`}className="card-img-top" alt="..." 
                />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           
                </div>
            </div>
        </>
    );
}

export default DetailedView

