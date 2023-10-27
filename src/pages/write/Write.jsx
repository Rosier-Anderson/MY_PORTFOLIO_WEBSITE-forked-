import React, { useState } from "react";
import "./write.css";
import defaultWImg from "/project/home/rosieranderson1/workspace/src/assets/images/image.png";
export default function Write() {
  return (
    <div className="write">
      <div className="formImg">
        <img style={{}} className="😅" src={defaultWImg} alt="river-img" />
      </div>

      <form action="" className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className=" writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            type="text"
            placeholder="Tell your story..."
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
