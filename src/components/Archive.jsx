import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglassStart } from '@fortawesome/free-solid-svg-icons'


function Archive() {

    const hourGlass = <FontAwesomeIcon icon={faHourglassStart} />
    return(
        <div className="archive-container">
            <div className="archive">
                <i>{hourGlass}</i>
                <h5>View archived roles</h5>
            </div>
        </div>
    )
}

export default Archive