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

const Card: React.FC<Props> = ({
  poster,
  title,
  year,
  overview,
  vote_average,
}) => {
  let color = '';
  if (vote_average >= 8) {
    color = 'green';
  } else if (vote_average >= 5) {
    color = 'orange';
  } else {
    color = 'red';
  }

  const rounded_score = Math.round(vote_average * 100) / 100;
  return (
    <div className='movie'>
      <span className={`rating ${color}`}>{rounded_score}</span>
      <img src={BASE_POSTER_URL + poster} alt={title} className='poster' />
      <div className='info'>
        <h4 className='title'>{title}</h4>
        <span className='year'>{year}</span>
      </div>
      <div className='overview'>{overview}</div>
    </div>
  );
};

export default Card;
