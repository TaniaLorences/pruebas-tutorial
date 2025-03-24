import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import NuevoPartido from "./NuevoPartido";

function ListaApuestas() {
    const [jornadas, setJornadas] = useState([]);

    const cargarJornadas = async () => {
        try {
            const response = await fetch("/quinielas.json")
            const data = await response.json();
            const datosActualizados = data.apuestas.map((jornada, index) => ({
                ...jornada,
                indiceJornada: index,
            }))
            setJornadas(datosActualizados);
        } catch (error) {
            console.error("Error al cargar las jornadas", error)
        }
    }

    useEffect(() => {
        if (jornadas.length === 0) {
            cargarJornadas();
        }
    }, []);

    const aniadirPartido = (local, visitante, jornadaN, apuestas1, apuestasX, apuestas2) => {
        const nuevoPartido= {
            local:local,
            visitante:visitante,
            apuestas: {
                "1": apuestas1,
                "X": apuestasX,
                "2": apuestas2,
            }
        }

        const datosActualizados = jornadas.map((jornada) => jornada.jornada===jornadaN 
        ?
        {
            ...jornada,
            partidos: [...jornada.partidos, nuevoPartido],  // OJOOOO: para añadir el nuevo partido
        }
        : jornada
        )
        setJornadas(datosActualizados);
    }

    return (
        <>
            {jornadas.map((jornada, index) =>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey={index}>
                        <Accordion.Header>Jornada: {jornada.jornada}</Accordion.Header>
                        <Accordion.Body>
                            <Card>
                                <Table>
                                    <tbody>
                                        {jornada.partidos.map((partido, index) => (
                                            <>
                                            <tr key={index}>
                                                <td>Local: {partido.local}</td>
                                                <td>Visitante: {partido.visitante}</td>
                                                <td>Apuestas: {partido.apuestas["1"]} 1 - {partido.apuestas["X"]} X - {partido.apuestas["2"]} 2</td>
                                            </tr>
                                            </>
                                        ))}
                                    </tbody>
                                </Table>
                                <NuevoPartido handler={aniadirPartido}></NuevoPartido>
                            </Card>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            )}
        </>
    )
}

export default ListaApuestas;