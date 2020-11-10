import React,{useState} from "react";
import Button from "components/dashboard/CustomButtons/Button.js";
import Badge from "components/kit/Badge/Badge.js"

const HomePage = (props) => {

    const [numNino, setNumNino] = useState(0);

    const sumarNino = (e) =>{
      setNumNino(numNino + 1)
    }

    if(props.active)
    {
        window.location.href = '/login'
    }

    const cerrarSesion = (e) =>{
        window.location.href = '/login'
    }

  return (
    <div>
      <div>
      <Button variant="text" color="primary" onClick={cerrarSesion}>
        CerrarSesion
      </Button>
      </div>
      <div>
        <Badge color="primary">
          Niños {numNino}
          <Button variant="text" color="secundary" onClick={sumarNino}>
            +
          </Button>
        </Badge>        
      </div>
    </div>
      );
};

export default HomePage;
