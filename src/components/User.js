import React from "react";
import "./Index.css";
function User(props) {
  const { name, profilepicture } = props.user;
  return (
    <div className="username">
      <div className="user_img">
        <img src={profilepicture} alt="profile" />
      </div>
      <p>{name}</p>
    </div>
  );
}

export default User;
