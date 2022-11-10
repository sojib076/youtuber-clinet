
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DynamicTitle from '../../Hook/DynamicTitle';



import Card from '../Home/Card';
import Loading from '../Loading/Loading';

const Services = () => {
        DynamicTitle(' Services')
        
        const [products,setProducts] = useState([])
        const [loading , setloading] = useState(true)

     useEffect(()=>{
        fetch('https://youtuber-server-ten.vercel.app/services')
        .then(res => res.json())
        .then(data => {
            setloading(false)
            setProducts(data)
        })
     },[products])
     if (loading) {
        return <div className='text-center'> 
            <h1 className='2xl'>Please Wait Loading</h1>
            <Loading color={'#FFFF66'} type={'spin'}></Loading>
        </div>
}

    return (
        <div className='lg:grid lg:grid-cols-3 w-[95%] mx-auto my-10 '>
            {
             products.map(product=><Card product={product} key={product._id}></Card>)
            }
        </div>
    );
};

export default Services;