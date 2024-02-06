import { NavLink } from 'react-router-dom';
import React from 'react';

interface Props {
  changeCategory: (name: string) => void;
}

const Navbar: React.FC<Props> = ({ changeCategory }) => {
  return (
    <nav className='navbar navbar-expand bg-dark'>
      <div className='container'>
        <NavLink
          className='navbar-brand link-light'
          to='/'
          onClick={() => changeCategory('/now_playing')}
        >
          Movienatica
        </NavLink>
        <ul className='navbar-nav me-auto'>
          <li className='nav-item'>
            <NavLink
              className='nav-link link-light'
              to='/popular'
              onClick={() => changeCategory('/popular')}
            >
              Popular
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              className='nav-link link-light'
              to='/top_rated'
              onClick={() => changeCategory('/top_rated')}
            >
              Top Rated
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
