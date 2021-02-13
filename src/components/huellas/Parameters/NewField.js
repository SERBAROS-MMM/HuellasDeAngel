import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import GridContainer from "components/huellas/Person/GridContainer.js";
import GridItem from "components/dashboard/Grid/GridItem.js";
import { Typography } from '@material-ui/core';

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

