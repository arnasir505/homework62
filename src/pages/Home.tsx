import React from 'react';
import { Movie } from '../types';
import Card from '../components/Card/Card';

interface Props {
  nowPlayingMovies: Movie[];
}

const Home: React.FC<Props> = ({ nowPlayingMovies }) => {
  return (
    <div className='container'>
      <div className='d-flex flex-wrap gap-5'>
        {nowPlayingMovies.map((movie) => (
          <Card
            key={movie.id}
            poster={movie.poster_path}
            title={movie.title}
            year={movie.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
