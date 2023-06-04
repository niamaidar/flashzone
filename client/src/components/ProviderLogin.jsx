import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
function ProviderLogin()
{
    const Userauth = localStorage.getItem('user-info');
    if(Userauth.role == 'admin'){
        <Navigate to ='/admin' />
    }
    else if(Userauth.role == 'user'){
        <Navigate to ='/user' />
    }
    else {
        <Navigate to ='/login' />
    }
}