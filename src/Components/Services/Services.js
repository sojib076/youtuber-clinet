import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';

import Card from '../Home/Card';

const Services = () => {
    const products = useLoaderData()
    

    return (
        <div className='lg:grid lg:grid-cols-3 w-[95%] mx-auto my-10 '>
            {
                products.map(product=><Card product={product} key={product._id}></Card>)
            }
        </div>
    );
};

export default Services;