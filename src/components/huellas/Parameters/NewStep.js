import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import GridContainer from "components/huellas/Person/GridContainer.js";
import AddEvaluationIcon from '@material-ui/icons/Add';
import GridItem from "components/dashboard/Grid/GridItem.js";
import NewField from "components/huellas/Parameters/NewField"
import Card from "components/huellas/Person/Card.js";
import CardHeader from "components/huellas/Person/CardHeader.js";
import { makeStyles } from "@material-ui/core/styles";
import CardBody from "components/huellas/Person/CardBody.js";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((styles) => ({
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
}))

export default function NewStep ({Step})  {

  const classes = useStyles();

  const [Fields, setField] =useState('')

  const [bandera, setBandera] = useState(false)

  const [fieldsList, setFieldsList] =useState([])

  const [stepNewName, setStepNewName] =useState('')

  const arrField = []

  const showFields=()=>{
    for (let i = 0; i < Fields; i++) {
      arrField.push({
        nameField: "",
        typeField: "text",
        orderField: i+1
    })      
    }
    setFieldsList(arrField)
    setBandera(true)    
  }

  
      return (  
        
          <GridContainer>
              <Card>
              <GridItem xs={12} sm={12} md={12}>                          
                          <CardHeader color="primary">                            
                            <h4 className={classes.cardTitleWhite}>{Step.orderStep}. {stepNewName}</h4>                            
                          </CardHeader>
                </GridItem>
                <CardBody>
                <GridContainer>       
                          <GridItem xs={12} sm={12} md={5}>
                            <TextField
                              label="Nombre paso"
                              id="NameStep"
                              disabled={bandera}
                              value={stepNewName}                      
                              onChange={(e) => setStepNewName(e.target.value)}
                              fullWidth
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={2}>
                            <TextField
                            label="Número de campos"
                            id="FieldNumber"
                            disabled={bandera}
                            value={Fields}                       
                            onChange={(e) => setField(e.target.value)}
                            fullWidth
                            type="number"                            
                          />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={5}>                     
                          <IconButton onClick={showFields}>
                              <AddEvaluationIcon />
                          </IconButton>
                          </GridItem>
                          </GridContainer>
                          {bandera ? fieldsList.map((item,key)=>
                            <>
                            <NewField Field={item}/>
                            </>): <>                                                      
                            </>
                            }
                            {bandera &&
                            <>
                            <Button variant="contained" color="primary" className={classes.addNews2}>
                              Agregar
                            </Button>
                            </>
                            }
            </CardBody>   
            </Card>
            </GridContainer>
        
    );

}

