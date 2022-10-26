import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
  const {user} = useContext(AuthContext)
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link>Item 1</Link></li>
        <li tabIndex={0}>
          <Link className="justify-between">
            FAQ 
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </Link>
         
        </li>
        <li><Link>Item 3</Link></li>
      </ul>
    </div>
    <Link to={'/'} className="btn btn-ghost normal-case text-xl">Learning-<span className='font-bold text-red-600'>Mates</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><Link to={'/courses'}>Courses</Link></li>
      <li tabIndex={0}>
        <Link>
         FAQ
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </Link>
       
      </li>
      <li><Link to={'/blog'}>Blog</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to={'/login'} className="btn">Log In</Link>
  </div>
  <div className='m-5'>
    <Link to={'/register'} className="btn">Register</Link>
  </div>
  <div>
    <p>{user?.displayName}</p>
  </div>
</div>
        </div>
    );
};

export default Header;