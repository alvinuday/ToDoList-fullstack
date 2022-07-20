import PropTypes from "prop-types";
import HeroImage from "../assets/HeroImage.png";
import "../styles/Home.css";
import Login from "../components/Login";
import { React, useState } from "react";
import SignUp from "../components/SignUp";

export default function HomePage({ setToken }) {
  const [showLogin, setshowLogin] = useState(true);

  const loginClicked = () => {
    document.getElementById("loginButton").classList.add("active");
    document.getElementById("signUpButton").classList.remove("active");
    setshowLogin(true);
  };
  const signUpClicked = () => {
    document.getElementById("signUpButton").classList.add("active");
    document.getElementById("loginButton").classList.remove("active");
    setshowLogin(false);
  };

  return (
    <div class="homePageWrapper">
      <div className="heroLeft">
        <div className="heroImageContainer">
          <img src={HeroImage} alt="heroImage" id="heroImage" />
        </div>
      </div>
      <div className="heroRight">
        <div className="container">
          <div className="tabHeading">
            <div className="signInButtons">
              <button
                className="signInButton active"
                id="loginButton"
                onClick={loginClicked}
              >
                Login
              </button>
              <button
                className="signInButton"
                id="signUpButton"
                onClick={signUpClicked}
              >
                Sign up
              </button>
            </div>
          </div>
          <div className="innerBox">
            <div className="lineBreak"></div>
            <div className="signInComponent">
              {showLogin ? (
                <Login setToken={setToken} />
              ) : (
                <SignUp setToken={setToken} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

HomePage.propTypes = {
  setToken: PropTypes.func.isRequired,
};
