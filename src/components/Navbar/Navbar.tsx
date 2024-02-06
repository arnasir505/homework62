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
            <NavLink className='nav-link link-light' to='/catalog'>
              Catalog
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link link-light' to='/profile'>
              Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
