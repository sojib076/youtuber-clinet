import React, { useContext } from 'react';
import { Authcontex } from '../../AllContex/Usercontex';

const SingUp = () => {
    const {createuser} = useContext(Authcontex)
    const handesingup =(e)=>{
        // prevent default
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        createuser(email,password).then(result=>{
            console.log(result)
        }).then(error=>{ 
            console.log(error);
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                         {/* another div is here */}
                      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                      <h1> SingUp</h1>
                        <form className="card-body" onSubmit={handesingup}>
                            
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
                                    {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
                                </label>
                            </div>
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