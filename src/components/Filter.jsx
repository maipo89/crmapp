import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

function Filter(props){
    const arrowIcon = <FontAwesomeIcon icon={faChevronUp} />
    return (
        <div className="filter">
            <div className="container-filter">
                <div className="name-filter">
                    <h3>Name ({props.numberContacts})</h3>
                    <i style={props.isClicked ? null : props.rotate} onClick={props.onClick}>{arrowIcon}</i>
                </div>
                <div className="line"></div>
                <h3>Active</h3>
                <div className="line"></div>
                <h3>Email</h3>
                <div className="line"></div>
                <h3>Phone</h3>
                <div className="line"></div>
            </div>

        </div>
    )
}

export default Filter