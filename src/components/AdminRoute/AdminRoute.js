import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children}) => {
    
    const {loading,admin,user}=useAuth();
    
    if (loading) {
        return <Spinner className="mt-5" animation="border" variant="warning" />
    }
    return (

        user?.email&&admin? <>{children}</> : <Navigate to="/" />
    );
    
};

export default AdminRoute;