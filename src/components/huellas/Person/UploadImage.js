import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((styles) => ({
    input: {
        display: 'none'
    }
}))

const UploadImage = ({onChange}) => {

    const classes = useStyles();

    const handleChange = (e) => {
        const reader = new FileReader();
        
        reader.onload = () =>{
          if(reader.readyState === 2){
 
            onChange(reader.result)
          }
        }
        reader.readAsDataURL(e.target.files[0])
      }
    
    return (
       
            <>
                <input
                    accept="image/*"
                    className={classes.input}
                    id="icon-button-photo"
                    onChange={handleChange}
                    type="file"
                />
                <label htmlFor="icon-button-photo">
                    <IconButton color="primary" component="span">
                        <PhotoCamera />
                    </IconButton>
                </label>
            </>
        )
}

export default UploadImage