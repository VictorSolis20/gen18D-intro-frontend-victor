import Description from "./components/Description.js";
import Card from "./components/Card/Card.js"
import Character from "./components/Character/Character.js"
import Circle from "./components/Circle.js"
import CuadroMadre from "./components/CuadroMadre.js";

import React from "react";

function App() {
  return (
    <div>
      {/* <Image/>  */}
      <Description victor='Esta es un ejemplo de props'/>
      <CuadroMadre/>
      <Card/>
      <Character/>
      <Circle/>

    </div>
  );
}

export default App;
