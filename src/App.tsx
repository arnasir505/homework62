import { useCallback, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { Movie } from './types';
import axios from 'axios';
import { API_KEY, BASE_MOVIES_URL } from './constants';
import Popular from './pages/Popular/Popular';
import TopRated from './pages/Top_Rated/TopRated';

function App() {
  const [category, setCategory] = useState('/now_playing');
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchData = useCallback(() => {
    const options = {
      method: 'GET',
      url: BASE_MOVIES_URL + category,
      params: { language: 'en-US', page: '1' },
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + API_KEY,
      },
    };
    axios
      .request(options)
      .then(function (response) {
        const results = response.data.results;
        setMovies(results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [BASE_MOVIES_URL, category, API_KEY]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const changeCategory = (name: string) => {
    setCategory(name);
  };

  return (
    <>
      <Navbar changeCategory={changeCategory} />
      <Routes>
        <Route path='/' element={<Home nowPlayingMovies={movies} />} />
        <Route path='/popular' element={<Popular popularMovies={movies} />} />
        <Route
          path='/top_rated'
          element={<TopRated topRatedMovies={movies} />}
        />
        <Route
          path='*'
          element={<h1 className='text-center text-white mt-5'>Not Found!</h1>}
        />
      </Routes>
    </>
  );
}

export default App;
