import axios from "axios";

export const FETCH_USERS = "fetch_users";

export const fetchUsers = () => dispatch => {
  return axios
    .get("https://server-side-rendering-api.herokuapp.com/users")
    .then(res => {
      dispatch({
        type: FETCH_USERS,
        payload: res
      });

      return res;
    })
    .catch(err => {
      console.log(err);
    });
};
