import React from 'react';
import toast from 'react-hot-toast';
import { IconName } from "react-icons/fa";
import { json, Link } from 'react-router-dom';

const Reviews = ({ revies, handleDelete }) => {



  const { email, image, name, rating, review, _id } = revies;


  // const updata = (event) => {
  //   event.preventDefault()
  //   const form = event.target;
  //   const name = form.name.value;
  //   handleUpdate(name)


  // }
  const handleUpdate = () => {




    fetch(`https://service-releted-server-sede-assignments.vercel.app//reviews/${_id}`, {

      method: 'PATCH',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(revies)
    })
      .then(res => res.json())
      .then(data => {
        toast.success("edit SuccessFull")



      })
  }


  return (
    <div>




      <div>

        <tr>



          {/* <th> <form onSubmit={handleUpdate}>
            <div>
              <input type="text" placeholder="Edit Reviw" className="input input-bordered input-error w-full max-w-xs" />
            </div>



          </form></th> */}

        </tr>

      </div>

      <tr>
        <th>


        </th>
        <th className=''>
          <td>
            <label>
              <th><label>
                <button onClick={() => handleDelete(_id)} className="btn btn-primary text-red-500">Delete</button>
              </label></th>


            </label>
          </td>


        </th>
        <td className='ml-6'>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{review}</div>
              <div className="text-sm opacity-50">Delivery foods</div>
              <div>Revies </div>
            </div>
          </div>
        </td>
        <td className='ml-6'>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
               {name}
              </div>
            </div>
            <div>
              <div className="font-bold">{email}</div>
              <div className="text-sm opacity-50">Delivery foods</div>
              <div>Email</div>
            </div>
          </div>
        </td>



      </tr>
    </div>
  );
};

export default Reviews;