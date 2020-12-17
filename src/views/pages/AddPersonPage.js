import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/huellas/Person/GridItem.js";
import GridContainer from "components/huellas/Person/GridContainer.js";
import Button from "components/huellas/Person/Button.js";
import Card from "components/huellas/Person/Card.js";
import CardHeader from "components/huellas/Person/CardHeader.js";
import CardAvatar from "components/huellas/Person/CardAvatar.js";
import CardBody from "components/huellas/Person/CardBody.js";
import CardFooter from "components/huellas/Person/CardFooter.js";
import TextField from '@material-ui/core/TextField';
import NativeSelect from '@material-ui/core/NativeSelect';
import UploadImage from "components/huellas/Person/UploadImage";
import UploadFile from "components/huellas/Person/UploadFile";

const useStyles = makeStyles((styles) => ({
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
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
}));

export default function UserProfile() {
  const classes = useStyles();
  
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Nuevo niño</h4>
              <p className={classes.cardCategoryWhite}>Ingrese los siguientes datos</p>
            </CardHeader>
            <CardBody>
              <GridContainer style={{margin:'20px 0px 20px 0px'}}>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                    label="Nombres"
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                    label="Apellidos"
                    id="surname"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                    label="Fecha de nacimiento"
                    id="date"                    
                    type="date"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </GridItem>
              </GridContainer>     
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                    label="Edad"
                    id="Age"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                
                <GridItem xs={12} sm={12} md={4}>                
                  <InputLabel shrink htmlFor="age-native-label-placeholder">
                    Sexo
                  </InputLabel>
                  <NativeSelect
                    value={state.age}
                    onChange={handleChange}
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
                  <InputLabel shrink htmlFor="age-native-label-placeholder">
                    Comisaría
                  </InputLabel>
                  <NativeSelect
                    value={state.age}
                    onChange={handleChange}
                    margin="normal"
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
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <h6>Subir foto de perfil</h6><UploadImage/>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <h6>Adjuntar formato de ingreso</h6><UploadFile/>
                </GridItem>
                </GridContainer>
                <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <h6>Adjuntar evaluación médica</h6><UploadFile/>
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary">Actualizar</Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src='https://thispersondoesnotexist.com/image' alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
              <h4 className={classes.cardTitle}>Alec Thompson</h4>
              <p className={classes.description}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button color="primary" round>
                Follow
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
