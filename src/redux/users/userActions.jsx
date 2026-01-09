import axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from "./userTypes";

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_USERS_REQUEST });

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        dispatch({
          type: FETCH_USERS_SUCCESS,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: FETCH_USERS_FAILURE,
          payload: error.message
        });
      });
  };
};
