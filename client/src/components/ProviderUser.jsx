import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
function ProviderUser() {
    const auth =  JSON.parse(localStorage.getItem("user-info"));
    return auth.role =="user" ? 
    <Outlet /> :
    <Navigate to="/login" />;
  }

export default ProviderUser;