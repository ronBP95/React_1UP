import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar2 = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">🍄1UP🍄</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="#navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample07">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link"  to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"  to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <li className="nav-right">
                            <NavLink className="nav-link"  to="/productivity">Productivity</NavLink>
                        </li>
                    <li className="nav-right">
                            <NavLink className="nav-link"  to="/login">Login</NavLink>
                        </li>
                        {/* <li className="nav-right">
                            <NavLink className="nav-link"  to="/profile">Profile</NavLink>
                        </li> */}
                        <li className="nav-right">
                            <NavLink className="nav-link"  to="/signup">Signup</NavLink>
                        </li>
                    {/* {Add code here} */}
                </div>
            </div>
        </nav>
    );
}

export default Navbar2;
