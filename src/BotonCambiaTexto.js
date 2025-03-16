import React from "react";

function BotonCambiaTexto() {
  const [texto, setTexto] = React.useState("Texto inicial");
  return (
    <div>
      <p data-testid="texto">{texto}</p>
      <button onClick={() => setTexto("Texto cambiado")}>Cambiar Texto</button>
    </div>
  );
}

export default BotonCambiaTexto;
