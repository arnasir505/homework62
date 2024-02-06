import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import { Movie } from './types';
import axios from 'axios';
import { API_KEY, BASE_MOVIES_URL } from './constants';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const options = {
    method: 'GET',
    url: BASE_MOVIES_URL + '/now_playing',
    params: { language: 'en-US', page: '1' },
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + API_KEY,
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        const results = response.data.results;
        setMovies(results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home nowPlayingMovies={movies} />} />
      </Routes>
    </>
  );
}

export default App;
