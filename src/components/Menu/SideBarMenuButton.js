
import React from 'react'
import { Link } from 'react-router-dom'
const SideBarMenuButton = ({Icon,to,title}) => {
    return (
        <div className="menu-button">
            <Icon  className="icon"/>
            <Link to={to}  className="menu-link" >{title}</Link> 
        </div>
    )
}

export default SideBarMenuButton
