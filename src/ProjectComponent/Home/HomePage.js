import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import UseTitle from '../../RoutHooks/RoutHooks';
import './home.css'

const HomePage = () => {
    const dataUser = useLoaderData()
    UseTitle('Home')
  
    return (
        <div data-theme="cupcake" className='home-container my-4 '>
            <div>
                <div className="carousel w-full my-5 mx-4 rounded">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&w=300" className="fluid w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://images.pexels.com/photos/327158/pexels-photo-327158.jpeg?auto=compress&cs=tinysrgb&w=300" className="fluid w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://images.pexels.com/photos/1484678/pexels-photo-1484678.jpeg?auto=compress&cs=tinysrgb&w=300" className="fluid w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=300" className="fluid w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>

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
            <div className='mx-3 my-5'>
                <div className="card  bg-rose-300 text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">Describing food is not as easy as it would seem. How many ways can you say something was really tasty? Not enough to keep you interested in what you are writing. That is why we have to borrow words from other areas to describe the food and the effect it has on us.</h2>


                    </div>
                </div>


            </div>
            <div>

                <div className="card card-side bg-base-100  shadow-xl">
                    <div className='gird grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-4'>
                        <div>
                            <figure><img className='w-full' src="https://images.pexels.com/photos/8130689/pexels-photo-8130689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="#" /></figure>
                        </div>




                        <div className="card-body ">
                            <h2 className="card-title">Great and original foods</h2>
                            <p>You can compare a dish to a picture, a sports game, a musical performance or give it personality. Describe its sunny or somber mood, shyness, assertiveness, or contradiction of flavors. Knowing the words for describing tastes and flavors will help you to find the right adjective in other areas.</p>

                        </div>

                    </div>

                </div>


            </div>

        </div>
    );
};

export default HomePage;