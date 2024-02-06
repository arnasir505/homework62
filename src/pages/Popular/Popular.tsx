import React from 'react';
import { Movie } from '../../types';
import Card from '../../components/Card/Card';

interface Props {
  popularMovies: Movie[];
}

const Popular: React.FC<Props> = ({ popularMovies }) => {
  return (
    <div className='container'>
      <h2 className='text-white mt-4'>Popular movies</h2>
      <div className='d-flex flex-wrap gap-5 py-5'>
        {popularMovies.map((movie) => (
          <Card
            key={movie.id}
            poster={movie.poster_path}
            title={movie.title}
            year={movie.release_date}
            overview={movie.overview}
            vote_average={movie.vote_average}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
