import React, { useState } from "react";

function NuevoPartido({handler}){
    const[local, setLocal]=useState("");
    const[visitante, setVisitante]=useState("");
    const[jornadaN, setJornadaN]=useState("");
    const[apuestas1, setApuestas1]=useState(0);
    const[apuestasX, setApuestasX]=useState(0);
    const[apuestas2, setApuestas2]=useState(0);

    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            handler(local, visitante, parseInt(jornadaN), parseInt(apuestas1), parseInt(apuestasX), parseInt(apuestas2));         // Gestionar los nuevos elementos
        }}>

        <label for="local">Local: </label>
        <input id="local" name="local" value={local} type="text" onChange={(e) => setLocal(e.target.value)}></input>

        <label for="visitante">Visitante: </label>
        <input id="visitante" name="visitante" value={visitante} type="text" onChange={(e) => setVisitante(e.target.value)}></input>

        <label for="jornadaN">Jornada: </label>
        <input id="jornadaN" name="jornadaN" value={jornadaN} type="text" onChange={(e) => setJornadaN(e.target.value)}></input>

        <label for="apuestas1">Apuestas 1: </label>
        <input id="apuestas1" name="apuestas1" value={apuestas1} type="number" onChange={(e) => setApuestas1(e.target.value)}></input>

        <label for="apuestasX">Apuestas X: </label>
        <input id="apuestasX" name="apuestasX" value={apuestasX} type="number" onChange={(e) => setApuestasX(e.target.value)}></input>

        <label for="apuestas2">Apuestas 2: </label>
        <input id="apuestas2" name="apuestas2" value={apuestas2} type="number" onChange={(e) => setApuestas2(e.target.value)}></input>

        <button type="submit">Enviar</button>

        </form>
    )
}

export default NuevoPartido;