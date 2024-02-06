import React from 'react';
import './Card.css';
import { BASE_POSTER_URL } from '../../constants';

interface Props {
  poster: string;
  title: string;
  year: string;
  overview: string;
  vote_average: number;
}

const Card: React.FC<Props> = ({ poster, title, year, overview }) => {
  return (
    <div className='movie'>
      <img src={BASE_POSTER_URL + poster} alt={title} className='poster' />
      <div className='info'>
        <h4 className='title'>{title}</h4>
        <span className='year'>{year}</span>
      </div>
      <div className='overview'>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Card;
