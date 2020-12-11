import React from 'react';
import GridList from '@material-ui/core/GridList';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridPerson from './GridPerson.js';


const styles = (theme) => ({
    contentWrapper: {
      margin: '0px',
    },
    
    gridList: {
      width: 'auto',
      height: 350,
    },
  });

const GridHome=({persons}) => {
const classes = styles;

return (
<div className={classes.contentWrapper}>
        <GridList className={classes.gridList} cellHeight={'auto'} cols={1} >
            {                
              persons.map((item,key)=>
                    <GridPerson 
                      key={key} 
                      name={item.name} 
                      lastname1={item.lastName1} 
                      lastname2={item.lastName2} 
                      age={item.age}  
                      ident={item.ident} 
                      typeIdent={item.typeIdent} 
                      gender={item.gender} 
                      image='https://thispersondoesnotexist.com/image'/>
                )
            }            
        </GridList>
          
</div>
)
}

GridHome.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(GridHome);