import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'


function AddPhoto() {
    const cameraRetro = <FontAwesomeIcon icon={faCameraRetro} />
    return (
        <div className="add-photo-container">
            <div className="add-photo">
                <i>{cameraRetro}</i>
                <div>
                        <div className="profile-completeness">
                                <h2>40%</h2>
                                <h3>profile completeness</h3>
                        </div>
                        <h3 className="increase">Add a picture to increase to 60%</h3>
                </div>
            </div>
        </div>
    )
}

export default AddPhoto