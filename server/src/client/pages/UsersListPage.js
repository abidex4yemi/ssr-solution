import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

const UsersListPage = props => {
  useEffect(() => {
    props.fetchUsers();
  }, []);

  const renderUsers = () => {
    return props.users.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.name}</td>
        </tr>
      );
    });
  };

  return (
    <div className="container">
      <div style={{ marginTop: "100px", textAlign: "center" }}>
        <h3>All user's</h3>
        <table className="striped">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>

          <tbody>{renderUsers()}</tbody>
        </table>
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
