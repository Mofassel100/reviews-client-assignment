import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceFood = () => {

    const serviceAllData = useLoaderData()

    return (
        <div className='home-container my-3'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto justify-center'>
                {
                    serviceAllData.map(data=>
                    
                        <>
                        <div className="card  grid justify-center w-96  image-full">
  <figure>
  <PhotoProvider>
      <PhotoView src={data.image}>
        <img  src={data.img} alt="" />
      </PhotoView>
    </PhotoProvider></figure>
  <div className="card-body">
    <h2 className="card-title text-teal-400">{data?.name}</h2>
    <p>{data?.description.slice(0,100)+'...'}</p>
    <br/>
    <br/>
    <p className='text-pink-200'>Price$ {data?.price}</p>
    <div className="card-actions justify-end">
     <Link to={`/details/${data._id}`} className="btn btn-primary">View Details </Link>
    </div>
   
  </div>
</div>

                    </>)
                }

            </div>
            
        </div>
    );
};

export default ServiceFood;