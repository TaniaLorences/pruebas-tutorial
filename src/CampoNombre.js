import React from "react";

function CampoNombre() {
    const [nombre, setNombre] = React.useState('');
    return (
      <input
        placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}
      />
    );
  }
export default CampoNombre;  