import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import UseTitle from '../../RoutHooks/RoutHooks';

const ServiceDetail = () => {
    UseTitle('Service Details')
    const detailsData = useLoaderData()
   
    const {image,img,name,price,rating,title,_id,description,service}=detailsData;
    const { user}= useContext(AuthContext)
    



    const reviewSumited = (event)=>{
        event.preventDefault()
        const form= event.target;
        const name= form.name.value;
        const image =form.image.value;
        const review = form.review.value;
       
        const reviews= {

            name:name,
            service:_id,
            rating:rating,
            review:review,
            image:image,
            email:user.email
            


        }
        fetch("http://localhost:4000/reviews",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(reviews)
        })
        .then(

          res=>res.json()
          
        )
        .then(data=>{

            toast.success('riview data successfull ')
        })

        console.log(reviews);



    }
    return (
        <div>
            <div className='details-con my-7'>
             

<div className="card lg:w-100  fluid bg-base-100 shadow-xl image-full">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <h2 className="card-title">Price:$ {price}</h2>
    <div className="card-actions justify-end">
   
      <button className="btn btn-primary">Buy Now</button>
    </div>
    <p> {service}</p>
  </div>
</div>
         
                
    </div>





            {/* review page */}
            <div className='details-con my-5 rounded'>
                <form onSubmit={reviewSumited}  className='bg-fuchsia-300 p-5 rounded'>
                <div className=' home-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
                    <div className="form-control my-4 ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Enter Name" className="input input-bordered w-52" />
                    </div>
                    <div className="form-control my-4 ">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="url" name='image'  placeholder="Enter Name" className="input input-bordered w-52" />
                    </div>
                </div>
                <div className="form-control my-4 ">
                    <label className="label">
                        <span className="label-text">Reviews</span>
                    </label>
                    <textarea className="textarea" name='review' placeholder="Please Enter review"></textarea>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary"> Add Revies</button>
                </div>

                </form>
            
            </div>
        </div>

    );
};

export default ServiceDetail;