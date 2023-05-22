import React from "react";
import { useState } from "react";

function Register(){

    const [name , setName]=useState("")
    const [password , setPassword]=useState("")
    const [email , setEmail]=useState("")

    async function signUp()
    {
        let item={name,password,email}  
        console.warn(item)

       let result=await fetch("https://localhst:8000/api/register",{ 
       method:"POST",
       body:JSON.stringify(item),
       headers: {
        'Content-Type':'application/json',
        'Accept':'application/json'
    
                }
            })
   
   result=await result.json()
   console.warn("result",result);

        }
    return(
        <div>
            <h1>Register page</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" />
        </div>
    )
}
export default Register