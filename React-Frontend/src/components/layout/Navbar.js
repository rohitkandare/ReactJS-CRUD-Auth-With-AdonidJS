import React,{useEffect} from "react";

import { Link, NavLink } from "react-router-dom";
const Navbar = () => {

  useEffect(() => {
    console.log('Is User Login',localStorage.getItem('isUser')) 
  })

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" href="/">
        Assignment- Chirpn
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            {
            localStorage.getItem('isUser')==="true" ?
            <li className="nav-item">
              <div className="nav-link" onClick={() => localStorage.clear()}>
               Logout
              </div>
            </li>
            :
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/login">
               Login
              </NavLink>
            </li>
              
            }
          </ul>
        </div>

        <Link className="btn btn-outline-light" to="/users/add">Add User</Link>
      </div>
    </nav>
  );
};

export default Navbar;
