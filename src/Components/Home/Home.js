import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './home.css';

// importing assests
import video from '../Assests/lv_0_20221108015852.mp4'
import AutoTyping, { BlinkCursor } from 'react-auto-typing'
import discount from '../Assests/Discount-cuate.png'
import Social from '../Assests/Social Growth-rafiki.png'
import Thinking from "../Assests/Writer's block-bro.png"
import Running from "../Assests/Fast loading-rafiki.png"
import meeting from "../Assests/Social interaction-bro.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

import Card from './Card';
import { Link } from 'react-router-dom';
import DynamicTitle from '../../Hook/DynamicTitle';


const Home = () => {
  DynamicTitle('Home')
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(`https://youtuber-server-ten.vercel.app/service`)
      .then(res => res.json())
      .then(data => {
        setProducts(data)
      })
  }, [])

  AOS.init();
  return (

    <div className='overflow-hidden'>
      <div className="container shadow-2xl shadow-white mt-10 header bg-[#DFCCF1] ">
        <div >
          <div className="hero lg:h-[85vh]  ">
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
                      className=" text-3xl my-5 font-extrabold text-[blue] shadow-2xl shadow-black" />
                    <BlinkCursor
                      active // <boolean>
                      blinkSpeed={500} // <number>
                    />
                  </>

                </div>

                <Link to={'/Services'}> <button className="btn btn-accent  ">Check Services</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service I Have  */}

      {/* Who I am? */}
      <section className='w-[90%] mx-auto mt-10'>
        {/* how to use video on react */}

        <div className='lg:grid lg:grid-cols-2 bg-white my-5 shadow-2xl shadow-black ' data-aos="flip-down" >
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
      <h1 className='my-10 text-center text-3xl'>Service I have </h1>
      <section className='bg-[#F7D7D7] '>
        <div className='lg:grid lg:grid-cols-3 w-[95%] mx-auto ' data-aos="fade-down">

          {
            products.map(product => <Card product={product}></Card>)
          }
        </div>

        <div className=''>
          <Link to={'/Services'} className='btn btn-outline w-[90%] mx-auto ml-[5%] my-10 border-dashed hover:rounded-full bg-[#C7DBFF]  text-black'> See All </Link>
        </div>
      </section>
      <section className="py-10 bg-[#8493B7] sm:py-16 lg:py-24">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
            <div className="pr-12 sm:pr-0">
              <div className="relative max-w-xs mb-12">
                <img className="object-bottom rounded-md" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/4/man-eating-noodles.jpg" alt="" data-aos="fade-down" />

                <img className="absolute origin-bottom-right scale-75 rounded-md -bottom-12 -right-12" src="https://i.ibb.co/bPm59C6/1671041849006.jpg" alt="" data-aos="fade-left" />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl " data-aos="fade-left">Grow business with Professtional.</h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600" data-aos="fade-left">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </div>
        </div>
      </section>
      <section >
        <div className='w-[100%] bg-[#DFCCF1] font-serif text-center p-10 mt-5'>
          <div className='lg:grid lg:grid-cols-3 gap-5'>
            <div className='border border-black mt-2 p-5 shadow-2xl shadow-black' data-aos="fade-right" data-aos-delay="50"
              data-aos-duration="500"
              data-aos-easing="ease-in-out">
              <div>
                <h1 className='text-4xl text-black font-serif' > Follow me on Facebook</h1>
                <img src={Social} alt="" srcset="" />
              </div>
            </div>

            <div >
              <div className='flex flex-col '>

                <div className='h-[250px] shadow-2xl shadow-black w-[99%] mx-auto p-3 ' data-aos="fade-down" data-aos-delay="50"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out">
                  <h1 className='text-3xl  text-fuchsia-800 '>Buy & see result </h1>
                  <img src={Running} alt="" srcset="" className='h-[70%] w-[70%] ' />
                </div>

                <div className='h-[250px] shadow-2xl shadow-black w-[99%] mx-auto mt-5  p-3' data-aos="fade-up" data-aos-delay="50"
                >
                  <h1 className='text-2xl text-black'> <span className='font-serif font-bold text-3xl'>Dont Worry </span> About Your Promotion </h1>
                  <img src={Thinking} alt="" srcset="" className='h-[70%] w-[70%] ' />
                </div>

              </div>

            </div>
            <div className='shadow-2xl shadow-white border border-black p-5' data-aos="fade-left" data-aos-delay="50"
              data-aos-duration="500"
              data-aos-easing="ease-in-out">
              <h1 className='text-4xl text-fuchsia-700 font-bold'>
                Set A Meeting With Me
              </h1>
              <img src={meeting} alt="" srcset="" />
            </div>
          </div>

        </div>
      </section>
      <section className="py-10 bg-[#95B1CC] sm:py-10 ">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="  text-gray-900 text-3xl font-serif font-bold" data-aos="fade-left">Companies Work with me </h2>
          </div>

          <div className="grid items-center grid-cols-2 gap-10 mt-8 md:grid-cols-4 sm:gap-y-10" >
            <div>
              <img className="object-contain w-auto mx-auto h-14" src="https://i.ibb.co/KXqP9mT/Vector.png" alt="" data-aos="fade-down" />
            </div>
            <div>
              <img className="object-contain w-auto mx-auto h-14" src="https://i.ibb.co/KXqP9mT/Vector.png" alt="" data-aos="fade-down" />
            </div>
            <div>
              <img className="object-contain w-auto mx-auto h-14" src="https://i.ibb.co/KXqP9mT/Vector.png" alt="" data-aos="fade-down" />
            </div>
            <div>
              <img className="object-contain w-auto mx-auto h-14" src="https://i.ibb.co/KXqP9mT/Vector.png" alt="" data-aos="fade-down" />
            </div>


          </div>
        </div>
      </section>










    </div>

  );
};

export default Home;