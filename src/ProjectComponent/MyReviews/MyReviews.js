import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Reviews from './Reviews';

const MyReviews = () => {
    const {user}= useContext(AuthContext)



    const  handleDelete = (id)=>{

        const confirm= window.confirm("Are You sure Delete Items")
if(confirm){

    fetch(`http://localhost:4000/reviews/636bc43d6bf43a4c7de9272d`)
}

    }


    const [myrevies,setReviesData]= useState([])
    useEffect(()=>{
fetch(`http://localhost:4000/myreviews?email=${user?.email}`)
.then(res=>res.json())
.then(data=>{
    setReviesData(data)
    toast.success('my Review data loaded success full')

    console.log(data);
})

    },[user?.email])
    console.log(myrevies);
    return (
        <div>
            {myrevies.length}

            {/* <p>{myrevies.map(reviews=>{
                <p>{reviews.name}</p>
            })}</p> */}
            <div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
  <thead className=''>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
          </th>
        {/* <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th> */}
      </tr>
    </thead>
   
    <tbody>
    
        {myrevies.map(revies=><Reviews key={revies._id}
        revies={revies}
        ></Reviews>)}
    
    </tbody>   
  </table>
</div>
            </div>
        </div>
    );
};

export default MyReviews;