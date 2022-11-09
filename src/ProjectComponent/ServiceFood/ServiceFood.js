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
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto justify-center'>
        {
          serviceAllData.map(data =>

            <>
              <div className="card w-80 bg-base-100 shadow-xl">
                <PhotoProvider>
                  <PhotoView src={data.img}>
                    <img src={data.img} alt="" />
                  </PhotoView>
                </PhotoProvider>

                <div className="card-body">
                  <h2 className="card-title">{data?.name}</h2>
                  <p>{data?.description?.slice(0, 100) + '...'}</p>
                  <br />
                  <br />
                  <p>Price$ {data?.price}</p>
                  <div className="card-actions justify-end">
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