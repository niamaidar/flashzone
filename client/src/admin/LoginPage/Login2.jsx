import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import img from '../../images/logo2.png';

function Login2() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/list");
    }
  }, [navigate]);

  async function login() {
    const data = { email, password };
    try {
      const response = await axios.post("http://localhost:8000/api/login", data);
      localStorage.setItem("user-info", JSON.stringify(response.data));
      navigate('/list');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container-fluid ps-md-0">
      <div className="row g-0">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
        <div className="col-md-8 col-lg-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-lg-8 mx-auto">
                  <img className="img" src={img} width="300" height="100" alt="Logo" />
                  <h3 className="login-heading mb-4">Welcome back!</h3>

                  <form>
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="form-check mb-3">
                      <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                      <label className="form-check-label" htmlFor="rememberPasswordCheck">
                        Remember password
                      </label>
                    </div>

                    <div className="d-grid">
                      <button className="btn btn-lg bg-warning btn-login text-uppercase text-white fw-bold mb-2" onClick={login}
                        type="button">Sign in</button>
                      <div className="text-center text-black">
                        <a className="small" href="#">Forgot password?</a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login2;
