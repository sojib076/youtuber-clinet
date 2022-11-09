import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Authcontex } from '../../AllContex/Usercontex';
import Reviews from './Reviews';

const ServiceDetails = () => {
    const servicedata = useLoaderData()
    const { user } = useContext(Authcontex)
  
     const [reviews,setReviews] = useState([])

    function handelReview(e) {
        e.preventDefault()
        const review = e.target.review.value
        const name = user?.displayName
        const serviceid = servicedata._id
        const servicename = servicedata.name
        const img = user?.photoURL
        const email = user?.email
        const data = { review, name, serviceid, email,img,servicename }
        // const userimg = user?.img

        fetch(`https://youtuber-server-ten.vercel.app/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify(data)
        })
        e.target.reset();

    }

    useEffect(()=>{ 
        fetch('https://youtuber-server-ten.vercel.app/reviews',{
          headers:{
            serviceid:servicedata._id
          }
        })
        .then(res=>res.json())
        .then(data=>
            {
                const reverse = data.reverse()
                setReviews(reverse)
            })
      },[reviews])


    return (
        <div >
            <div className='lg:grid lg:grid-cols-4 '>
                <div className='col-span-2  lg:h-[90%] lg:shadow-none lg:shadow-black'>
                    <h1 className='text-3xl'>{servicedata.name}</h1>
                    <img src={servicedata.img} alt="rr" className='h-[60%]' />
                    <div className='shadow-black shadow-2xl lg:m-10 lg:p-5 text-center'>
                        <p className='text-xl'>{servicedata.description}</p>
                        <p className='lg:text-5xl text-2xl'> Price is ${servicedata.price} Only</p>
                    </div>

                </div>
                <div className="divider divider-horizontal"></div>
                <div className='lg:mt-0 mt-20'>
                    {
                        user?.email ?
                            <>
                                <form className="form-control lg:ml-[-200px] " onSubmit={handelReview}>
                                    <label className="label">
                                        <span className="label-text">email</span>
                                    </label>

                                    <input type="text" placeholder="email" className="input input-bordered" defaultValue={user?.email} />

                                    <label className="label" >
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" className="input input-bordered mb-5" name="name" defaultValue={user?.displayName} />


                                    <textarea className="textarea textarea-bordered" placeholder="Type Review" name='review'></textarea>
                                    <div className="form-control mt-6 w-[50%]">
                                        <button className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </> : <>
                                please Login to Comment <br></br>
                                <Link to={'/login'} className='btn btn-outline '> login to Review </Link>
                            </>
                    }

                </div>
            </div>

            <div className="divider"></div>

            <section className='m-10'>
                <h1 className='text-3xl text-center mb-10 mt-[-10px]'> Our Reviews</h1>
            <div className=' lg:grid grid-cols-3 lg:gap-5'>
                {
                    reviews.map(review=><Reviews rev={review}></Reviews>)
                }
                </div>


            </section>
        </div>
    );
};

export default ServiceDetails;