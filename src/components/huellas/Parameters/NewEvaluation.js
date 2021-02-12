import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import GridContainer from "components/huellas/Person/GridContainer.js";
import CardBody from "components/huellas/Person/CardBody.js";
import AddEvaluationIcon from '@material-ui/icons/Add';
import GridItem from "components/dashboard/Grid/GridItem.js";
import NewStep from "components/huellas/Parameters/NewStep"

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
   
  const [Steps, setSteps] =useState('')

  const [bandera, setBandera] = useState(false)

  const [stepsList, setStepsList] =useState([])

  const [nameEvaluation, setNameEvaluation] =useState('')

  const arrStep = []

  const showSteps=()=>{

    for (let i = 0; i < Steps; i++) {
      arrStep.push({
        nameStep: "",
        orderStep: i+1
    })      
    }
    setStepsList(arrStep)
    setBandera(true)    
  }
  
  return (
            <CardBody>
                  <GridContainer>
                    
                    <GridItem xs={12} sm={12} md={3}>
                      <TextField
                        label="Nombre Evaluación"
                        id="NameEvaluation"
                        disabled={bandera}
                        value={nameEvaluation}                      
                        onChange={(e) => setNameEvaluation(e.target.value)}  
                        fullWidth
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                      <TextField
                       label="Número de pasos"
                       id="StepNumber"
                       disabled={bandera}
                       value={Steps}                       
                       onChange={(e) => setSteps(e.target.value)}  
                       fullWidth
                       type="number"
                      
                    />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>                     
                    <IconButton onClick={showSteps}>
                        <AddEvaluationIcon />
                    </IconButton>
                    </GridItem>
                    {bandera ? stepsList.map((item,key)=>
                    <>
                    <NewStep Step={item}/>
                    </>): <>
                    </>
                    
                    }
                    </GridContainer>
                    </CardBody>
  );
}

NewEvaluation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewEvaluation);

