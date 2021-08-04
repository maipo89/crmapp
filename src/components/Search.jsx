import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Search() {
    const searchIcon = <FontAwesomeIcon icon={faSearch} />
    return(
        <div>
            <div className="search">
                <input placeholder="Search"></input>
                <div className="search-icon">
                    <i>{searchIcon}</i>
                </div>
            </div>
        </div>
    )
}

export default Search