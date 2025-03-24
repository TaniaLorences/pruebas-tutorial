import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import MemoryGame from './MemoryGame'; // Importa el componente MemoryGame

describe('MemoryGame Component', () => { // Describe el conjunto de tests para MemoryGame

    beforeEach(() => { // Se ejecuta antes de cada test
        // Mockea la función global fetch para simular llamadas a la API
        global.fetch = jest.fn((url) => {
            if (url === '/api/cards') { // Si la URL es '/api/cards'
                // Simula una respuesta exitosa con un array de cartas
                return Promise.resolve({
                    json: () => Promise.resolve([
                        { id: 1, name: 'Card 1' },
                        { id: 2, name: 'Card 2' },
                    ]),
                });
            }
            // Si la URL no coincide, simula un error
            return Promise.reject(new Error('URL no encontrada'));
        });
    });

    afterEach(() => { // Se ejecuta después de cada test
        // Limpia el mock de fetch para evitar efectos secundarios en otros tests
        jest.restoreAllMocks();      // Elimina el mock de fetch
    });

    test('debería mostrar las cartas obtenidas de la API', async () => { // Test para verificar la carga exitosa de cartas
        render(<MemoryGame />); // Renderiza el componente MemoryGame

        // Espera a que las cartas se carguen y se muestren en el DOM
        await waitFor(() => {
            expect(screen.getByText('Card 1')).toBeInTheDocument(); // Verifica que 'Card 1' esté presente
            expect(screen.getByText('Card 2')).toBeInTheDocument(); // Verifica que 'Card 2' esté presente
        });

        // Verifica que haya 2 elementos con el data-testid 'card' (las cartas)
        expect(screen.getAllByTestId('card').length).toBe(2);
    });

    test('debería manejar el error si la URL no es encontrada', async () => { // Test para verificar el manejo de errores
        // Se vuelve a mockear global.fetch para que devuelva la respuesta correcta en la primera renderización.
        global.fetch = jest.fn((url) => {
            if (url === '/api/cards') {
                return Promise.resolve({
                    json: () => Promise.resolve([
                        { id: 1, name: 'Card 1' },
                        { id: 2, name: 'Card 2' },
                    ]),
                });
            }
            return Promise.reject(new Error('URL no encontrada'));
        });

        render(<MemoryGame />);                // Renderiza el componente MemoryGame
        await waitFor(() => {
            expect(screen.getByText('Card 1')).toBeInTheDocument();
        });

        // Se vuelve a mockear global.fetch para que devuelva un error en la siguiente renderización.
        global.fetch = jest.fn((url) => {
            return Promise.reject(new Error('URL no encontrada'));
        });

        render(<MemoryGame />); // Renderiza el componente MemoryGame
        // Verifica que Card 1 ya no se encuentre en el documento, al volver a renderizar con un error.
        await waitFor(() => {

            expect(screen.getAllByTestId("card").length).toBe(0);
            //expect(screen.getByText('Card 1')).not.toBeInTheDocument();
        })
    });
});