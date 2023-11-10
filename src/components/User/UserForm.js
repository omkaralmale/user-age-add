import React, { useState } from "react";
import "./UserForm.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const UserForm = (props) => {
  const [enteredName, setName] = useState("");
  const [enteredAge, setAge] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge === 0) {
      return;
    } else if (enteredName.trim().length < 0 || enteredAge < 0) {
      return;
    }

    const obj = {
      userName: enteredName,
      userAge: +enteredAge,
      id: Math.random().toString(),
    };
    props.sendToApp(obj);
    setAge("");
    setName("");
  };

  const handleAge = (event) => {
    setAge(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <Card>
        <form onSubmit={handleSubmit}>
          <div className="container">
            <input
              type="text"
              placeholder="User Name"
              onChange={handleName}
              value={enteredName}
            />

            <input
              type="Number"
              placeholder="User Age(in Year)"
              onChange={handleAge}
              value={enteredAge}
            />
            <Button type="submit" />
          </div>
        </form>
      </Card>
    </>
  );
};

export default UserForm;
