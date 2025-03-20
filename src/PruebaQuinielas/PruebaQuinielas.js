import React, { useContext } from "react";
import Contexto from "./Contexto";
import TarjetaPartido from "./TarjetaPartido";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Carousel } from 'react-bootstrap';
import Card from "react-bootstrap/esm/Card";
import ListGroup from "react-bootstrap/esm/ListGroup";

function PruebaQuinielas() {

    const { partidos } = useContext(Contexto);

    return (
        <>
            <Carousel>
                {partidos.map((p, index) =>
                    <Carousel.Item key={index}>
                        <p data-testid="apuesta1" class="d-none">{p.apuestas["1"]}</p>
                        <p data-testid="apuestaX" class="d-none">{p.apuestas["X"]}</p>
                        <p data-testid="apuesta2" class="d-none">{p.apuestas["2"]}</p>
                        <img
                            className="d-block w-100"
                            src="https://media.istockphoto.com/id/1502846052/es/foto/campo-de-f%C3%BAtbol-texturizado-con-niebla-de-ne%C3%B3n-centro-mediocampo.jpg?s=1024x1024&w=is&k=20&c=SMQzSvJbL-4-3ngYXWUObyxZFYl7p1NJOFHpalTZ1dM="
                            alt="Imagen de fondo con campo de fútbol"
                        />
                        <Carousel.Caption>
                            <h2>Fecha: {p.fecha}</h2>
                            <h2>Jornada: {p.jornada}</h2>
                            <TarjetaPartido partido={p}></TarjetaPartido>
                        </Carousel.Caption>
                    </Carousel.Item>
                )}
            </Carousel>
        </>
    )
}

export default PruebaQuinielas;