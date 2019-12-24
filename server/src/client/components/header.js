import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ auth }) => {
  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">login</a>
  );

  return (
    <header>
      <div>
        <Link to="/">React SSR</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/admins">Admin</Link>
          </li>
          <li>{authButton}</li>
        </ul>
      </nav>
    </header>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);
