import React, { useEffect } from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import '../../style/Menu/menu.scss'
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent:'center'
    },
    paper: {
      marginRight: theme.spacing(2),
    },
  
    
  }));
const Menu = () => {

    return (
        <>
      <form >
      <MenuList style={{display:"flex",justifyContent:"center"}}>
          <MenuItem className="menu-link"><Link to="/profile" style={{textDecoration:"none"}}>Profile</Link></MenuItem>
          <MenuItem className="menu-link"><Link to="/profile" style={{textDecoration:"none"}}>Profile</Link></MenuItem>
          <MenuItem className="menu-link"><Link to="/profile" style={{textDecoration:"none"}}>Profile</Link></MenuItem>
          <MenuItem className="menu-link"><Link to="/profile" style={{textDecoration:"none"}}>Profile</Link></MenuItem>
          <MenuItem className="menu-link"><Link to="/profile" style={{textDecoration:"none"}}>Profile</Link></MenuItem>
        </MenuList>
      </form>
        
    
    </>
    )
}

export default Menu
