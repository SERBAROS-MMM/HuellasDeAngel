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



export default function NewField ({Field})  {

  const [fieldName, setFieldName] =useState('')

  const [typeField, setTypeField] =useState(Field.typeField)

      return (  
          
          <GridContainer>                   
                          <GridItem xs={12} sm={12} md={3}>
                            <Typography>{Field.orderField}</Typography>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                            <TextField
                              label="Nombre campo"
                              id="NameField"
                              value={fieldName}                      
                              onChange={(e) => setFieldName(e.target.value)}
                              fullWidth
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={3}>
                            <TextField
                            label="Tipo"
                            id="TypeField"                            
                            value={typeField}                      
                            onChange={(e) => setTypeField(e.target.value)}
                            fullWidth                           
                          />
                          </GridItem>
            </GridContainer>
        
    );

}

