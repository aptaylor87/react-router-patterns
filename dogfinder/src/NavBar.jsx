import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";

function NavBar({ dogs }) {

    const dogNames = dogs.map(dog => dog.name);
    return(
        <nav className="NavBar">
            <NavLink to="/dogs">
                Home
            </NavLink>

            {dogNames.map(name => (
                <NavLink to={`/dogs/${name}`} key={name}>
                    {name}
                </NavLink>
            ))}
        </nav>

        
    )
}

export default NavBar;


