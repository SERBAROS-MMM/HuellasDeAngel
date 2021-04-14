import React,{useEffect,useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';


// core components
import GridItem from "components/dashboard/Grid/GridItem.js";
import Card from "components/dashboard/Card/Card.js";
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ModifyIcon from '@material-ui/icons/Edit';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from 'react-router-dom'
import {PersonSelectedContext} from './../../../contexts/PersonSelectedContext'

const useStyles = makeStyles(() => ({
 
  cardPerson: {
    display: 'flex',
    flexDirection: 'row',
  }
}));


export default function GridPerson({_id,name,lastname1,lastname2,age,image,typeIdent,ident,gender,fromSite}) {
  const classes = useStyles();
  const {setPersonSelected } = useContext(PersonSelectedContext)
  useEffect(() => {
    setPersonSelected({_id,name,lastname1,lastname2,age,image,typeIdent,ident,gender,fromSite}) 
    return () => {
    }
    // eslint-disable-next-line
  }, [])
  
 
  return (
  <div >
    <GridItem  >
      <Card className={classes.cardPerson} xs={12} sm={12} md={12} style={{margin:"10px 0px 0px 0px"}} > 
        <img
          style={{ height: "200px", width: "200px"}} alt={image}
          src={image} />            
        <CardContent >
          <Typography>
            {name} 
          </Typography>
          <Typography >
            {lastname1} {lastname2}
          </Typography>
          <Typography >
            {typeIdent} {ident} 
          </Typography>
          <Typography >
            {age} {gender}
          </Typography>
          <Typography >
            {fromSite}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography>
            Resumen
          </Typography>
          <Typography>
              Lorem ipsum dolor sit amet,<br></br> consectetur adipisicing elit. 
          </Typography>
        </CardContent>
        <CardContent >  
          <Link 
          to={{
            pathname: '/admin/evaluaciones',
            state: {ident}
          }}>
          <IconButton >
            <SearchIcon /> Evaluaciones
          </IconButton>
          </Link> 
          <IconButton >
            <ModifyIcon /> Detalles
          </IconButton>
          <IconButton >
            <AssignmentIcon /> Novedades
          </IconButton>
        </CardContent>
      </Card>
    </GridItem>
  </div>
  )}