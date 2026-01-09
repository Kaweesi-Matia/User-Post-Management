import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/users/userActions";
import UserItem from "./UserItem";

function UserList() {
  const dispatch = useDispatch();
  const userState = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (userState.loading) return <p>Loading users...</p>;
  if (userState.error) return <p>{userState.error}</p>;

  return (
    <div>
      <h2>Users</h2>
      {userState.users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;
