import React from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Header = () => {
  const {user,logOut} = useContext(AuthContext)

  const handleLogOut = () =>{
    logOut()
    .then( () =>{})
    .catch (error => console.error(error))
  }
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
  <div className='w-20 '> <img className='rounded-full object-cover'  src="download.png" alt="" /></div>
    <Link to={'/'} className="btn btn-ghost normal-case text-xl">Learning-<span className='font-bold text-red-600'>Mates</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><Link to={'/courses'}>Courses</Link></li>
      <li tabIndex={0}>
        <Link to={'/faq'}>
         FAQ
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </Link>
       
      </li>
      <li><Link to={'/blog'}>Blog</Link></li>
    </ul>
  </div>
  
  <div className="navbar-end">
    <Link to={'/login'} className="btn btn-outline">Log In</Link>
  </div>
  <div className='m-5'>
    <Link to={'/register'} className="btn btn-outline">Register</Link>
  </div>
  {/* <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          {
            user.photoURL?
          
         <Image width="200px" height="200px" src={user.photoURL}></Image>
         :
         <FaUser></FaUser>
          }
        </div>
      </label> */}
  <div>
    <p>{user?.displayName}</p>
  </div>
  
  <button onClick={handleLogOut} className="btn btn-outline">Logout</button>
  <label for="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer text-black-100">
	<span>Light</span>
	<span className="relative">
		<input id="Toggle1" type="checkbox" className="hidden peer" />
		<div className="w-10 h-6 rounded-full shadow-inner bg-gray-400 peer-checked:bg-violet-400"></div>
		<div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800"></div>
	</span>
	<span>Dark</span>
</label>
</div>

        </div>
    );
};

export default Header;