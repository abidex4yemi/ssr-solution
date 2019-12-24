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
