import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children}) => {
    const { user, loading } = useAuth();
    if (loading) {
        return <Spinner className="mt-5" animation="border" variant="warning" />
    }
    return (

        user.email ? <>{children}</> : <Navigate to="/login" />
    );
    
};

export default PrivateRoute;