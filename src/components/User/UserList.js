import React from "react";
import UserItem from "./UserItem";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card>
      {props.list.map((obj) => (
        <UserItem key={obj.id} userName={obj.userName} userAge={obj.userAge} />
      ))}
    </Card>
  );
};

export default UserList;
