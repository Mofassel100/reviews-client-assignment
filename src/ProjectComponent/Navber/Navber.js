import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Navber = () => {
  const { user, LogOutUser } = useContext(AuthContext)
  const LogOut = () => {
    LogOutUser()
      .then(() => {
        toast.success('LouOut Success full')
      })
      .then(error => {
        toast.error(error.message)
      })
  }

  const allRoutes = <React.Fragment>
    <li className='px-2 mx-2 hover:text-lime-400'><Link to='/'>Home</Link></li>

    {user?.uid ?
      <>
        <li className='mr-2   hover:bg-emerald-500 rounded px-2 py-1' ><Link to='/myriviews'>My Reviews</Link></li>
        <li className='mr-2 hover:bg-emerald-500  rounded px-2 py-1' ><Link to='/myservice'>Add Service</Link></li>
        <li className='px-2 mx-2 hover:text-lime-400'><Link onClick={LogOut}>LogOut</Link></li>
        <li className='px-2 mx-2 hover:text-lime-400'><Link >{user?.displayName}</Link></li>
      </>
      :
      <>
        <li className='px-2 mx-2 hover:text-lime-400'><Link to='/login'>Login</Link></li>
        <li className='px-2 mx-2 hover:text-lime-400'><Link to='/signup'>Sign Up</Link></li>

      </>}
    <li className='px-2 mx-2 hover:bg-emerald-500 '><Link to='blog'>Blogs</Link></li>

  </React.Fragment>
  return (

    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {allRoutes}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl"><span className='mr-3'>Mothers</span>FD</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {allRoutes}

        </ul>
      </div>
    </div>
  );
};

export default Navber;