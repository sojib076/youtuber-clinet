
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontex } from '../../AllContex/Usercontex';
import DynamicTitle from '../../Hook/DynamicTitle';
import loginimg from '../Assests/Sync-pana.png'

const Login = () => {
    DynamicTitle('Login')
    const { login, googleSignIn } = useContext(Authcontex)
    let navigate = useNavigate();
    let location = useLocation();


    let from = location.state?.from?.pathname || "/";


    const handelogin = (e) => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value

        login(email, password)
            .then(result => {
                //get jwt token
                const loginuser = result.user.email;
                //set token in local storage
                fetch('https://youtuber-server-ten.vercel.app/jwt', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ loginuser })
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('token', data.token)
                    })
                 toast.success('Login Successfull');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.code);
                if (error.code === 'auth/wrong-password') {
                    toast.error('Wrong password.');
                }else if (error.code === 'auth/user-not-found') {
                    toast.error('User not found.');}
                else if (error.code === 'auth/invalid-email') {
                    toast.error('That email address is invalid!');}
                

            })

    }

    //google login
    const handlegooglelogin = () => {
        googleSignIn()
            .then(result => {
                const loginuser = result.user.email;
                //set token in local storage
                fetch('https://youtuber-server-ten.vercel.app/jwt', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ loginuser })
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('token', data.token)
                    })

                navigate(from, { replace: true });
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='h-[50]% w-[50%]'  >
                        <img src={loginimg} alt="Group-140" border="0" />

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl !bg-gray-700">

                        <form className="card-body" onSubmit={handelogin}>
                            <div className="form-control">
            
                                <input type="text" placeholder="email" className="input input-bordered" name='email' />
                            </div>
                            <div className="form-control">
                    
                                <input type="text" placeholder="password" className="input input-bordered" name='password' />
                                <label className="label">
                                    <Link to={'/signup'}> Create A Account?  </Link>
                                </label>
                            </div>
                            <div className="form-control ">
                                <button className="btn btn-primary">Login</button>
                            <button className='btn btn-outline mt-2' onClick={handlegooglelogin}>Login with Google</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;