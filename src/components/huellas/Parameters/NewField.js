import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import GridContainer from "components/huellas/Person/GridContainer.js";
import GridItem from "components/dashboard/Grid/GridItem.js";
import Card from "components/huellas/Person/Card.js";
//import { makeStyles } from "@material-ui/core/styles";
import CardBody from "components/huellas/Person/CardBody.js";
import MenuItem from '@material-ui/core/MenuItem';

/*const useStyles = makeStyles(() => ({
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
}))*/

export default function NewField ({Field})  {

  //const classes = useStyles();

  const tipos = ["Text","Input","Date"]

  const [fieldName, setFieldName] =useState('')

  const [typeField, setTypeField] =useState(Field.typeField)

      return (  
          
          <GridContainer>
            <Card>
              <CardBody>
                <GridContainer>
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
                            select                    
                            value={typeField}                      
                            onChange={(e) => setTypeField(e.target.value)}
                            fullWidth                           
                          >
                          {tipos.map((item) => (
                           <MenuItem key={item._id} value={item}>
                                {item}
                           </MenuItem>
                          ))}
                          </TextField>
                          </GridItem>
                </GridContainer>        
              </CardBody>
              </Card> 
            </GridContainer>
        
    );

}

