import React from 'react';
import { IconName } from "react-icons/fa";

const Reviews = ({revies}) => {


    
    const {email,image,name,rating,review}= revies;
    return (
        <div>
            
              <tr>
        <th>
          <label>
          <button className="btn btn-primary">Delete</button>
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
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
        </div>
    );
};

export default Reviews;