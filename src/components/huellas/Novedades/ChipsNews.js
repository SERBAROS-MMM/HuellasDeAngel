import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import TagFacesIcon from '@material-ui/icons/TagFaces';

const useStyles = makeStyles((theme) => ({
  
  
}));

export default function ChipsNews({boy,onDeleted}) {
  const classes = useStyles();

  const handleDelete = () => {
    onDeleted(boy)
  };

  return (    
          
            <Chip
              label={boy.label}
              onDelete={handleDelete}              
            />
  );
}