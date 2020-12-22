import React,{useState} from "react";
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
import imgProfile from "./../../assets/img/profile.png"


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
  itemAdd:{
    margin:'20px 0px 20px 0px'
  }
}));

export default function UserProfile() {
  const classes = useStyles();
  
  const [name, setName] =useState('')
  const [lastName1, setLastName1] =useState('')
  const [lastName2, setLastName2] =useState('')
  const [birthday, setBirthday] =useState('')
  const [age, setAge] =useState('')
  const [gender, setGender] =useState('')
  const [imageURL, setImageURL] =useState(imgProfile)
  const [typeIdent, setTypeIdent] =useState('')
  const [ident, setIdent] =useState('')
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

  const changeIMG = (img) =>{
    console.log('a')
    setImageURL(img)
  }

  return (
    <div>       
      <Card profile>
        <CardAvatar profile>
          <a href="#pablo" onClick={e => e.preventDefault()}>
            <img src={imageURL} alt="..." />
          </a>
        </CardAvatar>
        <UploadImage onChange={changeIMG} />
        <CardBody>
          <GridContainer >
            <GridItem xs={12} sm={12} md={8}>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Datos Básicos</h4>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4} >
                      <TextField
                        label="Nombre"
                        id="name"
                        value ={name}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                        margin="normal"
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <TextField
                        label="1er. Apellido"
                        id="lastname1"
                        value ={lastName1}
                        onChange={(e) => setLastName1(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <TextField
                        label="2do. Apellido"
                       id="lastname2"
                        value ={lastName2}
                       onChange={(e) => setLastName2(e.target.value)}
                       fullWidth
                       margin="normal"
                    />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} >
                      <TextField
                        label="No. Identificacion"
                        id="ident"
                        value ={ident}
                        onChange={(e) => setIdent(e.target.value)}
                        fullWidth
                        margin="normal"
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <TextField
                        label="Fecha de nacimiento"
                        id="birthday"                    
                        type="date"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        fullWidth
                        margin="normal"
                        value ={birthday}
                        onChange={(e) => (setBirthday(e.target.value), setAge(2))}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                    <TextField
                      label="Edad"
                      id="age"
                      fullWidth
                      margin="normal"
                      value ={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>    
                    <InputLabel shrink htmlFor="origin">
                      Tipo Identificacion
                    </InputLabel>
                    <NativeSelect
                      value={typeIdent}
                      onChange={(e) => setTypeIdent(e.target.value)}
                      
                      inputProps={{
                        name: 'origin',
                        id: 'origin',
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
                    <InputLabel shrink htmlFor="age-native-label-placeholder">
                      Sexo
                    </InputLabel>
                    <NativeSelect
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
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
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Documentos</h4>
                </CardHeader>
                <CardBody>
                  <GridContainer >                
                    <GridItem xs={12} sm={12} md={12}>
                      <h6>Adjuntar formato de ingreso</h6><UploadFile/>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                      <h6>Adjuntar evaluación médica</h6><UploadFile/>
                    </GridItem>
               </GridContainer>
               </CardBody>
               </Card> 
            </GridItem>
          </GridContainer>
        </CardBody>
        <CardFooter>
          <Button color="primary">Actualizar</Button>
        </CardFooter>
      </Card>   
    </div>
  );
}



      