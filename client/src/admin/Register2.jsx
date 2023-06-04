import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register2.css";
function Register2() {
    const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/");
    }
  }, []);

  async function signUp() {

    try {
      let result = await axios.post("http://localhost:8000/api/register", {
        name: name,
        email: email,
        password: password,
      }); navigate('/');
    } 
    catch (error) {
      console.log(error);
    }
  }

  return (
    <section id="contact">
      <h1 className="section-header">Register</h1>
      <div className="contact-wrapper">
        <form id="contact-form" className="form-horizontal" role="form">
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" id="name" placeholder="NAME" name="name"   value={name}
                onChange={(e) => setName(e.target.value)} required />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email"    value={email}
                    onChange={(e) => setEmail(e.target.value)} required />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" id="password" placeholder="Password" name="password"    value={password}
          onChange={(e) => setPassword(e.target.value)} required />
            </div>
          </div>
           <button className="btn btn bg-primary send-button" id="submit" type="button" onClick={signUp} value="SEND">
            <div className="alt-send-button">
              <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
            </div>
          </button>
        </form>
        {/* Left contact page */}
        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place"> Site Web FlashZone</span></i></li>
            <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></i></li>
            <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">FlashZone@gmail.com</a></span></i></li>
          </ul>
          <hr />
          <ul className="social-media-list">
            <li><a href="#" target="_blank" className="contact-icon"><i className="fa fa-github" aria-hidden="true"></i></a></li>
            <li><a href="#" target="_blank" className="contact-icon"><i className="fa fa-codepen" aria-hidden="true"></i></a></li>
            <li><a href="#" target="_blank" className="contact-icon"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
            <li><a href="#" target="_blank" className="contact-icon"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
          </ul>
          <hr />
          <div className="copyright">&copy; FlashZone 2023</div>
        </div>
      </div>
    </section>
  );
}

export default Register2;
