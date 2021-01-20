import React,{useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/huellas/Person/GridItem.js";
import GridContainer from "components/huellas/Person/GridContainer.js";
import CardBody from "components/huellas/Person/CardBody.js";
import TextField from '@material-ui/core/TextField';
import NativeSelect from '@material-ui/core/NativeSelect';
import Card from "components/huellas/Person/Card.js";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((styles) => ({
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

export default function UserData({name,lastName1,lastName2,ident,birthday,age,typeIdent,gender,origin}) {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

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
                        value ={name}
                        fullWidth
                        margin="normal"
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <TextField
                        label="1er. Apellido"
                        id="lastname1"
                        value ={lastName1}
                        fullWidth
                        margin="normal"
                    />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <TextField
                       label="2do. Apellido"
                       id="lastname2"
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
                        value ={ident}
                        fullWidth
                        margin="normal"
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} style={{textAlign: 'left'}}>
                      <TextField
                        label="Fecha de nacimiento"
                        id="birthday"
                        value ={birthday}
                        fullWidth
                        margin="normal"                        
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                    <TextField
                      label="Edad"
                      id="age"
                      fullWidth
                      margin="normal"
                      value ={age}
                    />
                    </GridItem>
                    </GridContainer>
                    <GridContainer style={{textAlign: 'left',marginTop:'16px'}}>
                  <GridItem xs={12} sm={12} md={4} >
                    <InputLabel shrink htmlFor="tipoIdentificacion">
                      Tipo Identificacion
                    </InputLabel>
                    <NativeSelect
                      value={typeIdent}
                      fullWidth                     
                      inputProps={{
                        name: 'tipoIdentificacion',
                        id: 'tipoIdentificacion',
                      }}
                    >
                      <option value="">Seleccionar</option>
                      <option value={'RC'}>Registro Civil</option>
                      <option value={'TI'}>Tarjeta Identidad</option>
                      <option value={'CC'}>Cedula Ciudadania</option>
                      <option value={'PA'}>Pasaporte</option>
                    </NativeSelect>
                      
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>                
                    <InputLabel shrink htmlFor="gender">
                      Sexo
                    </InputLabel>
                    <NativeSelect
                      value={gender}
                      fullWidth
                      margin="normal"
                      inputProps={{
                        name: 'gender',
                        id: 'gender',
                      }}
                    >
                      <option value="">Elegir..</option>
                      <option value={'Mas'}>Masculino</option>
                      <option value={'Fem'}>Femenino</option>
                    </NativeSelect>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>                  
                    <InputLabel shrink >
                      Lugar Origen
                    </InputLabel>
                    <NativeSelect
                      value={origin}
                      margin="normal"
                      fullWidth
                      inputProps={{
                        name: 'origin',
                        id: 'origin',
                      }}
                    >
                      <option value="">No aplica</option>
                      <option value={10}>Comisaría 1</option>
                      <option value={20}>Comisaría 2</option>
                      <option value={30}>Comisaría 3</option>
                    </NativeSelect>
                  </GridItem>
                  </GridContainer>
                </CardBody>
                </Card>
        </ExpansionPanelDetails>
      </ExpansionPanel>

    </div>
  );
}
