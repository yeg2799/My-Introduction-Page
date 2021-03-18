
import React from 'react'

const SideBarMenuButton = ({Icon,title}) => {
    return (
        <div className="menu-button">
            <Icon  className="icon"/>
            {title}
        </div>
    )
}

export default SideBarMenuButton
