import React from 'react';
import { Link } from 'react-router-dom';
import error from'../video/Feeling angry-amico.png'
import './Error.css'
const Error = () => {
    return (
        <div className='error flex flex-col justify-center'>
            <h1 className='text-5xl text-center text-red-700'> Error Nothing Found </h1>
       <Link to={'/home'}className='btn btn-error w-[80%] mx-auto' > Return Home</Link>
        </div>
    );
};

export default Error;