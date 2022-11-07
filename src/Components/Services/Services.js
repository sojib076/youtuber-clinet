import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Home/Card';

const Services = () => {
    const products = useLoaderData()
    console.log(products);
    return (
        <div className='lg:grid lg:grid-cols-2 w-[90%] mx-auto '>
            {
                products.map(product=><Card product={product} key={product._id}></Card>)
            }
        </div>
    );
};

export default Services;