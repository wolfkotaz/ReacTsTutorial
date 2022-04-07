import React, { useContext } from "react";
import { IUser } from "../utils/data";
import UsersContext from "./UserContext";

interface IUserProps {
  user: IUser;
}

const User = ({ user }: IUserProps) => {
  const { id, name, surname } = user;
  const { removeUser } = useContext(UsersContext);

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
