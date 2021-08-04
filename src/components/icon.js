

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faClock, faFilter, faCalendarAlt, faSync, faCog } from '@fortawesome/free-solid-svg-icons'

const plusIcon = <FontAwesomeIcon icon={faPlus} />
const clockIcon = <FontAwesomeIcon icon={faClock} />
const filterIcon = <FontAwesomeIcon icon={faFilter} />
const calendarIcon = <FontAwesomeIcon icon={faCalendarAlt} />
const syncIcon = <FontAwesomeIcon icon={faSync} />
const settingIcon = <FontAwesomeIcon icon={faCog} />

    <Icon icon={plusIcon} />
    <Icon icon={clockIcon} />
</div>
<div className="divider">
    <Icon icon={filterIcon} />
    <Icon icon={calendarIcon} />
</div>
<div className="divider">
    <Icon icon={syncIcon} />
    <Icon icon={settingIcon} />
</div>