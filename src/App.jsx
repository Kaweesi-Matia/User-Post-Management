import React from "react";
import UserList from "./components/users/UserList";
import PostList from "./components/posts/PostList";
import { Provider } from "react-redux";
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div style={{ padding: "20px" }}>
        <h1>User and  Post Management Dashboard</h1>
        <UserList />
        <hr />
        <PostList />
      </div>
    </Provider>
  );
}

export default App;
