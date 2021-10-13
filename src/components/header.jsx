import React from "react";

import AppBar  from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Badge from "@material-ui/core/Badge";
import SearchBar from "material-ui-search-bar";


import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    appbar: {
        
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
      [theme.breakpoints.up("sm")]: {
        zIndex: theme.zIndex.drawer + 1
      }
    },
    rightIcons: {
      marginLeft: theme.spacing(0.5)
    },
    spacer: {
      flexGrow: 1
    },
    toolbar : {
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent: 'space-around',
    },
    search : {
        marginLeft : '35%'
    }
}));

const Header = (props)=>{
    const classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" noWrap>
            Movies
          </Typography>

          <SearchBar
          className={classes.search}
          value='Search'
        />
          <div className={classes.spacer} />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.toggleDarkMode}
            edge="start"
            className={classes.rightIcons}
          >
            {props.darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
  
         
        </Toolbar>
      </AppBar>
    )
}
export default Header; 