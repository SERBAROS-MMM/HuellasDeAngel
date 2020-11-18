import React, {useState,useEffect} from 'react';
import GridList from '@material-ui/core/GridList';
import CardBoy from "components/huellas/CardBoy.js";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridItem from 'components/dashboard/Grid/GridItem';
import {BOYS} from '../../data/example.js'

const styles = (theme) => ({
    contentWrapper: {
      margin: '10px',
    },
    gridList: {
      width: 'auto',
      height: 350,
    },
  });

const GridHome=(props) => {
const { classes } = props;

const [persons, setPersons] = useState([])

const [existPersons, setExistPersons] = useState(false)

const getPersons=()=>{
    setPersons(BOYS)    
}

useEffect(() => {
    getPersons()
    return () => {}
}, [])

useEffect(() => {
    if (persons.length >0){
        setExistPersons(true)
    }
    return () => {}
}, [persons])

return (
<div className={classes.contentWrapper}>
        <GridList className={classes.gridList} cellHeight={'auto'} cols="1">
            {
              existPersons &&  
              persons.map((item,key)=>
              
                <GridItem key={key}>

                    <CardBoy name={item.name} lastname={item.lastname} age={item.age} image={item.image}/>

                </GridItem>
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