import React from 'react';
import './Card.css';
import { BASE_POSTER_URL } from '../../constants';

interface Props {
  poster: string;
  title: string;
  year: string;
}

const Card: React.FC<Props> = ({ poster, title, year }) => {
  return (
    <div className='movie'>
      <img src={BASE_POSTER_URL + poster} alt={title} className='poster' />
      <div className='info'>
        <h4 className='title'>{title}</h4>
        <span className='year'>{year}</span>
      </div>
    </div>
  );
};

export default Card;
