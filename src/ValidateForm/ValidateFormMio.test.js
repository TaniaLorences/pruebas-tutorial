import { render, screen } from "@testing-library/react";
import ValidateMio from "./ValidateFormMio";
// import ValidateMio from "./ValidateFormMio";
// ValidateMio es una función, no un componente react, no renderiza nada en el DOM

test("Probar a no incluir un campo", () => {
    const resultado = ValidateMio("", "")
    expect(resultado).toBe("Ambos campos son necesarios."); // OJO: Con funciones es necesario usar comillas en toBe()
})

test("Probar a introducir un email incorrecto", () => {
    const resultado = ValidateMio("f", "@gmail.com");
    expect(resultado).toBe("El formulario es válido.");
})

test("Probar a enviar bien ambos campos", () => {
    const resultado = ValidateMio("a", "@");
    expect(resultado).toBe("El formulario es válido.");
})