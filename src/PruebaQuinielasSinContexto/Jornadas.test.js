import Jornadas from "./Jornadas";
import { render, screen } from '@testing-library/react';

  test("cada apuesta suma 100", () => {
    render(<Jornadas></Jornadas>);
    let apuestas1=[];
    apuestas1 = screen.findAllByTestId("p1"); // Conseguimos un array de nodos (no podemos usar .textContent en el array, si no sobre cada elemento)
    let apuestasX=[];
    apuestasX = screen.findAllByTestId("pX"); // No podemos usar screen.getAllByTestId("pX"), sino screen.FINDAllByTestId("pX")
    let apuestas2=[];
    apuestas2 = screen.findAllByTestId("p2");

    for (let i=0; i<apuestas1.length; i++){
        const apuesta1=parseInt(apuestas1[i].textContent);
        const apuestaX=parseInt(apuestasX[i].textContent);
        const apuesta2=parseInt(apuestas2[i].textContent);
        const sumaApuestas=apuesta1+apuestaX+apuesta2;
        expect(sumaApuestas).toBe(100);
    }
  });
  