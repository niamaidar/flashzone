import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  async function signUp() {
    if (name === "") {
      alert("Name field cannot be empty");
      return;
    }

    try {
        let result = await axios.post("http://localhost:8000/api/register", {
          name: name,
          email: email,
          password: password,
        });
        console.log(result);
    
        // result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result.data));
    
        navigate('/add'); // Navigate to '/add' route
      } catch (error) {
        console.log(error);
      }
  }

  return (
    <div>
      <h1>Register page</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control"
      />
      <br />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="form-control"
      />

      <button onClick={signUp} className="btn">
        Sign up
      </button>
    </div>
  );
}

export default Register;
