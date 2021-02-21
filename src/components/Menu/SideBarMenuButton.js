
import React from 'react'

import { Link } from 'react-router-dom'


const SideBarMenuButton = ({Icon,to,title}) => {
    return (
        <div className="menu-button">
            <Icon  className="icon"/>
            <Link to={to} style={{color:"#13285E",textDecoration:"none",paddingLeft:"100px"}} >{title}</Link>
        </div>
    )
}

export default SideBarMenuButton
