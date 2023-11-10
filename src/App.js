import React, { useState } from "react";
import "./App.css";
import UserForm from "./components/User/UserForm";
import UserList from "./components/User/UserList";
import Card from "./components/UI/Card";

function App() {
  const [prevobj, setObj] = useState([]);

  const getFromForm = (obj) => {
    setObj((prevobj) => {
      return [obj, ...prevobj];
    });
  };
  return (
    <Card>
      <UserForm sendToApp={getFromForm} />
      <UserList list={prevobj} />
    </Card>
  );
}

export default App;
