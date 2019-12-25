import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "../actions";
import requireAuth from "../components/hocs/requireAuth";

const AdminsListPage = props => {
  useEffect(() => {
    props.fetchAdmins();
  }, []);

  const renderAdmins = () => {
    return props.admins.map(admin => {
      return (
        <tr key={admin.id}>
          <td>{admin.name}</td>
        </tr>
      );
    });
  };

  return (
    <div className="container">
      <div style={{ marginTop: "100px", textAlign: "center" }}>
        <h3>All admins</h3>
        <table className="striped">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>

          <tbody>{renderAdmins()}</tbody>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = ({ admins }) => ({ admins });

const loadData = store => store.dispatch(fetchAdmins());

export default {
  component: connect(mapStateToProps, { fetchAdmins })(
    requireAuth(AdminsListPage)
  ),
  loadData
};
