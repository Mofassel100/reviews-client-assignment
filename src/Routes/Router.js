import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../Authentication/Login/Login';
import Register from '../Authentication/Register/Register';
import Blogs from '../ProjectComponent/Blogs/Blogs';
import HomePage from '../ProjectComponent/Home/HomePage';
import Main from '../ProjectComponent/Main/Main';



 export const router = createBrowserRouter([

    {path:'/',
element:<Main></Main>,
children:[
{
    path:'/',
    element:<HomePage></HomePage>
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
}
]}
])

const Router = () => {
   
    return (
        <div>
            
        </div>
    );
};

export default Router;