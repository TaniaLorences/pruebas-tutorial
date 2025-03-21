import { render, screen } from '@testing-library/react';
import PruebaQuinielas from './PruebaQuinielas';

// Da algún fallo por usar Context()

test("La suma de cada apuesta da 100", () => {

    // Test para ver si la suma de cada apuesta es 100: p["1"]+p["Z"]+p["2"]
    // Me da error, no vale
    render(<PruebaQuinielas/>);
    const apuestas1 = screen.findAllByTestId("apuesta1"); // es asíncrono, no podemos usar getAllByTestId() si no FINDAllByTestId
    const apuestasX = screen.findAllByTestId('apuestaX'); // obtenemos un array de nodos, no se puede usar textContent() aquí
    const apuestas2 = screen.findAllByTestId('apuesta2');

    for (let i=0; i<apuestas1.length; i++){
        let apuesta1 = parseInt(apuestas1[i].textContent);
        let apuestaX = parseInt(apuestasX[i].textContent);
        let apuesta2 = parseInt(apuestas2[i].textContent);
        const suma = apuesta1+apuestaX+apuesta2
        expect(suma).toBe(100);
    }
})