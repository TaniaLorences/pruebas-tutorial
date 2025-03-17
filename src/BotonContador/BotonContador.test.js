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