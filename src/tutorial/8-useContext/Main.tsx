import React, { useEffect, useState } from "react";
import usersData, { IUser } from "../utils/data";
import UsersContext from "./UserContext";
import UserList from "./UserList";

const Main = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    // Fetch data via fetch or axios
    setUsers(usersData);
  }, []);

  const removeUser = (id: number) => {
    setUsers((users) => {
      return users.filter((user) => user.id !== id);
    });
  };

  return (
    <>
      <UsersContext.Provider value={{ removeUser }}>
        <h2>Main component</h2>
        <UserList users={users} />
      </UsersContext.Provider>
    </>
  );
};

export default Main;
