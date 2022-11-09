import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetail = () => {
    const detailsData = useLoaderData()
    console.log(detailsData);
    return (
        <div>
            <h1>Detail</h1>
            
        </div>
    );
};

export default ServiceDetail;