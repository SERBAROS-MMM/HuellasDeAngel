import React,{useState,useEffect} from 'react';
import GridList from '@material-ui/core/GridList';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridItem from "components/dashboard/Grid/GridItem.js";
import Card from "components/dashboard/Card/Card.js";
import IconButton from '@material-ui/core/IconButton';
import GridContainer from "components/huellas/Person/GridContainer.js";
import CardBody from "components/huellas/Person/CardBody.js";
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/SaveSharp';
import {HTTP_CONSTANTS} from './../../../config/http-constants'
import {requestHttp} from './../../../config/http-server'
import { Typography } from '@material-ui/core';

const styles = (theme) => ({
    contentWrapper: {
      margin: '0px',
    },
    
    gridList: {
      width: 'auto',
      height: 'auto',
    },
    textField: {
      width: 'auto',
      FullWidth: false,
    },
    textFieldOculto: {
      display: 'none',
    },
  });

const TemperatureTable=() => {
const classes = styles;

var f = new Date()
const fhoy = f.getFullYear() +"-"+ ((f.getMonth() +1)>9?(f.getMonth() +1):'0'+(f.getMonth() +1))+ "-" + ( f.getDate() >9? f.getDate():'0'+f.getDate())

const [listPersons,setListPersons] = useState([])
const [listTemperatures,setListTemperatures] = useState([])
const [day, setDay] = useState(fhoy)

const getPersons=async()=>{
  try {
    const endpoint=HTTP_CONSTANTS.persons
    const response=await requestHttp('get',endpoint)
    setListPersons(response.response)
    getTemperaturesDay()
  } catch (error) {
    console.error('error.getPersons:',error)
  }
}

useEffect(() => {
  getPersons()
  return () => { }
  // eslint-disable-next-line
}, [day])

const getTemperaturesDay = async () =>{

  try {
    const endpoint=HTTP_CONSTANTS.temperatures+'day/'+day+"T00:00:00.000Z"
    const response=await requestHttp('get',endpoint)
    console.log(endpoint,response)
    setListTemperatures(response.response)
  } catch (error) {
    console.error('error.getPersons:',error)
  }
}

useEffect(() => {
  console.log(listTemperatures)
  if(listTemperatures.length>0){
  const auxPersons = listPersons.filter((item,key) => {
    for(let i=0;i<listTemperatures.length;i++)
    {
      
      if(item._id === listTemperatures[i].person)
      {
        return (0)
      }
    }
     return 1
    }
  )

  setListPersons(auxPersons)
  }
  return () => {}
}, [listTemperatures])


const saveTemperature = (e) =>{
  e.preventDefault();
  var identActual = (e.currentTarget.id).substr(3)
  var daySeleccted = new Date (day +"T00:00:00.000Z")
  
  const data = {
    day: daySeleccted,
    temperature: document.getElementById("temperature"+identActual).value,
    person: identActual
  }
  document.getElementById("temperature"+identActual).value=''
  AddTemperaturesRequest(data)
} 

const AddTemperaturesRequest = async (data) =>{
  try {
    const endpoint=HTTP_CONSTANTS.temperatures
    const response=await requestHttp('post',endpoint,data)
    if(response.status===201)
    {
      const auxListPersons = listPersons.filter((item,key) => (
        item._id !== data.person))
       
      setListPersons(auxListPersons)
    }
  } catch (error) {
    console.error('error.getPersons:',error)
  }
}
return (
  <div className={classes.contentWrapper}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
         <TextField
                       value ={day} 
                       label="Fecha"
                        id="fecha"                    
                        type="date"
                        className={classes.textField}
                        fullWidth
                        InputLabelProps={{
                          shrink: true,
                        }}
                        margin="normal"
                        onChange={(e) => setDay(e.target.value)}
                      />
        </GridItem>
        </GridContainer>
        <GridList className={classes.gridList} cellHeight={'auto'} cols={1} >
        <Card>     
            {  listPersons.length>0 ?             
              listPersons.map((item,key)=>
                <CardBody key={key}>
                   <GridContainer>                                     
                    <GridItem xs={12} sm={12} md={3}>
                      <TextField
                        label="Identificación"
                        id={"ident"+ item._id}
                        disabled
                        value ={item.ident}
                        fullWidth
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                      <TextField
                        label="Nombre completo"
                        id={"name" + item._id}
                        disabled
                        value = {item.name + " " + item.lastName1 + " " + item.lastName2}
                        fullWidth
                    />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                      <TextField
                       label="Temperatura"
                       id={"temperature" +item._id}
                       fullWidth
                       type="number"
                      
                    />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>                     
                    <IconButton id={"btn"+item._id} onClick={saveTemperature}>
                        <SaveIcon />
                    </IconButton>
                    </GridItem>
            
                    </GridContainer> 
                    </CardBody>):<Typography>Todos los activos este día, ya tiene las temperaturas ingresadas para este día.</Typography>}
            </Card>
        </GridList>   
  </div>
)
}

TemperatureTable.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(TemperatureTable);