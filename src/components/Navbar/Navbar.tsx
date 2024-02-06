import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand bg-dark'>
      <div className='container'>
        <NavLink className='navbar-brand link-light' to='/'>
          Movienatica
        </NavLink>
        <ul className='navbar-nav me-auto'>
          <li className='nav-item'>
            <NavLink className='nav-link link-light' to='/popular'>
              Popular
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link link-light' to='/top_rated'>
              Top Rated
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
