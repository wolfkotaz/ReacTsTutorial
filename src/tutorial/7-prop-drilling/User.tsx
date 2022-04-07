import React from "react";
import { IUser } from "../utils/data";

interface IUserProps {
  user: IUser;
  removeUser(id: number): void;
}

const User = ({ user, removeUser }: IUserProps) => {
  const { id, name, surname } = user;

  return (
    <div className="user">
      <h4>{id}</h4>
      <h4>{name}</h4>
      <h4>{surname}</h4>
      <h4 onClick={() => removeUser(id)}>✕</h4>
    </div>
  );
};

export default User;
