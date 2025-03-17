import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test("El valor del contador se incrementa al hacer clic en el botón", () => {
    render(<Counter/>);
    const boton = screen.getByRole('button', { name: /Incrementar/i });
    fireEvent.click(boton);

    const texto = screen.getByRole('paragraph');
    expect(texto.textContent).toBe("Contador: 1");

    // Otra forma 
    expect(screen.getByText("Contador: 1")).toBeInTheDocument();

    expect(screen.getByText("Incrementar")).toBeInTheDocument();

    fireEvent.click(boton);
    expect(texto.textContent).toBe("Contador: 2");

    expect(screen.getByText("Contador: 2")).toBeInTheDocument();
})
