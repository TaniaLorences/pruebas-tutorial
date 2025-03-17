import { render, screen } from '@testing-library/react';
import PruebaQuinielas from './PruebaQuinielas';

test("La suma de cada apuesta da 100", () => {

    // Test para ver si la suma de cada apuesta es 100: p["1"]+p["Z"]+p["2"]
    // Me da error, no vale
    render(<PruebaQuinielas/>);
    const apuestas1 = screen.getAllByTestId("apuesta1");
    const apuestasX = screen.getAllByTestId('apuestaX');
    const apuestas2 = screen.getAllByTestId('apuesta2');

    for (let i=0; i<apuestas1.length; i++){
        const apuesta1 = parseInt(apuestas1[i].textContent);
        const apuestaX = parseInt(apuestasX[i].textContent);
        const apuesta2 = parseInt(apuestas2[i].textContent);
        const suma = apuesta1+apuestaX+apuesta2
        expect(suma).toBe(100);
    }
})