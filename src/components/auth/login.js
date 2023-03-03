import React, { useState } from "react";
import "./login.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://nervous-shawl-crab.cyclic.app/api/v1/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((res) => {
      if (res.ok) {
        
      }
    });
  };


  return (
    <div className="container">
      <div className="box">
        <div className="image"></div>
        <form 
          onSubmit={handleSubmit}
        >
          <h2>Notebook</h2>
          <p>Welcome Back to My Notebook,</p>
          <input 
            type="email" 
            placeholder="Email" 
            name="email"
            value={ email }
            required
            onChange={ (e) => setEmail( e.target.value )}
          />
          <input 
            type="password" 
            placeholder="Password" 
            id="password"
            name="password"
            value={ password }
            required
            onChange={ (e) => setPassword( e.target.value )}
            minLength={ 8 }
          />
          <button type="submit">Log In</button>
          <div class="footer">
            Not on notebook?{""}
            <a href="/auth">
              Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
