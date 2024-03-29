import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import {FcGoogle} from "react-icons/fc";
const Login = () => {
  const { loginUser,googleLogIn } = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"
  const handleLoginSubmit = (event) => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then(() => {
        navigate(from, { replace: true });
        toast.success("Login Success Fill Submited")
        form.reset()
      })
      .catch(error => {
        toast.error(error.message)
      })
  }
  return (
    <div className="hero min-h-screen bg-slate-600">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl text-white font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLoginSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' required placeholder=" Please Enter your Email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' required placeholder="Please Enter password" className="input input-bordered" />
              <label className="label">
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div><button className='hover:bg-green-700 px-20 py-3  rounded text-white text-5xl my-5' onClick={googleLogIn}><  FcGoogle/></button></div>
            <br />
            <p>Are you New User? Please <Link className='text-fuchsia-500' to='/register'>Register</Link></p>
          </form>
        </div>
      </div>
    </div>

  );
};

export default Login;