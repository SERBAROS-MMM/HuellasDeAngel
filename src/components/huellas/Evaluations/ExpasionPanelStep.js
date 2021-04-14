import React from 'react';
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

const ExpasionPanelStep = ({Fields = []}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          { 
          Fields.map((item,key) => {              
            switch (item.typeField) {
              case 'Text': return(
                <TextField key={key}
                  label={item.nameField}
                  id={item.nameField}
                  fullWidth
                  margin="normal"
                  multiline
                  rows={4}
                  variant="outlined"
                />
              )
              case 'Input': return(
                <TextField
                  label={item.nameField}
                  id={item.nameField}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
              )
              case 'Date': return(
                <TextField
                  label={item.nameField}
                  id={item.nameField}                   
                  type="date"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                />
              )
              default : return(
              <>
                {"Tipo Field no definido"}
              </>
              )
            }
          })
        }
       </GridItem>  
      </GridContainer>
    </div>
  );
}

export default ExpasionPanelStep