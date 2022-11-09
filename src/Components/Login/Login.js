
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontex } from '../../AllContex/Usercontex';
import DynamicTitle from '../../Hook/DynamicTitle';
import loginimg from '../video/Sync-pana.png'

const Login = () => {
    DynamicTitle('Login')
    const {login,googleloign} = useContext(Authcontex)
    let navigate = useNavigate();
    let location = useLocation();

 
 let from = location.state?.from?.pathname || "/";


    const handelogin =(e)=>{
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value

        login(email,password)
        .then(result=>{     
                //get jwt token
                const loginuser = result.user.email;
                //set token in local storage
                fetch('http://localhost:5000/jwt',{
                    method:'POST',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify({loginuser})
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    localStorage.setItem('token',data.token)
                })

            navigate(from, { replace: true });    
        })
        .then(error=>{
            console.log(error);
        })

    }

 //google login
    const hadelgoogle = () => {
        googleloign().then(result =>{ 
            const loginuser = result.user.email;
            fetch('http://localhost:5000/jwt',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({loginuser})
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                localStorage.setItem('token',data.token)
            })
          navigate(from, { replace: true });
        })
        
      }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
               
                <div className="hero-content flex-col lg:flex-row-reverse">
                      <div> 
                        <img src={loginimg} alt="Group-140" border="0" />
                        
                      </div>
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
                                <Link to={'/signup'}> Create A Account?  </Link>
                                </label>
                            </div>
                             <button onClick={hadelgoogle} className='btn btn-outline'>Login with Google</button>
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