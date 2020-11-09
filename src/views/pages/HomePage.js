import React from "react";
import Button from "components/dashboard/CustomButtons/Button.js";
  

const HomePage = (props) => {

    if(props.active)
    {
        window.location.href = '/login'
    }

    const cerrarSesion = (e) =>{
        window.location.href = '/login'
    }

  return (
    <div>
      <Button variant="text" color="primary" onClick={cerrarSesion}>
        CerrarSesion
      </Button>
    </div>
  );
};

export default HomePage;
