import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontex } from '../../AllContex/Usercontex';


const Header = () => {
    // const contexinfo = { createuser, login,user,loading,logout }
    const { user, logout } = useContext(Authcontex)




    return (
        <div>

            <div className="navbar bg-blue-600 shadow-2xl shadow-slate-400">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li> <Link to={'/home'}>HOME</Link></li>


                            {
                                user?.email ? <li onClick={logout}> <Link className='btn btn-warning text-gray-800'>Logout</Link></li> : <li> <Link to={'/signup'}>SingUp</Link></li>
                            }
                            {
                                user?.email ? <li> <Link to={'/profile'}>Profile</Link></li> : <li> <Link to={'/login'}>Login</Link></li>
                            }
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">

                        <li> <Link to={'/home'}>HOME</Link></li>

                        {
                            user?.email ? <li onClick={logout}> <Link className='btn btn-warning text-gray-800'>Logout</Link></li> : <li> <Link to={'/signup'}>SingUp</Link></li>
                        }
                        {
                            user?.email ? <li> <Link to={'/profile'}>Profile</Link></li> : <li> <Link to={'/login'}>Login</Link></li>
                        }

                    </ul>
                </div>
                {/* there will be something */}
            </div>

        </div>
    );
};

export default Header;