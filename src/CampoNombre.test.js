import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CampoNombre from './CampoNombre';

test('actualiza el valor del campo de entrada con userEvent', async () => {
  render(<CampoNombre />);
  const campo = screen.getByPlaceholderText('Nombre');
  await userEvent.type(campo, 'Juan');
  expect(campo.value).toBe('Juan');
});
