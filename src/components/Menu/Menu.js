import React, { useEffect } from 'react'
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

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
    const classes = useStyles();
    const goLink=(e)=>{
        console.log(e.target.textContent)
    }
    return (
        <>
      <form >
      <MenuList className={classes.root} onClick={goLink}>
          <MenuItem><Link to="/profile">Profile</Link></MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
          <MenuItem>Logout</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </form>
        
    
    </>
    )
}

export default Menu
