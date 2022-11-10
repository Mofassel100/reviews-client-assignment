import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import UseTitle from '../../RoutHooks/RoutHooks';

const MyServiceFoods = () => {
    UseTitle('Add Title')


    const MyServiceSubmited = (event) => {

        event.preventDefault()
        const form = event.target;
        const image = form.image.value;
        const img = form.img.value;
        const name = form.name.value;
        const price = form.price.value;
        const description = form.description.value;
       
        const title = form.title.value;
        const rating = form.rating.value;
        console.log(image,name,price,title,rating,img);
        const profile = {
            image: image,
            img: img,
            name: name,
            price: price,
            description:description,
            title: title,
            rating: rating

        }
        console.log(profile);
       
        fetch('https://service-releted-server-sede-assignments.vercel.app/myservice', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(profile)
        })
        .then(res=>res.json())
        .then(data=>{
          

            toast.success('My SERVIce Sumit suceefull')
            form.reset()

        })



    }
    return (
        <div>
            <div className="hero min-h-screen bg-slate-600">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-white font-bold my-6">My Service Page</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={MyServiceSubmited} className="card-body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                            <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter Name" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" name='title' required placeholder="Enter Title" className="input input-bordered" />
                                <label className="label">

                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="url" required name='image' placeholder="Enter image url" className="input input-bordered" />
                            </div>
                            </div>
                            <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Img</span>
                                </label>
                                <input type="url" required name='img' placeholder="Enter img url" className="input input-bordered" />
                            </div>
                           
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" name='price' required placeholder="Enter your Price" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="number" name='rating' required placeholder="Enter your Rating" className="input input-bordered" />
                            </div>
                           
                            </div>             
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">DisCripToin</span>
                                </label>
                                <textarea name='description' className="textarea" placeholder="Enter Your Foods Details "></textarea>
                                <div className="form-control mt-6">
                                <button className="btn btn-primary">Food Service Submit</button>
                            </div>
                            </div>
                            
                            
                            <br />
                            <p> <Link className='text-fuchsia-500' to='/service'>Check Service Page </Link></p>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyServiceFoods;