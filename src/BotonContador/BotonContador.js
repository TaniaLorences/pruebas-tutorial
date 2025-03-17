import React from 'react';
import { useState } from 'react';

function BotonContador() {
  const [contador, setContador] = useState(0);
  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

export default BotonContador;