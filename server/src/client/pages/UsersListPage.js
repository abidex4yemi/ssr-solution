import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
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

  const head = () => {
    return (
      <Helmet>
        <title>{`${props.users.length} users loaded`}</title>
        <meta property="og:title" content="Users app" />
      </Helmet>
    );
  };

  return (
    <div className="container">
      {head()}
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

const loadData = store => store.dispatch(fetchUsers());

export default {
  component: connect(mapStateToProps, { fetchUsers })(UsersListPage),
  loadData
};
