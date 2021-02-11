import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import ListPlaces from 'components/huellas/Parameters/ListPlaces.js';
import {PLACES} from './../../../data/example.js'
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
import IconButton from '@material-ui/core/IconButton';

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
  addPlace: {
    marginRight: theme.spacing(1),
  },
});

const Places=(props)=> {
  const { classes } = props;

  const [Place, setPlace] =useState('')
  
  const AddPlace=()=>{  
    PLACES.push(Place)
    setPlace('')
  }
  
  return (
    <Paper className={classes.paper}>
      <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs>
              <TextField id="filtro"
                fullWidth
                placeholder="Nombre de lugar de origen"
                value={Place}                
                onChange={(e) => setPlace(e.target.value)}
                InputProps={{
                disableUnderline: true,
                className: classes.searchInput,
                
                }}
              />
            </Grid>
            <Grid item>
              <IconButton 
              variant="contained" 
              color="primary"
              size="large" 
              className={classes.addPlace}  
              onClick={AddPlace}
              >
                <AddCircleSharpIcon fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar> 
      <ListPlaces/> 
    </Paper>
  );
}

Places.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Places);

