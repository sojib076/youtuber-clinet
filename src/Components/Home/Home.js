import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import  './home.css';

import Card from './Card';

const Home = () => {
  const [products, setProducts] = useState([])

  return (

    <div>
      <div className="container shadow-2xl shadow-white mt-10">
        <div >
          <div className="hero lg:h-[85vh] h-[70vh] header">
            <div className="hero-content text-center">
              <div className="">
                <h1 className="text-5xl font-bold">Promote With Me</h1>
                <p className="py-6 text-3xl text-orange-700">Finding Some one to Promote your Brand? Or products?</p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service I Have  */}
      <section> 
        
      </section>
    </div>

  );
};

export default Home;