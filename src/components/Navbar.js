import React from "react";
// impt is shortcut to import propTypes 
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Homies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.about}
                </Link>
              </li>
            </ul>
          </div>
      <div className="form-check form-switch">
  <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode==="light" ? "dark" : "light"}`} htmlFor="flexSwitchCheckDefault">{props.enable}</label>
</div>
        </div>
      </nav>
    </div>
  );
}

// If you set the value here as isRequired then you must pass the value in the component there otherwise it will show error 
Navbar.propTypes = {title : PropTypes.string.isRequired , 
                    about : PropTypes.string.isRequired
                }

// This is the way to pass default props
Navbar.defaultProps = {
    title : "Set Title Here",
    about : "About Text here"
};