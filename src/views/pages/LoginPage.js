import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import Footer from "components/kit/Footer/Footer.js";
import GridContainer from "components/kit/Grid/GridContainer.js";
import GridItem from "components/kit/Grid/GridItem.js";
import Button from "components/kit/CustomButtons/Button.js";
import Card from "components/kit/Card/Card.js";
import CardBody from "components/kit/Card/CardBody.js";
import CardHeader from "components/kit/Card/CardHeader.js";
import CardFooter from "components/kit/Card/CardFooter.js";
import CustomInput from "components/kit/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import imageFondo from "assets/img/bgblocks2.jpg";

const useStyles = makeStyles(styles);

const LoginPage = (props) =>{

  const loginHandler = (e) => {
    e.preventDefault();
    
    if (e.target.elements.namedItem("email").value==='a@mail.com' && e.target.elements.namedItem("pass").value === '123456'){
      window.location.href = '/';
    }else{
      e.target.elements.namedItem("email").value='' 
      e.target.elements.namedItem("pass").value =''
    };
  }
  

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  return (
    <div>
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + imageFondo + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form} onSubmit={loginHandler}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Iniciar Sesion</h4>
                  </CardHeader>
                  <p className={classes.divider}>Ingrese sus datos</p>
                  <CardBody>
                    <CustomInput
                      labelText="Usuario"
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Contraseña"
                      id="pass"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg" type="submit" >
                      Entrar
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}

export default LoginPage