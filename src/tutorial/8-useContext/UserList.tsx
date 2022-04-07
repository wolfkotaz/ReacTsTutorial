import React from "react";
import { IUser } from "../utils/data";
import User from "./User";

interface IUserListProps {
  users: IUser[];
}

const UserList = ({ users }: IUserListProps) => {
  return (
    <>
      {users.map((user: IUser) => {
        return <User key={user.id} user={user} />;
      })}
    </>
  );
};

export default UserList;
