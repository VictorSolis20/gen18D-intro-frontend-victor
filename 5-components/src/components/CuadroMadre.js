import React from "react";
import CuadroHijo from "./CuadroHijo.js";

function CuadroMadre(){
    const character = {
        margin: "50px",
        background: "black",
        height: "340px",
        width: "150px"
    }

    return(
        <div style={character}>
            <CuadroHijo info="Este es un ejemplo de props numero 2"/>
        </div>
    )
}

export default CuadroMadre;