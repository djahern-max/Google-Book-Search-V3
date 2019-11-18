import React from 'react';
import App from './App';

const BookCard = (props) => {
    return (

        <div className="card-container">

            <img src={props.image} alt="" />
            <div className="desc">
                <h2>{props.title}</h2>
                <p>Author: {props.author}</p>
                <p>Published: {props.published === '0000' ? 'Not Available' : props.published.substring(0, 4)}</p>
            </div>
        </div>


    )
}

export default BookCard;