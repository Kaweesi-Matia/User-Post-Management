import axios from "axios";
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE
} from "./postTypes";

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_POSTS_REQUEST });

    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then(response => {
        dispatch({
          type: FETCH_POSTS_SUCCESS,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: FETCH_POSTS_FAILURE,
          payload: error.message
        });
      });
  };
};
