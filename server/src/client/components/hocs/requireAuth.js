import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export default Component => {
  const RequireAuth = props => {
    switch (props.auth) {
      case null:
        return <div>Loading...</div>;
      case false:
        return <Redirect to="/" />;
      default:
        return <Component {...props} />;
    }
  };

  const mapStateToProps = ({ auth }) => ({ auth });

  return connect(mapStateToProps)(RequireAuth);
};
