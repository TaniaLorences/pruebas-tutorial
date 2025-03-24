import { render, screen, fireEvent } from '@testing-library/react';
import BotonContador from "./BotonContador"


test('incrementa el contador al hacer clic en el botón', () => {
  render(<BotonContador />);
  const boton = screen.getByRole('button', { name: /Incrementar/i });
  fireEvent.click(boton);
  expect(screen.getByText('Contador: 1')).toBeInTheDocument();
  fireEvent.click(boton);
  expect(screen.getByText('Contador: 2')).toBeInTheDocument();
});

/*
test("Ver si el número aumenta al pulsar 1 y 2 veces", () => {
    render(<Contador></Contador>)
    const boton = screen.getByRole("button");
    fireEvent.click(boton); // Ahora el texto tiene que ser 1

    const texto = screen.getByTestId("textoId").textContent;
    expect(texto).toBe(/Número: 1/i);        OJO, NO FUNCIONA, TIENE QUE SER .toBe("Número: 1");
                                              Tiene que ser .toBe("") comillas para coincidencia exacta
})
*/