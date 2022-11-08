import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../Authentication/Login/Login';
import Register from '../Authentication/Register/Register';
import Blogs from '../ProjectComponent/Blogs/Blogs';
import HomePage from '../ProjectComponent/Home/HomePage';
import Main from '../ProjectComponent/Main/Main';
import ServiceFood from '../ProjectComponent/ServiceFood/ServiceFood';
import SignUp from '../ProjectComponent/SignUp/SignUp';



 export const router = createBrowserRouter([

    {path:'/',
element:<Main></Main>,
children:[
{
    path:'/',
    loader:()=>fetch('http://localhost:4000/home'),
    element:<HomePage></HomePage>
},
{path:'service',
loader:()=>fetch('http://localhost:4000/service'),
element:<ServiceFood></ServiceFood>
},
{
    path:'blog',
    element:<Blogs></Blogs>
},
{
    path:'login',
    element:<Login></Login>
},
{
    path:'register',
    element:<Register></Register>
},
{path:'signup',
element:<SignUp></SignUp>}
]}
])

const Router = () => {
   
    return (
        <div>
            
        </div>
    );
};

export default Router;