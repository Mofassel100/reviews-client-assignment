import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../Authentication/Login/Login';
import Register from '../Authentication/Register/Register';
import Blogs from '../ProjectComponent/Blogs/Blogs';
import HomePage from '../ProjectComponent/Home/HomePage';
import Main from '../ProjectComponent/Main/Main';
import MyReviews from '../ProjectComponent/MyReviews/MyReviews';
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
    loader:()=>fetch('https://service-releted-server-sede-assignments.vercel.app/home'),
    element:<HomePage></HomePage>
},
{path:'service',
loader:()=>fetch('https://service-releted-server-sede-assignments.vercel.app/service'),
element:<ServiceFood></ServiceFood>
},
{
path:'/details/:id',
loader:({params})=>fetch(`https://service-releted-server-sede-assignments.vercel.app/service/${params.id}`),
element:<ServiceDetail></ServiceDetail>


},
{
    path:'myservice',
    element:<MyServiceFoods></MyServiceFoods>
},
{
    path:'/myriviews',
    
    element:<PrivateRouter><MyReviews></MyReviews></PrivateRouter>
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