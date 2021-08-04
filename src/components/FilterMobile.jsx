import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

function FilterMobile(props){
    const arrowIcon = <FontAwesomeIcon icon={faChevronUp} />
    return(
        <div className="filter">
            <div className="container-filter">
                <i style={props.isClicked ? null : props.rotate} onClick={props.onClick}>{arrowIcon}</i>
            </div>
        </div>
    )
}

export default FilterMobile