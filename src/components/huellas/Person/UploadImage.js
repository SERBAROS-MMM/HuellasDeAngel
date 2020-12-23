import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import imageCompression from 'browser-image-compression'

const useStyles = makeStyles((styles) => ({
    input: {
        display: 'none'
    }
}))

const UploadImage = ({onChange}) => {

    const classes = useStyles();

    const handleChange = async (e) => {

        const imgBlob =await compressImage(e.target.files[0])
        
        const blobUrl = URL.createObjectURL(imgBlob)
        //console.log(blobUrl)
        onChange(blobUrl)
        /*const reader = new FileReader();
        
        reader.onload = () =>{
          if(reader.readyState === 2){
            console.log(reader.result)
            //onChange(reader.result)
          }
        }
        reader.readAsDataURL(e.target.files[0])*/
      }

    const compressImage = async (img) =>{

        console.log('originalFile instanceof Blob', img instanceof Blob)// true
        console.log(`originalFile size ${img.size / 1024 / 1024} MB`)
        
        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            useWebWorker: true
          }
        
          try {
            const compressedFile = await imageCompression(img, options);
            //console.log('compressedFile instanceof Blob', compressedFile instanceof Blob) // true
           // console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`) // smaller than maxSizeMB
         
            return compressedFile // write your own logic
          } catch (error) {
            console.log(error)
            return img
          }
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