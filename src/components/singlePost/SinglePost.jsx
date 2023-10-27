import React from "react";
import "./singlePost.css";
export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="ocean img"
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet boula.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author : <b>ANDERSON</b>
          </span>
          <span className="singlePostDate">
            <i>1 hour ago</i>
          </span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          voluptatum, voluptatem nobis suscipit, id molestiae iste delectus
          eaque ea tempore iusto repudiandae sapiente laboriosam nam enim.
          Voluptas fuga dolore, voluptate sit porro iure esse nam, error
          praesentium atque assumenda. Harum! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Alias voluptatum, voluptatem nobis
          suscipit, id molestiae iste delectus eaque ea tempore iusto
          repudiandae sapiente laboriosam nam enim. Voluptas fuga dolore,
          voluptate sit porro iure esse nam, error praesentium atque assumenda.
          Harum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          voluptatum, voluptatem nobis suscipit, id molestiae iste delectus
          eaque ea tempore iusto repudiandae sapiente laboriosam nam enim.
          Voluptas fuga dolore, voluptate sit porro iure esse nam, error
          praesentium atque assumenda. Harum! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Alias voluptatum, voluptatem nobis
          suscipit, id molestiae iste delectus eaque ea tempore iusto
          repudiandae sapiente laboriosam nam enim. Voluptas fuga dolore,
          voluptate sit porro iure esse nam, error praesentium atque assumenda.
          Harum!
        </p>
      </div>
    </div>
  );
}
