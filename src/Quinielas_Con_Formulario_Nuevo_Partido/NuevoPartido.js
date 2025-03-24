import React, { useState } from "react";

function NuevoPartidoBorrar({handler}){
const[local, setLocal]=useState("");
const[visitante, setVisitante]=useState("");
const[apuestas1, setApuestas1]=useState(0);
const[apuestasX, setApuestasX]=useState(0);
const[apuestas2, setApuestas2]=useState(0);

return(
    <form onSubmit={(e) => {e.preventDefault(); handler(local, visitante, parseInt(apuestas1), parseInt(apuestasX), parseInt(apuestas2))}}>

    <label for="local">Local: </label>
    <input name="local" id="local" value={local} type="text" onChange={(e) => setLocal(e.target.value)}></input>

    <label for="visitante">Visitante: </label>
    <input name="visitante" id="visitante" value={visitante} type="text" onChange={(e) => setVisitante(e.target.value)}></input>

    <label for="apuestas1">Apuestas 1: </label>
    <input name="apuestas1" id="apuestas1" value={apuestas1} type="number" onChange={(e) => setApuestas1(e.target.value)}></input>

    <label for="apuestasX">Apuestas X: </label>
    <input name="apuestasX" id="apuestasX" value={apuestasX} type="number" onChange={(e) => setApuestasX(e.target.value)}></input>

    <label for="apuestas2">Apuestas 2: </label>
    <input name="apuestas2" id="apuestas2" value={apuestas2} type="number" onChange={(e) => setApuestas2(e.target.value)}></input>
    
    <button type="submit">Enviar</button>
    </form>
)
}

export default NuevoPartidoBorrar;