import axios from "axios";

export const FETCH_USERS = "fetch_users";

export const fetchUsers = () => dispatch => {
  axios
    .get("https://server-side-rendering-api.herokuapp.com/users")
    .then(res => {
      dispatch({
        type: FETCH_USERS,
        payload: res
      });
    })
    .catch(err => {
      console.log(err);
    });
};
