import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontex } from '../../AllContex/Usercontex';


const PrivateRoute = ({Children}) => {
    const {user,loading} = useContext(Authcontex)
    const location = useLocation()
        if (loading) {
            return <div> loading</div>
        }
    if (user?.email) {
        return Children
    } 
   return <Navigate to="/login" state={{ from: location }} replace />;
        
    
};

export default PrivateRoute;