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

const [hoy, setHoy] = useState('')
const mostrar=false

useEffect(() => {
  
  var f = new Date()
  const fhoy = f.getFullYear() +"-"+ ((f.getMonth() +1)>9?(f.getMonth() +1):'0'+(f.getMonth() +1))+ "-" + ( f.getDate() >9? f.getDate():'0'+f.getDate())
  setHoy(fhoy)
  return () => {}
  }, [])

return (
<div className={classes.contentWrapper}>
        <GridList className={classes.gridList} cellHeight={'auto'} cols={1} >
        <Card>
        <GridContainer>
          
        <GridItem xs={12} sm={12} md={3}>
         <TextField
                       value ={hoy} 
                       label="Fecha"
                        id="fecha"                    
                        type="date"
                        className={classes.textField}
                        fullWidth
                        InputLabelProps={{
                          shrink: true,
                        }}
                        margin="normal"
                       
                        onChange={(e) => setHoy(e.target.value)}
                      />
        </GridItem>
        </GridContainer>
        
            {                
              persons.map((item,key)=>
             
                <CardBody>
                  <GridContainer>
                    {mostrar &&
                  <GridItem  >
                      <TextField
                        label="_id"
                        id={"_id"}
                        value ={item._id}
                        fullWidth
                      />
                    </GridItem>
                    }
                    <GridItem xs={12} sm={12} md={3}>
                      <TextField
                        label="Identificación"
                        id={"ident"+ item.ident}
                        disabled
                        value ={item.ident}
                        fullWidth
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                      <TextField
                        label="Nombre completo"
                        id={"name" + item.ident}
                        disabled
                        value = {item.name + " " + item.lastName1 + " " + item.lastName2}
                        fullWidth
                    />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                      <TextField
                       label="Temperatura"
                       id={"temperature" +item.ident}
                       fullWidth
                       type="number"
                      
                    />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>                     
                    <IconButton>
                        <SaveIcon />
                    </IconButton>
                    </GridItem>
                    </GridContainer>
                    </CardBody>
                )
            }
            </Card>
        </GridList>   
</div>
)
}

TemperatureTable.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(TemperatureTable);