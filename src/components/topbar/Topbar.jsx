import "./topbar.css";
import React, { useEffect, useState } from "react";
import img1 from "../../assets/images/WhatsApp Image 2023-01-28 at 7.08.44 PM.jpeg";
import { Link } from "react-router-dom";

export default function TopBar() {
  const [imageIg, setImagIg] = useState(img1);

  function UploadImg(e) {
    setImagIg(URL.createObjectURL(e.target.files[0]));
  }
  {
    /* this is for the Link user  */
  }
  const user = false;
  return (
    <div className="top ">
      <div className="topLeft">
        <i className=" topIcon fa-brands fa-facebook"></i>
        <i className=" topIcon fa-brands fa-twitter"></i>
        <i className=" topIcon fa-brands fa-pinterest"></i>
        <i className=" topIcon fa-brands fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>{" "}
          {user && (
            <div className="toplistItemLogout">
              <li className="topListItem">
                <Link className="link" to="logout">
                  LOGOUT
                </Link>
              </li>
            </div>
          )}
        </ul>
      </div>
      <div className="topRight">
        <div className="topImgContainer">
          <input
            type="file"
            style={{ display: "none" }}
            id="topImgFile"
            accept="image/*"
            onChange={(e) => UploadImg(e)}
          />
          <label htmlFor="topImgFile">
            <img className="topImg" src={imageIg} id="topImg1" alt="img" />{" "}
          </label>
        </div>
      </div>
    </div>
  );
}
