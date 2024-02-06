import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { Movie } from './types';
import axios from 'axios';
import { API_KEY, BASE_MOVIES_URL } from './constants';
import Popular from './pages/Popular/Popular';
import TopRated from './pages/Top_Rated/TopRated';

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
        <Route path='/popular' element={<Popular />} />
        <Route path='/top_rated' element={<TopRated />} />
      </Routes>
    </>
  );
}

export default App;
