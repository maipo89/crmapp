import React from 'react';
import Add from "./Add";
import Search from "./Search";
import logo from "../images/logo.png"

function Header() {

    return (
        <div className="header">
                <div className="container-icons">
                    <img className="logo" src={logo} alt="logo"/>
                    <div className="header-options">
                        <h3>Dashboard</h3>
                        <h3>Leads</h3>
                        <h3>Roles</h3>
                        <h3>My Team</h3>
                        <h3>Setting</h3>
                    </div>
                    <div className="search-section">
                        <Add />
                        <Search />
                    </div>
                </div>
        </div>
    );
}

export default Header;