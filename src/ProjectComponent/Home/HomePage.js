import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './home.css'

const HomePage = () => {
    const dataUser = useLoaderData()
    console.log(dataUser);
    return (
        <div data-theme="cupcake" className='home-container my-4 '>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto justify-center'>
                {
                    dataUser.map(data =>

                        <>
                            <div className="card  grid justify-center w-96  image-full">
                                <figure><img src={data.image} alt="" className='bg-red-600' /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-teal-400">{data?.name}</h2>
                                    <p>{data?.description.slice(0, 100) + '...'}</p>
                                    <br />
                                    <br />
                                    <p className='text-pink-200'>Price$ {data?.price}</p>
                                    <div className="card-actions justify-end">
                                        <Link to='service' className="btn btn-primary">See All </Link>
                                    </div>

                                </div>
                            </div>

                        </>)
                }

            </div>

        </div>
    );
};

export default HomePage;