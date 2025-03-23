import React, { useState } from "react";
import ValidateMio from "./ValidateFormMio";

function FormularioMio(){
    const[nombre, setNombre]=useState("");
    const[email, setEmail]=useState("");
    const[mensaje, setMensaje]=useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const mensajeValidate=ValidateMio(nombre, email);
        setMensaje(mensajeValidate);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre</label>
            <input name="nombre" input="nombre" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
            <br/>

            <label htmlFor="email">Email</label>
            <input name="email" input="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <br/>

            <button type="submit">Enviar</button>

            </form>
            {mensaje && (<p>{mensaje}</p>)}
        </div>
    )
}

export default FormularioMio;