import FormularioMio from "./FormularioMio";
import { screen, fireEvent } from "@testing-library/dom";
import { render } from "@testing-library/react";

test("Probar a enviar sin meter ningún campo", () => {
    render(<FormularioMio/>);
    const boton = screen.getByRole("button");
    fireEvent.click(boton);
    expect(screen.getByText(/Ambos campos son necesarios/i)).toBeInTheDocument();
})

test("Probar a enviar un email erróneo", () => {
    render(<FormularioMio/>);
    const nombre = screen.getByLabelText(/nombre/i);
    fireEvent.change(nombre, {target: {value: "j"}});

    const email = screen.getByLabelText(/email/i);
    fireEvent.change(email, {target: {value: "f"}})

    const boton = screen.getByRole("button");
    fireEvent.click(boton);

    expect(screen.getByText(/El email es incorrecto/i)).toBeInTheDocument();
})

test("Probar a enviar un formulario correcto", () => {
    render(<FormularioMio></FormularioMio>)
    const boton = screen.getByRole("button");

    const nombre=screen.getByLabelText(/nombre/i);
    fireEvent.change(nombre, {target: {value: /f/i}})

    const email=screen.getByLabelText(/email/i);
    fireEvent.change(email, {target: {value: /f@gmail/i}})

    fireEvent.click(boton);
    expect(screen.getByText(/El formulario es válido./i)).toBeInTheDocument();
})
