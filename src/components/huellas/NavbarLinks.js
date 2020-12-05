import React from "react"
import classNames from "classnames"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles"
import MenuItem from "@material-ui/core/MenuItem"
import MenuList from "@material-ui/core/MenuList"
import Grow from "@material-ui/core/Grow"
import Paper from "@material-ui/core/Paper"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"
import Hidden from "@material-ui/core/Hidden"
import Poppers from "@material-ui/core/Popper"
import Divider from "@material-ui/core/Divider"
// @material-ui/icons
import Person from "@material-ui/icons/Person"

// core components

import Button from "components/dashboard/CustomButtons/Button.js"

import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js"

const useStyles = makeStyles(styles);

export default function NavbarLinks() {
  const classes = useStyles();
  
  const [openProfile, setOpenProfile] = React.useState(null)
  
  const handleClickSettings = event => {
  };

  const handleClickAway = event => {
  };

  const handleClickMenuPerfil = event => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);

    } else {
      setOpenProfile(event.currentTarget);
     
    }
  };

  const handleCloseSession = () => {
    window.location.href = '/auth/login'
  };

  const handleShowPerfil = () => {
    window.location.href = '/admin/user'
  };

  return (
    <div>
      <div className={classes.manager}>
        
        <Button
          color={window.innerWidth > 959 ? "transparent" : "white"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          aria-owns={openProfile ? "profile-menu-list-grow" : null}
          aria-haspopup="true"
          onClick={handleClickMenuPerfil}
          className={classes.buttonLink}
        >
          
          <Person className={classes.icons} />
          <Hidden mdUp implementation="css">
            <p className={classes.linkText}>Perfil</p>
          </Hidden>
        </Button>
        <Poppers
          open={Boolean(openProfile)}
          anchorEl={openProfile}
          transition
          disablePortal
          className={
            classNames({ [classes.popperClose]: !openProfile }) +
            " " +
            classes.popperNav
          }
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="profile-menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom"
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClickAway}>
                  <MenuList role="menu">
                    <MenuItem
                      onClick={handleShowPerfil}
                      className={classes.dropdownItem}
                    >
                      Perfil
                    </MenuItem>
                    <MenuItem
                      onClick={handleClickSettings}
                      className={classes.dropdownItem}
                    >
                      Configuración
                    </MenuItem>
                    <Divider light />
                    <MenuItem
                      onClick={handleCloseSession}
                      className={classes.dropdownItem}
                    >
                      Cerrar sesión
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Poppers>
      </div>
    </div>
  );
}