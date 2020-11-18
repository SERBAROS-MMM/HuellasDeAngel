import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import avatar from "assets/img/faces/marc.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: '5px 0px'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
}));

const CardBoy=({name,lastname,age,image})=> {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
    <CardMedia
        className={classes.cover}
        image={image}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {lastname}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {age}
          </Typography>
        </CardContent>
      </div>
      
    </Card>
  );
}

export default CardBoy