import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import GridHome from 'components/huellas/Home/GridHome.js';
import {HTTP_CONSTANTS} from '../../../config/http-constants'
import {requestHttp} from '../../../config/http-server'


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

const Buscar=(props)=> {
  const { classes } = props;
  
  const goAddPerson=()=>{    
    window.location.href = '/admin/agregarPersona'
  }

  const [persons, setPersons] = useState({})

  const [existPersons, setExistPersons] = useState(false)

  const [filterPersons, setFilterPersons] = useState("")
  
  const getPersons=async()=>{
      try {
        const endpoint=HTTP_CONSTANTS.persons
        const response=await requestHttp('get',endpoint)
        setPersons(response.response)
      } catch (error) {
        console.error('error.getPersons:',error)
      }
  }

  const getPersonsFiltered = async () =>{
      const endpoint=HTTP_CONSTANTS.personsfilter+filterPersons
      const response=await requestHttp('get',endpoint)
      console.log(response)
      setPersons(response.response)
  }

  const getFilterPersons=async()=>{
    try { 
      if(filterPersons !==''){ 
        await getPersonsFiltered()
      }else{
        await getPersons()
      }
    } catch (error) {
      console.error('error.getFilterPersons:',error)      
    }
}

  useEffect(() => {    

    getFilterPersons()
    return () => {}
    }, [filterPersons]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (persons.length >0){
        setExistPersons(true)
    }else{
      setExistPersons(false)
    }
    return () => {}
    }, [persons])

    const reloadPersons=()=>{
        setFilterPersons('')
    }

  return (
    <Paper className={classes.paper}>
      <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon className={classes.block} color="inherit" />
            </Grid>
            <Grid item xs>
              <TextField id="filtro"
                fullWidth
                value={filterPersons}
                onChange={(e)=>setFilterPersons(e.target.value)}
                placeholder="Buscar por nombre, identificación, comisaría..."
                InputProps={{
                disableUnderline: true,
                className: classes.searchInput,
                
                }}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" className={classes.addUser} onClick={goAddPerson}>
                Agregar
              </Button>
              <Tooltip title="Reload">
                <IconButton onClick={reloadPersons}>
                  <RefreshIcon className={classes.block} color="inherit" />        
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>     
     {existPersons && <GridHome persons={persons}/>}
    </Paper>
  );
}

Buscar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Buscar);

