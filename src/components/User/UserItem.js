import React from "react";
import "./UserItem.css";

const UserItem = (props) => {
  return (
    <div className="items" id={props.key}>
      <h3>{props.userName}</h3>
      <h3>({props.userAge})</h3>
    </div>
  );
};

export default UserItem;
