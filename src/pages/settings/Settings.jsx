import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import "./settings.css";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={process.env.PUBLIC_URL + " ./assets/brown.jpg"}
              alt="settingsIMG"
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="What is your name?" name="name" />
          <label>Email</label>
          <input type="email" placeholder="What is your E-mail?" name="email" />
          <label>Password</label>
          <input
            type="password"
            placeholder="What is your Pssword?"
            name="password"
          />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      <SideBar />
    </div>
  );
};

export default Settings;
