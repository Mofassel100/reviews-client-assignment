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
        <li className='mr-2  text-rose-400 hover:bg-emerald-500 bg-black rounded px-2 py-1' ><Link to='/myriviews'>My Reviews</Link></li>
        <li className='mr-2  text-rose-400 hover:bg-emerald-500 bg-black rounded px-2 py-1' ><Link to='/myservice'>Add Service</Link></li>
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
            {/* <li><a>Item 1</a></li>
        <li tabIndex={0}>
          <a className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li> */}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl"><span className='mr-3'>Mothers</span>FD</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {allRoutes}
          {/* <li><a>Item 1</a></li>
      <li tabIndex={0}>
        <a>
          Parent
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
      <li><a>Item 3</a></li> */}
        </ul>
      </div>

    </div>



    //   <div className="navbar bg-base-100">
    //   {/* <div className="navbar-start">
    //     <div className="dropdown">
    //       <label tabIndex={0} className="btn btn-ghost btn-circle">
    //         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
    //       </label>
    //       <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box ">
    //         <li><a>Homepage</a></li>

    //       </ul>
    //     </div>
    //   </div> */}
    //   <h3 className='nav-start text-3xl text-red-300'>Mothers Delivery Foods</h3>
    //   <div className="navbar"> 
    //      <Link to='/'  className="btn btn-ghost normal-case text-xl">HomePage</Link>
    //   </div>
    //   <div className="navbar list-none  ">
    //    
    //   </div>
    // </div>
  );
};

export default Navber;