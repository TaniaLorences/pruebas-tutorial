import Contexto from "./Contexto";
import { useState, useEffect } from "react";

function ProviderMio({children}){
    const [partidos, setPartidos] = useState([]);

    const cargarApuestas = async () => {
        try {
            const response = await fetch("/quinielas.json");
            const data = await response.json();
            const datosActualizados = data.apuestas.flatMap((apuesta) =>
                apuesta.partidos.map((partido) => ({
                    ...partido,
                    fecha: apuesta.fecha,
                    jornada: apuesta.jornada
                })
                ))
            setPartidos(datosActualizados);
        } catch (error) {
            console.error("Error al cargar los partidos", error)
        }
    }

    useEffect(() => {
        if (partidos.length === 0) {
            cargarApuestas();
        }
    }, [])

    if (partidos.length===0){
        return(
            <h2>Cargando partidos...</h2>
        )
    }

    return(
        <Contexto.Provider value={{partidos}}>{children}</Contexto.Provider>
    )
}

export default ProviderMio;