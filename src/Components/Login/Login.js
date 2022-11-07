
import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Authcontex } from '../../AllContex/Usercontex';

const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();

 let from = location.state?.from?.pathname || "/";
const {login} = useContext(Authcontex)

    const handelogin =(e)=>{
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value

        login(email,password).then(result=>{
                   
                navigate(from, { replace: true });
        })
        .then(error=>{
            console.log(error);
        })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                         {/* another div is here */}
                      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handelogin}>
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
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;