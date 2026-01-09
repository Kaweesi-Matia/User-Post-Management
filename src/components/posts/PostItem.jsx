import React from "react";

function PostItem({ post }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </div>
  );
}

export default PostItem;
