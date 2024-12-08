import React from "react";
import './Header.css';
import { NavLink } from "react-router-dom";
const Header=()=>{
    return(
        <> 
        <div className="headerContainer">
        <div className="companyName"></div>
            <nav className="navItems">
                <NavLink to="/home" ><div className="navItem">Home</div></NavLink>
                <NavLink to="/aboutUs"><div className="navItem">About Us</div></NavLink>
                <NavLink to="/services"><div className="navItem">Services</div></NavLink>
                <NavLink to="/whyWe"><div className="navItem">Why We</div></NavLink>
                <NavLink to="/carrer"><div className="navItem">Carrer</div></NavLink>
                <NavLink to="/contact"><div className="navItem">Contact</div></NavLink>
            </nav>
        </div>
        </>
    );
}
export default Header;