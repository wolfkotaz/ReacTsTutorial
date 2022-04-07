import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import usersData, { IUser } from "../utils/data";

const UserList = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    // Fetch data via fetch or axios
    setUsers(usersData);
  }, []);

  return (
    <>
      {users.map((user: IUser) => {
        const { id, name } = user;

        return (
          <div key={id} className="user">
            <h4>{name}</h4>
            <Link to={`/user/${id}`} className="btn-link">
              Read more
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default UserList;
