import { React, useState } from "react";
import "../styles/Login.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "./error.jsx";
async function loginUser(credentials) {
  return fetch("http://localhost:8080/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  let navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showError, setshowError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail(e.target.Email.value);
    setPassword(e.target.Password.value);
    setshowError(false);
    // Error Validation
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const isEmailValid = e.target.Email.value.match(validRegex);
    console.log(isEmailValid);
    if (!isEmailValid) {
      setshowError(true);
    } else {
      const credentials = {
        email: email,
        password: password,
      };
      console.log(credentials);
      const token = await loginUser(credentials);
      if (token) {
        setToken(token);
        navigate("/dashboard", { replace: true });
      } else {
        setToken(token);
        navigate("/", { replace: true });
        alert("User does not exist");
      }
    }
  };
  return (
    <div className="login-wrapper">
      <div className="loginHeading">
        <div className="mainLoginHeading">To Continue</div>
        <div className="subLoginHeading">We need your Email & Password</div>
      </div>
      <div className="loginInput">
        <form onSubmit={handleSubmit}>
          <input type="text" id="Email" placeholder="Email" />
          <input type="password" id="Password" placeholder="Password" />
          {showError ? <ErrorMessage /> : ""}
          <div className="submitBox">
            <button type="submit" id="submitButton">
              Login
            </button>
          </div>
          <div className="rememberMe">
            <input type="checkbox" name="rememberMe" id="rememberMe" />
            <span class="subLoginHeading">Remember Me</span>
          </div>
        </form>
      </div>
    </div>
  );
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
