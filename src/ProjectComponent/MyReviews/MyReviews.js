import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Reviews from './Reviews';

const MyReviews = () => {
    const {user}= useContext(AuthContext)
    const [myrevies,setReviesData]= useState([])
   



    const  handleDelete = (id)=>{

        const confirm= window.confirm("Are You sure Delete Items")
if(confirm){

    fetch(`https://service-releted-server-sede-assignments.vercel.app/reviews/${id}`,
    {
        method:"DELETE",
      
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.deletedCount >0){
            toast.success("delete Sucess Full")
            const remaing = myrevies.filter(revi=>revi._id !== id)
            setReviesData(remaing)

        }
       
    })
}

    }


   
    useEffect(()=>{
fetch(`https://service-releted-server-sede-assignments.vercel.app/myreviews?email=${user?.email}`)
.then(res=>res.json())
.then(data=>{
   
    toast.success('my Review data loaded success full')
   
    setReviesData(data)

    
})

    },[user?.email])
   
    return (
        <div>
            {myrevies.length}

          
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
    
        {myrevies.map(revies=><Reviews handleDelete={handleDelete} key={revies._id}
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