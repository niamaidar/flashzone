import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
function ProviderAdmin() {
    const auth =  JSON.parse(localStorage.getItem("user-info"));
    return auth.role =="admin" ? 
    <Outlet /> :
    <Navigate to="/list" />;
  }

export default ProviderAdmin;