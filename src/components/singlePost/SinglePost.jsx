import React from "react";
import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={process.env.PUBLIC_URL + "./assets/nightcity.jpg"}
          alt="singlepostIMG"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author : <b>Danile</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
          nisi, suscipit culpa ea, odio provident architecto illo totam eius
          doloribus quibusdam, officia perferendis laborum! Dolorem molestias
          quas molestiae blanditiis esse? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Numquam nisi, suscipit culpa ea, odio
          provident architecto illo totam eius doloribus quibusdam, officia
          perferendis laborum! Dolorem molestias quas molestiae blanditiis esse?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
          nisi, suscipit culpa ea, odio provident architecto illo totam eius
          doloribus quibusdam, officia perferendis laborum! Dolorem molestias
          quas molestiae blanditiis esse? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Numquam nisi, suscipit culpa ea, odio
          provident architecto illo totam eius doloribus quibusdam, officia
          perferendis laborum! Dolorem molestias quas molestiae blanditiis esse?
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
