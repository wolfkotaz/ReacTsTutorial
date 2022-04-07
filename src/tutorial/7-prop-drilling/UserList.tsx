import React from "react";
import { IUser } from "../utils/data";
import User from "./User";

interface IUserListProps {
  users: IUser[];
  removeUser(id: number): void;
}

const UserList = ({ users, removeUser }: IUserListProps) => {
  return (
    <>
      {users.map((user: IUser) => {
        return <User key={user.id} user={user} removeUser={removeUser} />;
      })}
    </>
  );
};

export default UserList;
