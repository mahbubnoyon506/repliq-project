import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { Navigate, useLocation } from 'react-router-dom';

const RequiredAuth = ({ children }) => {

    const [user] = useAuthState(auth);
    const location = useLocation()

    if(!user){
        return <Navigate to='/signin' state={{ from: location }} replace />
    }

    return children
    
};

export default RequiredAuth;