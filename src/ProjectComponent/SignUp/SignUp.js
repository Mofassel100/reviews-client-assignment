import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import UseTitle from '../../RoutHooks/RoutHooks';

const SignUp = () => {
    const {googleLogIn}= useContext(AuthContext)
    UseTitle('Sign Up')
    const handelGoogleLOgnin = ()=>{

        googleLogIn()
        .then(result=>{
            console.log(result);

            toast.success('Google Log In Success Full')
        })
        .catch(error =>{
            toast.error(error.message)
        })
    }
    return (
        <div className=''>
           <div className='my-10 text-center'>
                <Link ><button className='hover:bg-green-700 px-20 py-3 bg-blue-700 rounded text-white my-5' onClick={handelGoogleLOgnin}>Google Sign In</button></Link>

            </div>
            <h1 className='mx-auto text-center text-6xl my-5'> ------- OR ------</h1>
            <div className='my-10 text-center'>
                <Link to='/register'><button className='hover:bg-green-700 px-20 py-3 bg-blue-700 rounded text-white my-5'>Register</button></Link>

            </div>
            
        </div>
    );
};

export default SignUp;