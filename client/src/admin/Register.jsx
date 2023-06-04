// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";


// function Register() {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const navigate = useNavigate();
//     useEffect(()=>{
//         if (localStorage.getItem('user-info')){
//             navigate('/add') // Navigate to '/add' route
//         }
//     },[])

//   async function signUp() {
//     if (name === "") {
//       alert("Name field cannot be empty");
//       return;
//     }

//     try {
//         let result = await axios.post("http://localhost:8000/api/register", {
//           name: name,
//           email: email,
//           password: password,
//         });
//         console.log(result);
//         navigate('./list')
//         // result = await result.json();
//         localStorage.setItem("user-info", JSON.stringify(result.data));
    
      
//       } catch (error) {
//         console.log(error);
//       }
//   }

//   return (
//     <div>
//       <h1>Register page</h1>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         className="form-control"
//       />
//       <br />
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className="form-control"
//       />
//       <br />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className="form-control"
//       />

//       <button onClick={signUp} className="btn">
//         Sign up
//       </button>
//     </div>
//   );
// }

// export default Register;
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      // navigate("/add");
    }
  }, []);

  async function signUp() {

    try {
      let result = await axios.post("http://localhost:8000/api/register", {
        name: name,
        email: email,
        password: password,
      });
      // console.log(result);

      // if (role === "admin") {
      //   navigate("/login");
      // } else {
      //   navigate("/user");
      // }

      // localStorage.setItem("user-info", JSON.stringify(result.data));
      navigate('/');
    } 
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      <h1 className="text-center">Register page</h1>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
        />
      </div>
      {/* <div className="mb-3">
        <label className="form-label">Role</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="form-select"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div> */}
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        />
      </div>
      <button onClick={signUp} className="btn btn-primary">
        Sign up
      </button>
    </div>
  );
}

export default Register;

{/* <section class="get-in-touch">
   <h1 class="title">Get in touch</h1>
   <form class="contact-form row">
      <div class="form-field col-lg-6">
         <input id="name" class="input-text js-input"  onChange={(e) => setName(e.target.value)}type="text" required />
         <label class="label" for="name">Name</label>
      </div>
      <div class="form-field col-lg-6 ">
         <input id="email" class="input-text js-input"onChange={(e) => setEmail(e.target.value)} type="email" required/>
         <label class="label" for="email">E-mail</label>
      </div>
      <div class="form-field col-lg-6 ">
         <input id="role" onChange={(e) => setRole(e.target.value)} class="input-text js-input" type="text" required />
         <label class="label" for="company">role</label>
      </div>
       <div class="form-field col-lg-6 ">
         <input id="phone" class="input-text js-input" type="text"  onChange={(e) => setPassword(e.target.value)} required/>
         <label class="label" for="phone">Password</label>
      </div>
      <div class="form-field col-lg-12">
         <input class="submit-btn" onClick={signUp} type="submit" value="Submit"/>
      </div>
   </form>
</section> */}