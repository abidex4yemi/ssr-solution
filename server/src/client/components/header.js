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
      <nav>
        <div className="container">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              React SSR
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/admins">Admin</Link>
              </li>
              <li>{authButton}</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);
