import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import GridContainer from "components/huellas/Person/GridContainer.js";
import CardBody from "components/huellas/Person/CardBody.js";
import AddEvaluationIcon from '@material-ui/icons/Add';
import GridItem from "components/dashboard/Grid/GridItem.js";
import { Typography } from '@material-ui/core';
import NewField from "components/huellas/Parameters/NewField"

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



export default function NewStep ({Step})  {

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
    
    console.log(arrField)
    setFieldsList(arrField)
    setBandera(true)    
  }

  const AddEvaluation=()=>{  
    /*PLACES.push(Place)
    setPlace('')*/
  }
      return (  
          
          <GridContainer>                   
                          <GridItem xs={12} sm={12} md={3}>
                            <Typography>{Step.orderStep}</Typography>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                            <TextField
                              label="Nombre paso"
                              id="NameStep"
                              value={stepNewName}                      
                              onChange={(e) => setStepNewName(e.target.value)}
                              fullWidth
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
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
                          <GridItem xs={12} sm={12} md={3}>                     
                          <IconButton onClick={showFields}>
                              <AddEvaluationIcon />
                          </IconButton>
                          </GridItem>
                          {bandera ? fieldsList.map((item,key)=>
                            <>
                            <NewField Field={item}/>
                            </>): <>
                            </>
                            
                            }
            </GridContainer>
        
    );

}

