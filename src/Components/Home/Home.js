import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './home.css';
import video from '../video/lv_0_20221108015852.mp4'
import AutoTyping, { BlinkCursor } from 'react-auto-typing'

import discount from '../video/Discount-cuate.png'


import Card from './Card';
import { Link } from 'react-router-dom';
import DynamicTitle from '../../Hook/DynamicTitle';

const Home = () => {
  DynamicTitle('Home')
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch(`https://youtuber-server-ten.vercel.app/service`)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (

    <div>
      <div className="container shadow-2xl shadow-white mt-10 header">
        <div >
          <div className="hero lg:h-[85vh] ">
            <div className="hero-content text-center">
              <div className="">
                <h1 className="text-5xl font-bold text-emerald-700">Promote With Me </h1>
                <div>
                <>
              <AutoTyping
                active // <boolean>
                textRef='  
                Finding Some one to Promote your Brand? Or products?  SO, You are in the right place.
                
                ' // <string>
                writespeed={150} // <number>
                deleteSpeed={150} // <number>
                delayToWrite={1000} // <number>
                delayToDelete={2000} // <number>
              className=" text-3xl my-5 font-bold text-fuchsia-500 shadow-2xl shadow-black" />
              <BlinkCursor
                active // <boolean>
                blinkSpeed={500} // <number>
              />
            </>

                </div>

                <Link to={'/Services'}> <button className="btn btn-accent ">Check Services</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service I Have  */}
      <section >
        <div className='lg:grid lg:grid-cols-3 w-[95%] mx-auto'>
          {
            products.map(product => <Card product={product}></Card>)
          }
        </div>
        <div className=''>
          <Link to={'/Services'} className='btn btn-outline w-[90%] mx-auto ml-[5%] my-10 border-dashed hover:rounded-full'> See All </Link>
        </div>
      </section>
      {/* Who I am? */}
      <section className='w-[90%] mx-auto mt-10'>
        {/* how to use video on react */}

        <div className='lg:grid lg:grid-cols-2 bg-white my-5 shadow-2xl shadow-black ' >
          <video src={video} autoPlay muted controlsList='nodownload' loop  >
          </video>
          <div className="content p-5">
            <h1 className='text-5xl text-black' > Who  am I?</h1>
            <>
              <AutoTyping
                active // <boolean>
                textRef='  
                   Best YouTuber in Bangladesh,
                   I am a YouTuber,
                    I have 2.5M Subscribers,
                    I have many services,
                    such as,
                    Brand Promotion,
                    Product Promotion,
                    Video Promotion,
                    and many more on 
                    my YouTube Channel, Facebook Page, Instagram, Twitter, TikTok, and many more.
                    So, You can contact me, 
                    I will help you,
                

                ' // <string>
                writeSpeed={150} // <number>
                deleteSpeed={150} // <number>
                delayToWrite={1000} // <number>
                delayToDelete={2000} // <number>
                className=" text-2xl my-5 text-sky-600" />
              <BlinkCursor
                active // <boolean>
                blinkSpeed={500} // <number>
              />
            </>
          </div>
        </div>
      </section>
      {/* Dicount  */}
      <section className='lg:grid grid-cols-3 w-[100%] h-[80%] bg-blue-300 my-28'> 
        <div> 
         <img src={discount} alt="" srcset="" />
        </div>
         <div className='col-span-2 justify-center'> 
            <h1 className=' lg:text-4xl text-center text-black font-serif'> Buy Now to Get Dicount </h1>
            <p className='text-2xl text-center text-black'> 50% dicount on all services </p>
            <Link to={'/Services'} className='btn btn-accent w-[90%] mx-auto ml-[5%] my-10 border-dashed hover:rounded-full'> See All </Link>
            <p className='text-center lg:text-3xl text-blue-600'> 
           Fore more information,
            Contact me,
            Follow me on Social Media,
            Subscribe my YouTube Channel,
            Like my Facebook Page,
            Follow me on Instagram,

            </p>
         </div>
      </section>

    </div>

  );
};

export default Home;