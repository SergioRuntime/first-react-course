import React from "react";

import confLogo from "../images/images.png"; // En el inspect de Google, si lo inspecionamos con React, en el nombre de la imagen nos aparece un número, es el HASH.

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>
        <div>
            <img src="" alt="Avatar"></img>
          <h1>
            Richard <br /> Sergio
          </h1>
        </div>
        <div>
            <p>Frontend Junior</p>
            <p>@sergioRuntime</p>
        </div>
        <div>
           #platziConf 
        </div>
      </div>
    );
  }
}

export default Badge;
