import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';

import { withStyles } from '@material-ui/core/styles';
import TemperatureTable from 'components/huellas/Temperature/TemperatureTable'



const styles = (theme) => ({
  paper: {
    maxWidth: 'auto',
    margin: 'auto',
    overflow: 'hidden',
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  addUser: {
    marginRight: theme.spacing(1),
  },
});

const TemperaturePage=(props)=> {
  const { classes } = props; 
  

  return (
    <Paper className={classes.paper}>
        
      <TemperatureTable />
    </Paper>
  );
}

TemperaturePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemperaturePage);