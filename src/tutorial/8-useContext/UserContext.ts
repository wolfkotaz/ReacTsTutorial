import React from "react";

export interface IUserContext {
  removeUser(id: number): void;
}

const defaultValue: IUserContext = {
  removeUser: () => { }
}

const UsersContext = React.createContext<IUserContext>(defaultValue);

export default UsersContext;
