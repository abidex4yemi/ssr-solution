export const FETCH_USERS = "fetch_users";

export const fetchUsers = () => (dispatch, getState, api) => {
  return api
    .get("/users")
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

export const FETCH_CURRENT_USER = "FETCH_CURRENT_USER";

export const fetchCurrentUser = () => (dispatch, getState, api) => {
  return api
    .get("/current_user")
    .then(res => {
      dispatch({
        type: FETCH_CURRENT_USER,
        payload: res
      });

      return res;
    })
    .catch(err => {
      console.log(err);
    });
};
