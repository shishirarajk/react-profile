import React from "react";

function User(props) {
  const { name } = props.user;
  return (
    <div>
      <p>Name: {name}</p>
      <hr className="banner-text hr" />
    </div>
  );
}

export default User;
