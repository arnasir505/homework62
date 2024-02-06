import React from 'react';
import './Card.css';

interface Props {
  poster: string;
  title: string;
  year: string;
}

const Card: React.FC<Props> = ({ poster, title, year }) => {
  return (
    <div className='movie'>
      <img src={poster} alt={title} className='poster' />
      <div className='info'>
        <h3 className='title'>{title}</h3>
        <span className='year'>{year}</span>
      </div>
    </div>
  );
};

export default Card;
