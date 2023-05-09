import React from "react";

function User(props) {
  return (
    <div className="user-container">
      <h1>{props.name}</h1>
      <em>Email: {props.email}</em>
    </div>
  );
}

export default User;
