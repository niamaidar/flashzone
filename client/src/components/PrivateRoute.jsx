import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
function ProviderRoute() {
    const auth =  JSON.parse(localStorage.getItem("user-info"));
    return auth.role =="user" ? 
    <Outlet /> :
    <Navigate to="/register" />;
  }

export default ProviderRoute;