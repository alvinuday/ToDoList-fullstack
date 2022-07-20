import { React, useState } from "react";
import "../styles/Login.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "./error.jsx";
async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function SignUp({ setToken }) {
  let navigate = useNavigate();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [showError, setshowError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setshowError(false);
    // Error Validation
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const isEmailValid = e.target.Email.value.match(validRegex);
    console.log(isEmailValid);
    if (!isEmailValid) {
      setshowError(true);
    } else {
      const token = await loginUser({
        username,
        password,
      });
      setToken(token);
      navigate("/dashboard", { replace: true });
    }
  };
  return (
    <div className="login-wrapper">
      <div className="loginInput">
        <form onSubmit={handleSubmit}>
          <input type="text" id="FullName" placeholder="Full Name" />
          <input type="text" id="Email" placeholder="Email" />
          <input type="password" id="Password" placeholder="Password" />
          {showError ? <ErrorMessage /> : ""}
          <div className="submitBox">
            <button type="submit" id="submitButton">
              Sign up
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
SignUp.propTypes = {
  setToken: PropTypes.func.isRequired,
};
