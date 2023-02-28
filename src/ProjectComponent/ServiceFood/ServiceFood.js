import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import UseTitle from '../../RoutHooks/RoutHooks';

const ServiceFood = () => {

  const serviceAllData = useLoaderData()
  UseTitle('Service Foods')

  return (
    <div className='home-container my-3'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto justify-center'>
        {
          serviceAllData.map(data =>

            <>
              <div className="card w-80 bg-base-100 shadow-xl">
                <PhotoProvider>
                  <PhotoView src={data.img}>
                    <img className='h-80' src={data.img} alt="" />
                  </PhotoView>
                </PhotoProvider>

                <div className="card-body 72">
                  <h2 className="card-title">{data?.name}</h2>
                  <p>{data?.description?.slice(0, 100) + '...'}</p>
                  
                  <p className='text-green-500'>Price$ {data?.price}</p>
                  <div className="card-actions justify-center
                   py-2">
                    <button className="btn btn-primary"><Link to={`/details/${data._id}`} className="btn btn-primary">View Details </Link></button>
                  </div>
                </div>
              </div>
            </>





          )
        }

      </div>

    </div>
  );
};

export default ServiceFood;