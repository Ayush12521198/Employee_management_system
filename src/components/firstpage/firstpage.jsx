import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import blogo from "../img/Logo.png";
import back2 from "../img/back2.png";
import "./firstpage.css";
import HashLoader from "react-spinners/HashLoader";

const FirstPage = () => {
  const [isHoveredSignUp, setIsHoveredSignUp] = useState(false);
  const [isHoveredLogin, setIsHoveredLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const buttonStyle = {
    marginTop: "0",
    marginRight: "10px",
    borderRadius: "12px",
    color: "#000000",
    border: "2px solid transparent",
    transition: "border 0.3s",
    fontWeight: "500",
    fontSize: "1rem",
  };

  const buttonHoverStyle = {
    border: "2px solid #000000",
  };
  return (
    <div className="hubcontainer">
      {loading ? (
        <div className="loader-container">
          <HashLoader
            color={"#ffffff"}
            loading={loading}
            size={60}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="containerStyle">
          <nav
            className="navbar navbar-expand-lg navbar-light"
            style={{ top: 0 }}
          >
            <div className="BAR">
              <Link to="/" className="navbar-brand">
                <img
                  src={blogo}
                  style={{ height: "150%", marginLeft: "15%" }}
                  alt="Logo"
                />
              </Link>
              <div className="d-flex">
                <ul
                  className="navbar-nav"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <li className="nav">
                    <Link
                      to="/register"
                      className="nav-link btn btn-outline rounded-10"
                      style={{
                        ...buttonStyle,
                        ...(isHoveredSignUp ? buttonHoverStyle : {}),
                      }}
                      onMouseEnter={() => setIsHoveredSignUp(true)}
                      onMouseLeave={() => setIsHoveredSignUp(false)}
                    >
                      Signup
                    </Link>
                  </li>
                  <li className="nav">
                    <Link
                      to="/login"
                      className="nav-link btn btn-size-10 rounded-10"
                      style={{
                        ...buttonStyle,
                        ...(isHoveredLogin ? buttonHoverStyle : {}),
                      }}
                      onMouseEnter={() => setIsHoveredLogin(true)}
                      onMouseLeave={() => setIsHoveredLogin(false)}
                    >
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="groupedSectionStyle">
            <div className="newBox">
              <div className="tex">
              Employee Management with
                <span className="textbox"> Crewly</span>
              </div>
              <div className="otherStyle">
                Experience a new era of seamless employee management with Crewly's powerful dashboard.
                Built for simplicity and efficiency, this centralized platform empowers you to effortlessly track employee counts, manage salaries, and streamline your entire HR workflow—all in one place.
              </div>
            </div>
            <div className="design">
              <div className="checkmarkStyle">
                <img className="back2" src={back2} alt="back1" />
              </div>
            </div>
          </div>
         
        </div>
      )}
    </div>
  );
};

export default FirstPage;