import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import "../sidenavbar/sidenavbar.css";
import "./profile.css";

const Profile = () => {
  const [name, setUserName] = useState("");
  const [email, setUserEmail] = useState("");
  const [phone, setPhone] = useState("");
  
  const [status, setStatus] = useState("");

  useEffect(() => {
    const storedName = sessionStorage.getItem("name");
    const storedEmail = sessionStorage.getItem("email");
    const storedPhone = sessionStorage.getItem("phone");
    const storedStatus = sessionStorage.getItem("status");

    if (storedName) setUserName(capitalizeFirstLetter(storedName));
    if (storedEmail) setUserEmail(storedEmail);

    if (storedPhone) setPhone(storedPhone);
   
    if (storedStatus) setStatus(capitalizeFirstLetter(storedStatus));
  }, []);

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="procontainer">
      <div className="procontent rounded border">
        <h3 className="text-center">Profile</h3>
        <form className="proform">
          <div className="circle-container">
            <div className="circle">
              <FaUserCircle className="profile" />
            </div>
          </div>

          <div className="progroup">
            <label className="form-label"><strong>Name:</strong></label>
            <h3 className="pro">{name || "User"}</h3>
          </div>

          <div className="progroup">
            <label className="form-label"><strong>Email:</strong></label>
            <h3 className="pro">{email || "user@example.com"}</h3>
          </div>

          <div className="progroup">
            <label className="form-label"><strong>Phone:</strong></label>
            <h3 className="pro">{phone || "+91-XXXXXXXXXX"}</h3>
          </div>

          <div className="progroup">
            <label className="form-label"><strong>Status:</strong></label>
            <h3 className="pro">{status || "Active"}</h3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
