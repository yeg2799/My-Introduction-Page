
import React from 'react'

import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

const SideBarMenuButton = ({Icon,to,title}) => {
    return (
        <div className="menu-button">
            <Icon style={{color:"#13285E"}}/>
            <Link to={to} style={{color:"#13285E",textDecoration:"none"}}>{title}</Link>
        </div>
    )
}

export default SideBarMenuButton
