import React,{useState} from "react";
import Button from "components/dashboard/CustomButtons/Button.js";
import Badge from "components/kit/Badge/Badge.js"
import Indicadores from "components/huellas/Indicadores.js"
import CardBoy from "components/huellas/CardBoy.js"
import Buscar from "components/huellas/Buscar.js"

const HomePage = () => {
  return (
    <div>
      <div>
        <Indicadores/>
        <Buscar/>
      </div>
    </div>
    
      );
};

export default HomePage;
