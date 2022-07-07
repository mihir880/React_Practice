import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const userListHandler = (uName, uAge) => {
    setUserList((prevList) => {
      return [
        ...prevList,
        { user: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <>
      <div>
        <AddUser userList={userListHandler} />
        {userList.length !== 0 && <UserList users={userList}></UserList>}
      </div>
    </>
  );
}

export default App;
