import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header'
function Login(){
    const navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            navigate('/add')}
    },[])
    return(
        <div>
            <h1>Login page</h1>
            <div className='col-sm-6 offset-sm-3'>
                <input type='text' placeholder='email' className='form-control'/>
                <br/>
                <input type='password' placeholder='password' className='form-control'/>
                <br/>
                <button className='btn btn-primary'>Login</button>
            </div>
        </div>
    )
}
export default Login;