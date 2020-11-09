import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Layers from "@material-ui/icons/Layers";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });

  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <List className={classes.list}>
          <div className={classes.left}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.huellasdeangel.com/?ref=mkr-footer"
                className={classes.block}
              >
                HUELLAS DE ANGEL
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.instagram.com/tuamigonet5/"
                className={classes.block}
              >
                Tu Amigo Net
              </a>
            </ListItem>
          </div>
          <div className={classes.right}>
            <ListItem className={classes.inlineBlock}>
              <p className={classes.block}>
                Desarrollado por SERBAROS MMM{" "}
                <Layers className={classes.icon} /> Developing Technology &copy;{" "}
                {1900 + new Date().getYear()}
              </p>
            </ListItem>
          </div>
        </List>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
