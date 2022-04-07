import React, { useEffect, useState } from "react";
import usersData, { IUser } from "../utils/data";
import { Link, useParams } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const { id } = useParams<string>();

  useEffect(() => {
    if (!id) return;

    const newUser = usersData.find((user) => user.id === parseInt(id));

    if (newUser) {
      setUser(newUser);
    }
  }, [id]);

  return (
    <>
      {user && (
        <>
          <div className="user">
            <h4>{user.name}</h4>
            <h4>{user.surname}</h4>
          </div>

          <Link to={"/users"} className="btn-link">
            Go back
          </Link>
        </>
      )}
    </>
  );
};

export default User;
