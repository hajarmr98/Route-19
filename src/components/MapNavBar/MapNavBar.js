import React from 'react';
import './MapNavBar.css'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Profile from '../ProfileMenu/Profile.js'
import AsideMenu from '../AsideMenu/AsideMenu.js'
import MenuDrop from '../MenuDrop/MenuDrop.js'
// import '../../../public/images/'

  
const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: '#fafbfc',
      color: 'blue',
      fontSize: '#0065ff',
      boxShadow: '0px 2px 2px rgba(0, 82, 204, 0.24)'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      paddingRight: '10px'
    },
    menuDrop: {
      margin: '8.75% 0% 0% 20%'
    }
  }));
  
  export default function MenuAppBar() {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleChange = (event) => {
      setAuth(event.target.checked);
    };
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div className={classes.root}>
        {/* <FormGroup>
          <FormControlLabel
            control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
            label={auth ? 'Logout' : 'Login'}
          />
        </FormGroup> // este es un componente del tipo on-off*/} 
        <AppBar position="static" className={classes.root} id="AppBar">
          <Toolbar>
            <Typography variant="h6" className={classes.title} id="appLogo">
              {/* Logo */}
            </Typography>
            {auth && (
              <div className="Right">
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <img src="./images/LoggedLogo.svg" alt="menu" className="MenuLogo"/>
                </IconButton>
              
                
                {/* <Menu
                  id="menu-appbar"
                  className={classes.menuDrop}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                > */}
                  {/* <div className={classes.menuDrop}>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                  </div>
                </Menu> */}
                <p className="MenuLabel">Menú</p>
                {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton> */}
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }

