import React from 'react';
import { Link } from 'react-router-dom';

import App from './App';

const BookCard = props => {
  return (
    <div className='card-container'>
      <img src={props.image} alt='' />
      <div className='desc'>
        <button className='save-button'>Save Book</button>

        {/* <Link to='/SavedBooks' className='btn btn-light my-1'>
          Game One
        </Link> */}

        <br />
        <h2>{props.title}</h2>
        <h2>AUTHOR: {props.author}</h2>
        <h2>
          PUBLISHED:{' '}
          {props.published === '0000'
            ? 'Not Available'
            : props.published.substring(0, 4)}
        </h2>
        <h2>LINK: {props.link}</h2>
        <h2>DESCRIPTION: {props.description}</h2>
      </div>
    </div>
  );
};

export default BookCard;
