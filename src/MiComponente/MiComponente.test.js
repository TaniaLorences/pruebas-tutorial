import { render, screen } from '@testing-library/react';
import MiComponente from './MiComponente';


test('encuentra el botón y el campo de entrada', () => {
  render(<MiComponente />);
  const boton = screen.getByRole('button', { name: /Enviar/i });
  const campo = screen.getByPlaceholderText('Buscar...');
  expect(boton).toBeInTheDocument();
  expect(campo).toBeInTheDocument();
});
