import React, { useContext } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import signupimg from '../video/Sign up-amico.png'

import { Authcontex } from '../../AllContex/Usercontex';

const SingUp = () => {
    const navigate = useNavigate()
    const {createuser,googleloign,updateuser} = useContext(Authcontex)
    const handesingup =(e)=>{
        
        // prevent defaul
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value
        const url = e.target.url.value
        
        createuser(email,password).then(result=>{
            updateuser(name,url)
            navigate('/')
        }).then(error=>{ 
            console.log(error);
        })


    }
    const handelgoogle = () => {
        googleloign( ).then(result=>{ 
            navigate('/')
        })
    }
   
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                       <div className='h-[80%]'> 
                       <img src={signupimg} alt="" srcset="" />
                       
                       </div>
                      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  
                        <form className="card-body" onSubmit={handesingup}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" className="input input-bordered" name='name' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Img</span>
                                </label>
                                <input type="text" placeholder="Your Img Url" className="input input-bordered" name='url' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" name='email' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" name='password' />
                                <label className="label">
                                    <Link to={'/login'}> Have a account? <span className='text-cyan-600 text-2xl'>Login</span> </Link>
                                </label>
                            </div>
                                <button onClick={handelgoogle} className='btn btn-outline'> Sign with Google</button>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary"> Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;