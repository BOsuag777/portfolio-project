import React from "react";
import olude from "../../logobmt.png";
import { NavLink, Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
            <Link className="navbar-brand" to="/">
                <img className="logo" src={olude} alt="olude..."  />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }}/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                    <NavLink className="nav-link" exact to="/">Home </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About Us</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/services">Services</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}
