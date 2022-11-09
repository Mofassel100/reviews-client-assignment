import React from 'react';
import { IconName } from "react-icons/fa";

const Reviews = ({revies,handleDelete}) => {



    const {email,image,name,rating,review,_id}= revies;

    
    return (
        <div>
            
              <tr>
        <th>
          <label>
          <button onClick={()=>handleDelete(_id)} className="btn btn-primary text-red-500">Delete</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{review}</div>
              <div className="text-sm opacity-50">Delivery foods</div>
            </div>
          </div>
        </td>
        <td>
          {name}
          <br/>
          <span className="badge badge-ghost badge-sm"> User Name</span>
        </td>
       
        <th>
          <button className="btn btn-ghost btn-primary btn-xs">Edite Profile</button>
        </th>
      </tr>
        </div>
    );
};

export default Reviews;