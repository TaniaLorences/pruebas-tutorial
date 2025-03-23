function ValidateMio(nombre, email){
    if(!nombre || !email){
        return("Ambos campos son necesarios.")
    }
    if(!email.includes("@")){
        return("El email es incorrecto.")
    }
    return("El formulario es válido.")
}

export default ValidateMio;