import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import GridItem from "components/dashboard/Grid/GridItem.js";
import GridContainer from "components/dashboard/Grid/GridContainer.js";
import TextField from '@material-ui/core/TextField';
import {HTTP_CONSTANTS} from '../../../config/http-constants'
import {requestHttp} from '../../../config/http-server'
import CardBody from "components/huellas/Person/CardBody.js";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import UserData from "components/huellas/Evaluations/UserData"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 430
  },
  rootP: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  iconButton: {
    padding: 10,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
}));

export default function VerticalTabs() {
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
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="1. Datos del Usuario" {...a11yProps(0)} />
        <Tab label="2.	Motivo de Ingreso" {...a11yProps(1)} />
        <Tab label="3.	Examen Mental" {...a11yProps(2)} />
        <Tab label="4.	Historia Personal y Familiar" {...a11yProps(3)} />
        <Tab label="5.	Antecedentes" {...a11yProps(4)} />
        <Tab label="6.	Valoración por Áreas" {...a11yProps(5)} />
        <Tab label="7. Hipótesis Diagnostica" {...a11yProps(6)} />
        <Tab label="8. Recomendaciones" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
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
        <UserData 
          name={personResult.name} 
          lastName1={personResult.lastName1}
          lastName2={personResult.lastName2}
          ident={personResult.ident}
          birthday={personResult.birthday.substring(10,-1)}          
          age={personResult.age}
          typeIdent={personResult.typeIdent}
          gender={personResult.gender}
          origin={personResult.origin}
        />: <>
      </>
      }
      </TabPanel>
      <TabPanel value={value} index={1}>
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <TextField
                label="Motivo referido en la ficha de ingreso"
                id="Mot_RFIN"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                variant="outlined"
                />
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <TextField
                label="Referido por el Usuario"
                id="Mot_RPUS"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                variant="outlined"
                />
            </GridItem>          
        </GridContainer>     
      </TabPanel>
      <TabPanel value={value} index={2}>
        <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <TextField
                label="Porte y actitud"
                id="name"
                />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <TextField
                label="Atención"
                id="name"
                />
            </GridItem> 
            <GridItem xs={12} sm={12} md={6}>
              <TextField
                label="Conciencia"
                id="name"
                />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <TextField
                label="Orientación"
                id="name"
                />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <TextField
                label="Sensopercepción"
                id="name"
                />
            </GridItem> 
            <GridItem xs={12} sm={12} md={6}>
              <TextField
                label="Memoria"
                id="name"
                />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <TextField
                label="Lenguaje"
                id="name"
                />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <TextField
                label="Pensamiento"
                id="name"
                />
            </GridItem> 
            <GridItem xs={12} sm={12} md={6}>
              <TextField
                label="Afecto"
                id="name"
                />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <TextField
                label="Juicio"
                id="name"
                />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <TextField
                label="Prospección"
                id="name"
                />
            </GridItem> 
            <GridItem xs={12} sm={12} md={6}>
              <TextField
                label="Sueño"
                id="name"
                />
            </GridItem>              
        </GridContainer>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <TextField
                label="Historia Personal y Familiar"
                id="HPF"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                variant="outlined"
                />
            </GridItem>  
        </GridContainer>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <TextField
                label="Antecedentes"
                id="ANTEC"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                variant="outlined"
                />
            </GridItem>  
        </GridContainer>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <TextField
                label="Área Cognitiva / adaptativa"
                id="Mot_RFIN"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                variant="outlined"
                />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <TextField
                label="Área Emocional - Afectiva"
                id="Mot_RPUS"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                variant="outlined"
                />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <TextField
                label="Área Sensorio-motriz"
                id="Mot_RPUS"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                variant="outlined"
                />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <TextField
                label="Área del Lenguaje"
                id="Mot_RPUS"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                variant="outlined"
                />
            </GridItem>          
        </GridContainer>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <TextField
                label="Hipótesis diagnósticas"
                id="HIPDIAG"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                variant="outlined"
                />
            </GridItem>  
        </GridContainer>
      </TabPanel>      
      <TabPanel value={value} index={7}>
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <TextField
                label="Recomendaciones"
                id="RECOM"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                variant="outlined"
                />
            </GridItem>  
        </GridContainer>
      </TabPanel>
    </div>
  );
}