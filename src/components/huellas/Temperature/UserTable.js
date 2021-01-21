import React from 'react';
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
  });

const UserTable=({persons}) => {
const classes = styles;

return (
<div className={classes.contentWrapper}>
        <GridList className={classes.gridList} cellHeight={'auto'} cols={1} >
        <Card>
        <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
        <TextField
                        label="Fecha"
                        id="fecha"                    
                        type="date"
                        className={classes.textField}
                        fullWidth
                        InputLabelProps={{
                          shrink: true,
                        }}
                        margin="normal"
                      />
        </GridItem>
        </GridContainer>
        
            {                
              persons.map((item,key)=>
              
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={3}>
                      <TextField
                        label="Identificación"
                        id="ident"
                        disabled='true'
                        value ={item.ident}
                        fullWidth
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                      <TextField
                        label="Nombre completo"
                        id="name"
                        disabled='true'
                        value = {item.name + " " + item.lastName1 + " " + item.lastName2}
                        fullWidth
                    />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                      <TextField
                       label="Temperatura"
                       id="temperature"
                       fullWidth
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

UserTable.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(UserTable);