import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo from "../images/logo.png"
import Search from "./Search"
import Add from "./Add"

function HeaderMobile() {
    const hamburgerMenu = <FontAwesomeIcon icon={faBars} />

    const [clicked, setClicked] = useState(false);
    const [menuBar, setMenuBar] = useState({})
    const [showItem, setShowItem] = useState({})
    const [opacitySection, setOpacitySection] = useState({});

    function showSection() {
            setClicked(!clicked);
            setMenuBar( clicked ?
                    {height: "62px", transition: "all ease-in 0.2s"} :
                    {height: "213px", transition: "all ease-in 0.2s"});
            setShowItem(clicked ? {display: "none"} : {display: "flex", opacity: "1", transition: "all 0.4s"})
            setOpacitySection(clicked ?
                    {backgroundColor: "#323644"} 
                    : {backgroundColor: "#323644"})
    }
    return(
        <div style={{...menuBar, ...opacitySection}} className="menu-bar">
            <div className="bar">
                <img className="logo" src={logo} alt="logo"/>
                <i onClick={() => {showSection()}}>{hamburgerMenu}</i>
            </div>
            <hr style={showItem}/>
            <div style={showItem} className="menu-section">
                <ul>
                        <li>Dashboard</li>
                        <li>Leeds</li>
                        <li>Roles</li>
                        <li>My Team</li>
                        <li>Setting</li>
                </ul>
                <div className="search-mobile">
                    <Search />
                    <Add />
                </div>
            </div>
        </div>
    )
}

export default HeaderMobile

