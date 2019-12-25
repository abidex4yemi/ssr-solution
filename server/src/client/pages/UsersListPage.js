import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

const UsersListPage = props => {
  useEffect(() => {
    props.fetchUsers();
  }, []);

  const renderUsers = () => {
    return props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  };

  return (
    <div className="container">
      <div style={{ marginTop: "150px" }}>
        <h2>All user's</h2>
        <ul>{renderUsers()}</ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const loadData = store => {
  return store.dispatch(fetchUsers());
};

export default {
  component: connect(mapStateToProps, { fetchUsers })(UsersListPage),
  loadData
};
