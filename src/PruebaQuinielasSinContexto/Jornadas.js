import React, { useEffect, useState } from "react";

function Jornadas() {
    const [partidos, setPartidos] = useState([]);

    const cargarPartidos = async () => {
        try {
            const response = await fetch("/quinielas.json");
            const data = await response.json();
            const datosActualizados = data.apuestas.flatMap((jornada) =>
                jornada.partidos.map((p) =>
                ({
                    ...p,
                    fecha: jornada.fecha,
                    jornada: jornada.jornada,
                })
                )
            )
            setPartidos(datosActualizados);
        } catch (error) {
            console.log("Error al cargar las apuestas", error)
        }
    }

    useEffect(() => {
        if (partidos.length === 0) {
            cargarPartidos();
        }
    }, [])

    if (partidos.length === 0) {
        return (
            <h2>Cargandos datos...</h2>
        )
    }

    return (
        <Table>
            {partidos.map((p, index) => 
            <>
            <p data-testId="p1" className="d-none">{p.apuestas["1"]}</p>
            <p data-testId="pX" className="d-none">{p.apuestas["X"]}</p>
            <p data-testId="p2" className="d-none">{p.apuestas["2"]}</p>
            <TarjetaPartido key={index} partido={p}></TarjetaPartido>
            </>
        )}
        </Table>
    )
}

export default Jornadas;