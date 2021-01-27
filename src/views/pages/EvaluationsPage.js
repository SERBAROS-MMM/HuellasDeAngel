import React, {useState,useEffect,useContext} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TabEvaluation from 'components/huellas/Evaluations/TabEvaluation';
//import {EVALUATIONS} from './../../data/example'
import {HTTP_CONSTANTS} from '../../config/http-constants'
import {requestHttp} from './../../config/http-server'
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import UserData from "components/huellas/Evaluations/UserData"
import {PersonSelectedContext} from './../../contexts/PersonSelectedContext'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  rootP: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
   
  },
  iconButton: {
    padding: 10,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
}));

export default function EvaluationsPage({location={state:{ident:''}}}) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const {setPersonSelected,personSelected } = useContext(PersonSelectedContext)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [ident, setIdent] = useState('')

  const [bandera, setBandera] = useState(false)

  const [personResult, setPersonResult] = useState({})
  const [evaluationsResult, setEevaluationsResult] = useState({})

  const findPersonIdent=async()=>{ 
    if (ident!==''){
    const endpoint=HTTP_CONSTANTS.personOneParameterIdent+ident
    const response=await requestHttp('get',endpoint)
    if (response.response!==null) {
    setPersonResult(response.response)
    setPersonSelected(response.response)
    setBandera(true)
    }
    else {
      setIdent(personSelected.ident)
      setBandera(false)
    }
    } else{
    if (location.state.ident!==''){
      const endpoint=HTTP_CONSTANTS.personOneParameterIdent+location.state.ident
      const response=await requestHttp('get',endpoint)
      if (response.response!==null) {
      setPersonResult(response.response)
      setPersonSelected(response.response)
      setBandera(true)
      }
      else {
        setIdent(personSelected.ident)
        setBandera(false)
      }
    }
  }
}

  const getEvaluations=async()=>{ 
    const endpoint=HTTP_CONSTANTS.evaluations
    const response=await requestHttp('get',endpoint)
    if (response.response!==null) {
      setEevaluationsResult(response.response)
    }
  }

  useEffect(() => {
    
    findPersonIdent()
    getEvaluations()
    return () => {
    }
    // eslint-disable-next-line 
  }, [])

  return (
    
    <div className={classes.root}>

              <Paper className={classes.rootP} xs={12} sm={6} md={4}>
              <InputBase 
                className={classes.input}
                placeholder="Identificación"                  
                value={ident}
                onChange={(e)=>setIdent(e.target.value)}
                inputProps={{ 'aria-label': 'identificacion' }}
              />
              <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={findPersonIdent}>
                <SearchIcon />
              </IconButton>
              </Paper>
           
          {bandera ? 
            <><UserData 
              name={personResult.name} 
              lastName1={personResult.lastName1}
              lastName2={personResult.lastName2}
              ident={personResult.ident}
              birthday={personResult.birthday.substring(10,-1)}          
              age={personResult.age}
              typeIdent={personResult.typeIdent}
              gender={personResult.gender}
              fromSite={personResult.fromSite}
            />
            <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
       { evaluationsResult.map((item,key)=>
          <Tab label= {item.nameEvaluation} {...a11yProps(key)} />
          )
          }
        </Tabs>
      </AppBar>
      { 
          evaluationsResult.map((item,key)=>
          <TabPanel value={value} index={key}>
            <TabEvaluation Steps = {item.Steps}/>
          </TabPanel> 
          )
          }</>: <>
          </>

          } 

      
      </div>
      
  );
}