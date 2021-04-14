import React,{useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/huellas/Person/GridItem.js";
import GridContainer from "components/huellas/Person/GridContainer.js";
import CardBody from "components/huellas/Person/CardBody.js";
import TextField from '@material-ui/core/TextField';
import Card from "components/huellas/Person/Card.js";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(() => ({
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  input: {
    display: 'none'
},
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "1px",
    textDecoration: "none"
  },
  textField: {
    width: 'auto',
    FullWidth: false,
  },
  root: {
    flexGrow: 10,
    height: 100,
  },
  hidden: {
    display: "none",
  },
  importLabel: {
    color: "black",
  },
  itemAdd:{
    margin:'20px 0px 20px 0px'
  }
}));

export default function UserData({name,lastName1,lastName2,ident,birthday,age,typeIdent,gender,fromSite}) {
  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <div>
      
      <ExpansionPanel expanded={expanded === 'panelDatosBasicos'} onChange={handleChange('panelDatosBasicos')}>
          <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={"panelDatosBasicosbh-content"}
                    id={"panelDatosBasicosbh-header"}
        >
          <Typography className={classes.heading}>Datos básicos</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Card>
        <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      <TextField
                        label="Nombre"
                        id="name"
                        disabled='true'
                        value ={name}
                        fullWidth
                        margin="normal"
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <TextField
                        label="1er. Apellido"
                        id="lastname1"
                        disabled='true'
                        value ={lastName1}
                        fullWidth
                        margin="normal"
                    />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <TextField
                       label="2do. Apellido"
                       id="lastname2"
                       disabled='true'
                       value ={lastName2}
                       fullWidth
                       margin="normal"
                    />
                    </GridItem>
                    </GridContainer>
                    <GridContainer>
                    <GridItem xs={12} sm={12} md={4} >
                      <TextField
                        label="No. Identificacion"
                        id="ident"
                        disabled='true'
                        value ={ident}
                        fullWidth
                        margin="normal"
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} style={{textAlign: 'left'}}>
                      <TextField
                        label="Fecha de nacimiento"
                        id="birthday"
                        disabled='true'
                        value ={birthday}
                        fullWidth
                        margin="normal"                        
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                    <TextField
                      label="Edad"
                      id="age"
                      disabled='true'
                      fullWidth
                      margin="normal"
                      value ={age}
                    />
                    </GridItem>
                    </GridContainer>
                    <GridContainer style={{textAlign: 'left',marginTop:'16px'}}>
                  <GridItem xs={12} sm={12} md={4} >
                    <TextField
                        label=" Tipo Identificacion"
                        id="gender"
                        disabled='true'
                        value ={typeIdent==='RC'?'Registro Civil':(
                                typeIdent==='TI'?'Tarjeta Identidad':(
                                typeIdent==='CC'?'Cedula Ciudadania':(
                                typeIdent==='PA'?'Pasaporte':('No Definido')
                        )))}
                        fullWidth
                        margin="normal"
                      />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>                
                    <TextField
                        label="Sexo"
                        id="gender"
                        disabled='true'
                        value ={gender==='FEM'?'Femenino':'Masculino'}
                        fullWidth
                        margin="normal"
                      />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>                  
                  <TextField
                        label="Lugar Origen"
                        id="fromSite"
                        disabled='true'
                        value ={fromSite.name}
                        fullWidth
                        margin="normal"
                      />
                  </GridItem>
                  </GridContainer>
                </CardBody>
                </Card>
        </ExpansionPanelDetails>
      </ExpansionPanel>

    </div>
  );
}
