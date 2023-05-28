import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlus, faTwitter, faFacebookF  } from "@fortawesome/free-brands-svg-icons";

import Header from "./Header";
import './login.css';
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add");
    }
  }, []);

  async function login() {
    console.warn(email, password);
    let item = { email, password };
    let result = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });

    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/add");
  }

  return (
    <div className="card">
      <form className="box">
        <h1>Login</h1>
        <p className="text-muted">Please enter your login and password!</p>
        <input
          type="text"
          name=""
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your Email"
        />
        <input
          type="password"
          name=""
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <div class="row">
						<p>Don't have an account? <a href="/Register">Register Here</a></p>
					</div>
        <input type="submit" onClick={login} name="" value="Login" />
        <div className="col-md-12">
          <ul className="social-network social-circle">
            <li>
            <a href="#" className="icoFacebook" title="Facebook">
              <FontAwesomeIcon icon={faFacebookF} />
          </a>
            </li>
            <li>
            <a href="#" className="icoTwitter" title="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
          </a>
            </li>
            <li>
            <a href="#" className="icoGoogle" title="Google +">
            <FontAwesomeIcon icon={faGooglePlus} />
          </a>

            </li>
          </ul>
        </div>
      </form>
    </div>
  );
}

export default Login;
