import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import GridContainer from "components/huellas/Person/GridContainer.js";
import CardBody from "components/huellas/Person/CardBody.js";
import AddEvaluationIcon from '@material-ui/icons/Add';
import GridItem from "components/dashboard/Grid/GridItem.js";

const styles = (theme) => ({
  paper: {
    maxWidth: 'auto',
    margin: 'auto',
    overflow: 'hidden',
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  addPlace: {
    marginRight: theme.spacing(1),
  },
});

const NewEvaluation=(props)=> {

  const [Step, setStep] =useState('')
  
  const AddEvaluation=()=>{  
    /*PLACES.push(Place)
    setPlace('')*/
  }
  
  return (
            <CardBody>
                  <GridContainer>
                    
                    <GridItem xs={12} sm={12} md={3}>
                      <TextField
                        label="Nombre Evaluación"
                        id="NameEvaluation"
                        fullWidth
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                      <TextField
                       label="Número de pasos"
                       id="StepNumber"
                       fullWidth
                       type="number"
                      
                    />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>                     
                    <IconButton>
                        <AddEvaluationIcon />
                    </IconButton>
                    </GridItem>
                    </GridContainer>
                    </CardBody>
  );
}

NewEvaluation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewEvaluation);

