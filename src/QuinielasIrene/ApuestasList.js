import { useEffect, useState } from "react";
import {Table, Container, Card, Button, Accordion} from "react-bootstrap";
import './ApuestasList.css'


const ApuestasList = ()=>{

    const [apuestas, setApuestas] = useState([]);

    const cargarApuestas=async()=>{
        const response = await fetch('http://localhost:3000/quinielas.json');
        const data = await response.json();
        setApuestas(data.apuestas.map((apuesta,i)=>{apuesta["id"]=i;return apuesta;}));
    } 

    useEffect(()=>{
        cargarApuestas();

    },[])
    
    return(
    <Container className="mt-4">
    <h2>Apuestas Realizadas</h2>
    <Accordion defaultActiveKey="0" flush>
    
    {apuestas.map((jornada, index) => (
    <Accordion.Item eventKey={index} key={jornada.jornada}>
        <Accordion.Header className="jornada_header" >
        <img  width="30" src="http://localhost:3000/logoQuinielaUltimosResultados.svg"></img>Jornada :{jornada.fecha}
        </Accordion.Header>
        <Accordion.Body>
        <Card key={"card"+jornada.jornada}>
       
        <Card.Body>
        <Table striped bordered hover><thead><tr><th>Partidos</th><th>Apuestas</th></tr></thead>
        <tbody> 
            {jornada.partidos.map((partido, partidoIndex)=>(
                <tr key={partidoIndex}>
                    <td>{partido.local} vs {partido.visitante}</td>
                    <td>1: {partido.apuestas["1"]} -X: {partido.apuestas["X"]} - 2:{partido.apuestas["2"]}</td>
                </tr>
            ))}

        </tbody>    
        </Table> </Card.Body>
    </Card>
    </Accordion.Body>
    </Accordion.Item>))}
    </Accordion>
    </Container>
  );
}
export default ApuestasList;