import React from "react";
import "./post.css";
export default function Post() {
  return (
    <div className="post">
      <img
        src="https://images.pexels.com/photos/6475560/pexels-photo-6475560.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt="simple img"
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum, dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ducimus
        soluta illum architecto blanditiis? Dolores illo et, qui harum
        reiciendis ad, inventore odio in modi fugit, a eveniet minima doloribus
        blanditiis ut? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Cumque ducimus soluta illum architecto blanditiis? Dolores illo et, qui
        harum reiciendis ad, inventore odio in modi fugit, a eveniet minima
        doloribus blanditiis ut?
      </p>
    </div>
  );
}
