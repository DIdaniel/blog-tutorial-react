import React from "react";
import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src={process.env.PUBLIC_URL + "./assets/red.jpg"}
        alt="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Lifr</span>
        </div>
        <span className="postTitle">lorem ipsum dolor sit amet good</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
};

export default Post;
