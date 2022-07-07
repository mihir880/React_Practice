import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please Enter Valid Name and Age",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid Input",
        message: "Please Enter Valid  Age (> 0)",
      });
      return;
    }
    props.userList(username, age);
    setUsername("");
    setAge("");
  };
  const usernameChangeHandler = (event) => {
    setUsername(event.target.value.trim());
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClearError={errorHandler}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={usernameChangeHandler}
          ></input>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            value={age}
            type="number"
            onChange={ageChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
