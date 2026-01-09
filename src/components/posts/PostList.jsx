import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/posts/postActions";
import PostItem from "./PostItem";

function PostList() {
  const dispatch = useDispatch();
  const postState = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (postState.loading) return <p>Loading posts...</p>;
  if (postState.error) return <p>{postState.error}</p>;

  return (
    <div>
      <h2>Posts</h2>
      {postState.posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
