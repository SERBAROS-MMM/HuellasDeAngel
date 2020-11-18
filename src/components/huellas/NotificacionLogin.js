import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import SnackbarContent from "components/kit/Snackbar/SnackbarContent.js";
import Clearfix from "components/kit/Clearfix/Clearfix.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/notificationsStyles.js";

const useStyles = makeStyles(styles);

export default function SectionNotifications() {
  const classes = useStyles();
  return (
    <div className={classes.section} id="notifications">
      <SnackbarContent
        message={
          <span>
            <b>Error: </b>Usuario o contraseña incorrectos
          </span>
        }
        close
        color="danger"
        icon="info_outline"
      />
      <Clearfix />
    </div>
  );
}
