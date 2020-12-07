import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import DeleteIcon from '@material-ui/icons/Delete';
import ModifyIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: '5px 0px',
    justifyContent: 'space-around',
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  body: {
    width: 151,
  },
  button: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const CardBoy=({name,lastname,age,image})=> {
  const classes = useStyles();
 // const theme = useTheme();

  return (
    <Card className={classes.root}>
      
    <CardMedia
        className={classes.cover}
        image={image}
        title="Live from space album cover"
      />

    <CardContent className={classes.content} >
      <Typography component="h5" variant="h5">
        {name} {lastname}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        Comisaría 1
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        {age} años
      </Typography>
    </CardContent>

    <CardContent className={classes.content}>
      <Typography component="h5" variant="h5">
        Resumen
      </Typography>
      <Typography variant="body1" color="textSecondary" component={'div'} gutterBottom>
        <div className={classes.body}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur.
        </div>
      </Typography>
    </CardContent>

    <CardContent className={classes.content} >   
    <div className={classes.body}>
      <IconButton aria-label="search">
        <SearchIcon /> <h5> Ver detalles</h5>
      </IconButton>

      <IconButton aria-label="modify">
        <ModifyIcon /> <h5> Modificar</h5>
      </IconButton>

      <IconButton aria-label="delete">
        <DeleteIcon /> <h5> Eliminar</h5>
      </IconButton>
    </div>
    </CardContent>
      
    </Card>
  );
}

export default CardBoy