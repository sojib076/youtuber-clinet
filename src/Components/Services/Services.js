import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DynamicTitle from '../../Hook/DynamicTitle';



import Card from '../Home/Card';
const Services = () => {
        DynamicTitle(' Add A Services')

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