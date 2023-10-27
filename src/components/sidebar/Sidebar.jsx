import React from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://t4.ftcdn.net/jpg/05/71/95/23/240_F_571952307_7SgyE8FX1DTFnAMolNnlDGpu7MRzcIHK.jpg"
          alt="about-me"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          officia quidem odio porro consequatur facilis, reprehenderit nihil ex
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME </span>
        <div className="sidebarSocial">
          <i className=" sidebarIcon fa-brands fa-facebook"></i>
          <i className=" sidebarIcon fa-brands fa-twitter"></i>
          <i className=" sidebarIcon fa-brands fa-pinterest"></i>
          <i className=" sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </aside>
  );
}
