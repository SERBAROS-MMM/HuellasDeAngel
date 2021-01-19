import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridItem from "components/dashboard/Grid/GridItem.js";
import GridContainer from "components/dashboard/Grid/GridContainer.js";
import TextField from '@material-ui/core/TextField';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    
  },
  iconButton: {
    padding: 10,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
}));

export default function ExpasionPanelPaso({Campos = []}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <GridContainer>
        
          <GridItem xs={12} sm={12} md={12}>
          { 
          Campos.map((item,key)=> {
              
            switch(item.typeCampo){
                case 'Text': return(
                    <TextField
                    label={item.nombreCampo}
                    id={key}
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    variant="outlined"
                    />
                        );
                        break;
                case 'Input': return(
                    <TextField
                    label={item.nombreCampo}
                    id={key}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    />
                        )
                        break;  
                case 'Date': return(
                    <TextField
                    label={item.nombreCampo}
                    id={key}                   
                    type="date"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    margin="normal"
                  />
                 )
                 break;      
            }} 
        
        )
    }
            </GridItem>
        
                     
        </GridContainer>
     
    </div>
  );
}