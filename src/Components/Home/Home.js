import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import  './home.css';

import Card from './Card';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    fetch(`http://localhost:5000/service`)
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[])

  return (

    <div>
      <div className="container shadow-2xl shadow-white mt-10">
        <div >
          <div className="hero lg:h-[85vh] h-[70vh] header">
            <div className="hero-content text-center">
              <div className="">
                <h1 className="text-5xl font-bold">Promote With Me</h1>
                <p className="py-6 m-5 text-3xl shadow-2xl shadow-orange-700 text-sky-600 lg:font-extrabold ">Finding Some one to Promote your Brand? Or products?</p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service I Have  */}
      <section > 
      <div className='lg:grid lg:grid-cols-3'> 
      {
          products.map(product=><Card product={product}></Card>)
        }
      </div>
        <div className='w-[90%]'> 
        <Link to={'/Services'} className='btn btn-outline mx-auto'> See All </Link>
        </div>
      </section>
    </div>

  );
};

export default Home;