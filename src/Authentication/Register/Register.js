import { fromJSON } from 'postcss';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {

    const {NewRegisterUser,ProfilesUpdateUser}= useContext(AuthContext)
    const handleRegisterSubmit =(event)=>{

        event.preventDefault()
        const form = event.target;
        const displayName = form.displayName.valu;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password =  form.password.value;
        console.log(email,password);
        const profile = {
          name:displayName,
          photoURL:photoURL
        }
        NewRegisterUser(email,password)
        .then(()=>{
          ProfilesUpdateUser(profile)
          .then(()=>{
            toast.success('Profile Update sussfull')
            form.reset()
          })
          .catch(error=>{toast.error(error.message)})
            toast.success('Register success Full')

            
        })
        .catch(error=>{
            toast.error(error.message)
        })
    }
    return (
        <div className="hero min-h-screen bg-slate-600">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-white font-bold">Register</h1>
          
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegisterSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                  
                </label>
                <input type="text" required name='displayName'  placeholder=" Please Enter your name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='photoURL'   placeholder=" Please Enter PhotoURl" required className="input input-bordered" />
              </div>
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
                <button className="btn btn-primary">Register</button>
              </div>
              <br/>
              <p>Alredy register ? Please <Link className='text-fuchsia-500' to='/login'>Login</Link></p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;