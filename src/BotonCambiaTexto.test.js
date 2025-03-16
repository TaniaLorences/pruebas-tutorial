import { render, screen } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import BotonCambiaTexto from './BotonCambiaTexto';

test('cambia el texto al hacer clic en el botón', () => {
  render(<BotonCambiaTexto />);
  const boton = screen.getByRole('button', { name: /Cambiar Texto/i });
  const parrafo = screen.getByTestId('texto');
  expect(parrafo).toHaveTextContent('Texto inicial');
  fireEvent.click(boton);
  expect(parrafo).toHaveTextContent('Texto cambiado');
});