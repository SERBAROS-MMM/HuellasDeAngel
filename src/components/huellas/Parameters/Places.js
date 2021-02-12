import React, {useState,useEffect} from 'react';
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
import {HTTP_CONSTANTS} from './../../../config/http-constants'
import {requestHttp} from './../../../config/http-server'

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

  const [fromSite, setfromSite] =useState('')

  useEffect(() => {
    getListFromSites()
    return () => {}
  }, [])

  const [fromSiteList, setFromSiteList] =useState([])

  const getListFromSites = async () =>{
    try {

      const endpoint = HTTP_CONSTANTS.fromSites
      const response = await requestHttp('get',endpoint)
      if (response.status === 200) {
        
        setFromSiteList (response.response)
      } 
    }
    catch (err) {
    console.log(err)
    } 
  }

  
  const FromSite= ()=>{  
    
    const data = {
      name: fromSite
    }
    addFromSiteRequest(data)
    
  }

  const addFromSiteRequest = async (data) => {
    try {
      console.log(data)
      const endpoint = HTTP_CONSTANTS.fromSites
      const response = await requestHttp('post',endpoint, data)
      console.log(response)
      if (response.status === 201) {
        setfromSite('')
        getListFromSites()
      } else {
        console.log(response)
      }
      
    } catch (err) {
      console.log(err)
      
    }
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
                value={fromSite}                
                onChange={(e) => setfromSite(e.target.value)}
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
              onClick={FromSite}
              >
                <AddCircleSharpIcon fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar> 
      <ListPlaces fromSiteList={fromSiteList}/> 
    </Paper>
  );
}

Places.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Places);

