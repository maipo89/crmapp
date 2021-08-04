import React from "react"

function Member(props) {
    return (
        <div className="member">
            <img src={props.image} alt="member-pic" />
            <h5>{props.name}</h5>
        </div>
    )
}

export default Member