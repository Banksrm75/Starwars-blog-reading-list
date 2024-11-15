import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import { Context } from '../store/appContext';
const style = {
    width: "20rem",
}

const CharacterCard = ({ id, name, imageURL, modifier }) => {
    const {store, actions} = useContext(Context);

    return (
        <>
            <div className="card me-3 p-0" style={style}>
                <img
                    src={`${imageURL}/${id}.jpg`} 
                    className="card-img-top border" alt="..." 
                />
                <div className="card-body">
                <h5 className="card-title">{name}</h5> 
                
                <Link to={`/detailedView_Character/${id}`}  > 
                    <button className="btn btn-primary">
                        Learn More
                    </button>
                </Link>
                    
                <button className="add-to-favorites-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                            width="16" 
                            height="16" 
                            fill="currentColor" 
                            className="bi bi-heart" 
                            viewBox="0 0 16 16"
                            onClick={ () => actions.addToFavorites(id, name, imageURL, modifier) }
                        >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                    </svg>
                </button>
            </div>
            </div>
        </>
    );
}

export default CharacterCard;