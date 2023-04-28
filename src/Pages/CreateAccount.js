import loginImg from "../Assets/loginImg.jpg";
import React, { useState } from "react";
import Data from "./user.json";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./login.css";

const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name === "" || password === "") {
      return setMessage("All field must be field to proceed.");
    }

    const newUser = {
      id: uuidv4(),
      email: email,
      password: password,
    };
    fetch("/user.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

    setName("");
    setEmail("");
    setPassword("");
    navigate("/");
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
            Create an Account
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
              Name:
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
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br />
            <br />
            <label style={{ fontSize: "25px", fontWeight: "500" }}>
              Email*
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
              Password*
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
            <br />
            <button className="button" type="submit">Create an Account</button>
            <div style={{ display: "flex" }}>
              <p>Already a member?</p>
              <p style={{ marginLeft: "370px" }}>
                <a href="http://localhost:3000/">Signin</a>
              </p>
            </div>
            <p style={{color: "red", fontSize: "20px"}}>{message}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
