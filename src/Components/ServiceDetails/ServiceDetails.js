import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Authcontex } from '../../AllContex/Usercontex';

const ServiceDetails = () => {
    const servicedata = useLoaderData()
    const { user } = useContext(Authcontex)
    function handelReview(e) {
        e.preventDefault()
        const form = e.target
        const review = form.review.value
        const name = form.name.value
        console.log(review, name);
    }
     

    return (
        <div >
            <div className='lg:grid lg:grid-cols-4 '>
                <div className='col-span-2  lg:h-[90%] lg:shadow-none lg:shadow-black'>
                    <h1 className='text-3xl'>{servicedata.name}</h1>
                    <img src={servicedata.img} alt="" className='h-[60%]'/>
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
                                <form className="form-control" onSubmit={handelReview}>
                                    <label className="label">
                                        <span className="label-text">email</span>
                                    </label>

                                    <input type="text" placeholder="email" className="input input-bordered" defaultValue={user?.email} />
                               
                                        <label className="label" >
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" placeholder="Name" className="input input-bordered mb-5" defaultValue={user?.name} />
                              
                                    {/* input btn */}

                                    <textarea className="textarea textarea-bordered" placeholder="Bio" name='review'></textarea>
                                    <div className="form-control mt-6 w-[50%]">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                </form>
                            </> : <>
                                please Login to Comment <br></br>
                                <Link to={'/login'} className='btn btn-outline '> login to Comment </Link>
                            </>
                    }
                </div>
            </div>
            <div className="divider"></div> 
            <section className='w-[90%] mx-auto mt-10'>
                all commnets
            </section>
        </div>
    );
};

export default ServiceDetails;