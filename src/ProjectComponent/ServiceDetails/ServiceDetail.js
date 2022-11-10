import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import UseTitle from '../../RoutHooks/RoutHooks';

const ServiceDetail = () => {
    UseTitle('Service Details')
    const detailsData  =useLoaderData()
   
   
    const {image,img,name,price,rating,title,_id,description,service}=detailsData;
    const { user,setLoader,loader}= useContext(AuthContext)
    
    

    const [allReview,setAllReview]=useState([])

   

       
    useEffect(()=>{

        fetch('http://localhost:4000/reviews')
        .then(res=>res.json())
        .then(data=> {
            
            if(data.legth===0){

                return <p>loaders</p>
            }
            if(data){
               
                const filterData = data.filter(revi =>revi.service === _id)
                
    
              
                setAllReview(filterData)

            }

           
            })
    },[])
   
  console.log(allReview);
    
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
        fetch("https://service-releted-server-sede-assignments.vercel.app/reviews",{
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
            setAllReview(data
                )

            toast.success('riview data successfull ')
            form.reset()
        })

        



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





           
            <div className='details-con my-5 rounded'>
                
            

                <br/>
                <p></p>
                <div  className='bg-fuchsia-300 p-5 rounded'>
                {allReview.map(revi=><><div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={revi?.image}alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{revi?.name}</h2>
    <p>Review:<span className='text-lime-500'>{revi?.review}</span></p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>

</>
                )}
                    
                <form onSubmit={reviewSumited} >
                    
                    <div className=' home-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
                        <div className="form-control my-4 ">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"  name='name' defaultValue={name} placeholder="Enter Name" className="input input-bordered w-52" />
                        </div>
                        <div className="form-control my-4 ">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="url" name='image'  placeholder="Enter Name" defaultValue={img} className="input input-bordered w-52" />
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
        </div>

    );
};

export default ServiceDetail;