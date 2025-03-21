import React from "react";
import Card from "react-bootstrap/esm/Card";
import ListGroup from "react-bootstrap/esm/ListGroup";

function TarjetaPartido({ partido }) {
    return (
        <Card>
            <Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Equipos: {partido.local} vs {partido.visitante}</ListGroup.Item>
                    <ListGroup.Item>Apuestas: </ListGroup.Item>
                    <ListGroup.Item>1: {partido.apuestas["1"]}</ListGroup.Item>
                    <ListGroup.Item>X: {partido.apuestas["X"]}</ListGroup.Item>
                    <ListGroup.Item>2: {partido.apuestas["2"]}</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default TarjetaPartido;