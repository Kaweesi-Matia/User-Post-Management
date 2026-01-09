import React from "react";

function UserItem({ user }) {
  return (
    <div style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>
      <strong>{user.name}</strong> — {user.email}
    </div>
  );
}

export default UserItem;
