import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontex } from '../../AllContex/Usercontex';
import Loading from '../Loading/Loading';




const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(Authcontex)
    const location = useLocation()
      
    if (loading) {
        return <div className='text-center'> 
            <h1 className='2xl'>Please Wait Loading</h1>
            <Loading color={'#FFFF66'} type={'spin'}></Loading>
        </div>
        }
    if (user) {
        return children
    } 
   return <Navigate to="/login" state={{ from: location }} replace />;
        
    
};

export default PrivateRoute;