import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../Authentication/Login/Login';
import Register from '../Authentication/Register/Register';
import Blogs from '../ProjectComponent/Blogs/Blogs';
import HomePage from '../ProjectComponent/Home/HomePage';
import Main from '../ProjectComponent/Main/Main';
import MyServiceFoods from '../ProjectComponent/MyServiceFoods/MyServiceFoods';
import ServiceDetail from '../ProjectComponent/ServiceDetails/ServiceDetail';
import ServiceFood from '../ProjectComponent/ServiceFood/ServiceFood';
import SignUp from '../ProjectComponent/SignUp/SignUp';
import PrivateRouter from './PrivateRouter/PrivateRouter'



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
path:'/details/:id',
loader:({params})=>fetch(`http://localhost:4000/service/${params.id}`),
element:<ServiceDetail></ServiceDetail>


},
{
    path:'myservice',
    element:<MyServiceFoods></MyServiceFoods>
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