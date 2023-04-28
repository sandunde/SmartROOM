import loginImg from "../Assets/loginImg.jpg";
import React, { useState } from "react";
import Data from "./user.json";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    Data.find((u) => {
      if (u.email === email && u.password === password) {
        setName(u.name);
        navigate("/dashboard");
      } else {
        return setMessage("Email or Password is wrong. Please try again.");
      }
    });
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <img src={loginImg} width={910} height={980} />
        <div style={{ justifyContent: "center", alignItems: "center" }}>
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              marginLeft: "150px",
              marginTop: "80px",
            }}
          >
            SmartROOM
          </h2>
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              marginLeft: "150px",
              marginTop: "80px",
            }}
          >
            Login
          </h2>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              marginLeft: "150px",
              fontSize: "20px",
            }}
          >
            Take your first step towards better improving your home
          </p>
          <form
            onSubmit={handleSubmit}
            style={{ marginLeft: "150px", marginTop: "100px" }}
          >
            <label style={{ fontSize: "25px", fontWeight: "500" }}>
              Email:
              <br />
              <input
                style={{
                  width: "550px",
                  height: "40px",
                  borderWidth: "2px",
                  borderColor: "grey",
                  borderStyle: "solid",
                  fontSize: "20px",
                }}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <br />
            <label style={{ fontSize: "25px", fontWeight: "500" }}>
              Password:
              <br />
              <input
                style={{
                  width: "550px",
                  height: "40px",
                  borderWidth: "2px",
                  borderColor: "grey",
                  borderStyle: "solid",
                  fontSize: "20px",
                }}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <p>
              <a href="">Forgot Password</a>
            </p>
            <br />
            <button className="button" type="submit">Login</button>
            <div style={{ display: "flex" }}>
              <p>Not a member?</p>
              <p style={{ marginLeft: "300px" }}>
                <a href="http://localhost:3000/create-account">
                  Create an account
                </a>
              </p>
            </div>
            <p style={{ color: "red", fontSize: "20px" }}>{message}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
