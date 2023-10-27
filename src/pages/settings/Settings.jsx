import React from "react";
import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form action="" className="settingsForm">
          <label htmlFor="">Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className=" settingsPPIcon fa fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label htmlFor="">Username</label>
          <input type="text" placeholder="Anderson" />
          <label htmlFor="">Email</label>
          <input type="email" placeholder="andersonrosier@gmail.com" />
          <label htmlFor="">Password</label>
          <input type="password" placeholder="Max#i123$" />
          <button className="settingsSubmit3">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
