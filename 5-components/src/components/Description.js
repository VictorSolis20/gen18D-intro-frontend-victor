import React from "react";
import {Titulo} from './Description-style.js'

function Description(props){
    
    return(
        <div>
            <Titulo>{props.victor}</Titulo>
        </div>
    )
}

export default Description;