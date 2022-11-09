import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontex } from '../../AllContex/Usercontex';
import Loading from '../Loading/Loading';


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(Authcontex)
    const location = useLocation()
        if (loading) {
            return <Loading color={'#ebb734'} type={'spin'}> </Loading>
        }

    if (user) {
        return children
    } 
   return <Navigate to="/login" state={{ from: location }} replace />;
        
    
};

export default PrivateRoute;