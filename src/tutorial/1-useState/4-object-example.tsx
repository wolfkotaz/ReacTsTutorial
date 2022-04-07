import React, { useState } from "react";

interface IUser {
  name: string;
  surname: string;
  email?: string;
}

const ObjectExample = () => {
  const [user, setUser] = useState<IUser>({
    name: "Jan",
    surname: "Kowalski",
  });

  const handleOnChangeName = () => {
    setUser({ ...user, name: "Grzegorz" });
  };

  const handleOnChangeEverything = () => {
    setUser({
      name: "Anna",
      surname: "Kowalska",
      email: "anna.kowalska@gmail.com",
    });
  };

  return (
    <div>
      <h2>{user.name}</h2>
      <h2>{user.surname}</h2>
      <h2>{user.email}</h2>

      <button type="button" className="btn" onClick={handleOnChangeName}>
        Change name
      </button>

      <button type="button" className="btn" onClick={handleOnChangeEverything}>
        Change everything
      </button>
    </div>
  );
};

export default ObjectExample;
