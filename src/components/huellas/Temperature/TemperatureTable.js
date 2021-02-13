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

const TemperatureTable=({persons}) => {
const classes = styles;

var f = new Date()
const fhoy = f.getFullYear() +"-"+ ((f.getMonth() +1)>9?(f.getMonth() +1):'0'+(f.getMonth() +1))+ "-" + ( f.getDate() >9? f.getDate():'0'+f.getDate())

const [day, setDay] = useState(fhoy)
const [temperatures, setTemperatures] = useState([])
const [listPersons,setListPersons] = useState(persons)


useEffect(() => {
  
  getTemperaturesDay()

  return () => { }
}, [day])

const getTemperaturesDay = async () =>{

  try {
    const endpoint=HTTP_CONSTANTS.temperatures+'day/'+day+"T00:00:00.000Z"
    const response=await requestHttp('get',endpoint)
    const temperaturesResult = response.response
   // setTemperatures(temperaturesResult)
    if(temperaturesResult.length==0)
    {
      console.log('sin f')
      setListPersons(persons)
    }else{
      console.log('con f')
      console.log(listPersons,temperaturesResult)
      
      const auxPersons = listPersons.filter((item,key) => {
        for(let i=0;i<temperaturesResult.length;i++)
        {
          console.log(item._id+" "+temperaturesResult[i].person)
          if(item._id === temperaturesResult[i].person)
          {
            return (0)
          }
        }
         return 1
        }
      )
      
      console.log(auxPersons)
      
      setListPersons(auxPersons)
    }
  } catch (error) {
    console.error('error.getPersons:',error)
  }
}


const saveTemperature = (e) =>{
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
        console.log(auxListPersons)
      setListPersons(auxListPersons)
    }
  } catch (error) {
    console.error('error.getPersons:',error)
  }
}

return (
<div className={classes.contentWrapper}>
        <GridList className={classes.gridList} cellHeight={'auto'} cols={1} >
        <Card>
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
        
            {               
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
                    </CardBody>)}
            </Card>
        </GridList>   
</div>
)
}

TemperatureTable.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(TemperatureTable);