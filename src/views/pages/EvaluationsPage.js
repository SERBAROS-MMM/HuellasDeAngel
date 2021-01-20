import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TabEvaluation from 'components/huellas/Evaluations/TabEvaluation';
import {EVALUATIONS} from './../../data/example'
import {HTTP_CONSTANTS} from '../../config/http-constants'
import {requestHttp} from './../../config/http-server'
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import UserData from "components/huellas/Evaluations/UserData"
import GridItem from "components/huellas/Person/GridItem.js";
import GridContainer from "components/huellas/Person/GridContainer.js";

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
    width: 'auto',
  },
  iconButton: {
    padding: 10,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
}));

export default function EvaluationsPage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [ident, setIdent] = useState('')

  const [bandera, setBandera] = useState(false)

  const [personResult, setPersonResult] = useState({})

  const findPersonIdent=async()=>{ 
    const endpoint=HTTP_CONSTANTS.personOneParameterIdent+ident
    const response=await requestHttp('get',endpoint)
    console.log(response)
    if (response.response!==null) {
    setPersonResult(response.response)
    setBandera(true)
    }
    else {
      setIdent('')
      setBandera(false)
    }
  }

  return (
    
    <div className={classes.root}>

              <Paper className={classes.rootP}>
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
              origin={personResult.origin}
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
       { EVALUATIONS.map((item,key)=>
          <Tab label= {item.nombreEvaluacion} {...a11yProps(key)} />
          )
          }
        </Tabs>
      </AppBar>
      { 
          EVALUATIONS.map((item,key)=>
          <TabPanel value={value} index={key}>
            <TabEvaluation Pasos = {item.Pasos}/>
          </TabPanel> 
          )
          }</>: <>
          </>

          } 

      
      </div>
      
  );
}