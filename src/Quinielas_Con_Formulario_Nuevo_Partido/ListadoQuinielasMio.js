import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import NuevoPartidoBorrar from "./NuevoPartido";
// import './ListadoQuinielasMio.css';

function ListadoQuinielasMio() {
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
            console.error("Error al cargar las jornadas", error);
            return(<h2>Error al cargar las jornadas</h2>);
        }
    }

    useEffect(() => {
        if (jornadas.length === 0) {
            cargarJornadas();
        }
    }, [])
    
    if (jornadas.length === 0) {    // OJO: Este bloque determina si el renderizado de la app es o no asíncrono para tests
        return(<h2>Cargando jornadas...</h2>)
    } 

    const aniadirPartido = (local, visitante, numeroJornada, apuestas1, apuestasX, apuestas2) => {
        const nuevoPartido = {
            local: local,
            visitante: visitante,
            apuestas: {
                "1": apuestas1,
                "X": apuestasX,
                "2": apuestas2,
            }
        }

        const datosActualizados = jornadas.map((jornada) => jornada.jornada === numeroJornada ?
            {
                ...jornada,
                partidos: [...jornada.partidos, nuevoPartido]
            }
            : jornada
        )
        setJornadas(datosActualizados)
    }

    return (
        <>
            <h2>App de apuestas</h2>
            <Accordion defaultActiveKey="0">
                {jornadas.map((jornada, index) =>
                    <Accordion.Item eventKey={index} data-testid="items-acordeon">
                        <Accordion.Header>Jornada: {jornada.jornada}</Accordion.Header>
                        <Accordion.Body>
                            <Card>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>                {/* Estructura de tablas anidadas */}
                                            <th>Local</th>
                                            <th>Visitante</th>
                                            <th>
                                                <tr>
                                                    <th>Apuestas</th>
                                                </tr>
                                                <tr>
                                                    <th>1 - X - 2 </th>
                                                </tr>
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {jornada.partidos.map((partido, index) => (
                                            <>
                                            <tr key={index}>
                                                <td>{partido.local}</td>
                                                <td>{partido.visitante}</td>
                                                <td>{partido.apuestas["1"]} 1 - {partido.apuestas["X"]} X - {partido.apuestas["2"]} 2</td>
                                            </tr>
                                            <p className="d-none" data-testid="apuestas1">{partido.apuestas["1"]}</p>
                                            <p className="d-none" data-testid="apuestasX">{partido.apuestas["X"]}</p>
                                            <p className="d-none" data-testid="apuestas2">{partido.apuestas["2"]}</p>
                                            </>
                                        ))}
                                    </tbody>
                                </Table>
                                <NuevoPartidoBorrar handler={(local, visitante, apuestas1, apuestasX, apuestas2) => aniadirPartido(local, visitante, jornada.jornada, apuestas1, apuestasX, apuestas2)}></NuevoPartidoBorrar>
                            </Card>         {/* OJOOOOO: Solución para incluir el partido directamente en esa jornada (sin incluir jornada desde el formulario) */}
                        </Accordion.Body>
                    </Accordion.Item>
                )}
            </Accordion>
        </>
    )
}

export default ListadoQuinielasMio;