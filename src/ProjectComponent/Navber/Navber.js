import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navber = () => {
  const {user,LogOutUser} = useContext(AuthContext)

  const LogOut =()=> {
    LogOutUser()
    .then(()=>{
      toast.success('LouOut Success full')
    })
    .then(error=>{
      toast.error(error.message)
    })


  }
    return (
        <div className="navbar bg-base-100">
        {/* <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box ">
              <li><a>Homepage</a></li>
           
            </ul>
          </div>
        </div> */}
        <h3 className='nav-start text-3xl text-red-300'>Mothers Delivery Foods</h3>
        <div className="navbar">
         
           <Link to='/'  className="btn btn-ghost normal-case text-xl">HomePage</Link>
        </div>
        <div className="navbar list-none  ">
          {user?.email? <> <li className='mr-2  text-rose-400 hover:bg-emerald-500 bg-black rounded px-2 py-1' ><Link to='/myriviews'>My Reviews</Link></li>
            <li className='mr-2  text-rose-400 hover:bg-emerald-500 bg-black rounded px-2 py-1' ><Link to='/myservice'>Add Service</Link></li>
            <li className='mr-2  text-rose-400 hover:bg-emerald-500 bg-black rounded px-2 py-1' ><Link onClick={LogOut }>LogOut</Link></li></>:<> <li className='mr-2 px-2 py-1  text-rose-400 hover:bg-emerald-500 bg-black rounded' ><Link to='/login'>Login</Link></li>
            <li className='mr-2  px-2 py-1 text-rose-400 hover:bg-emerald-500 bg-black rounded'><Link to='/signup'>Sign Up</Link></li></>}
        
           
           
            <li className='mr-2 px-2 py-1 text-rose-400 hover:bg-emerald-500 bg-black rounded'><Link to='blog'>Blogs</Link></li>
            
       
        </div>
      </div>
    );
};

export default Navber;