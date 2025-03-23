import WelcomeMessage from "./WelcomeMessage";
import { render, screen } from "@testing-library/react";

test("Muestra el mensaje de bienvenida correcto", () => {
    render(<WelcomeMessage name="Nombre random"></WelcomeMessage>)

    const mensaje = screen.getByRole("heading", {level: 2}).textContent;
    expect(mensaje).toBe("Bienvenido/a Nombre random")
})