import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import ListadoQuinielasMio from './ListadoQuinielasMio';

// Testeo con cobertura de al menos el 80% del código
beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({           /* OJO: Replicamos la misma estructura EXACTA del json() */
            "apuestas": [
              {
                "fecha": "2023-11-11",
                "jornada": 13,
                "partidos": [
                  {"local": "Real Madrid", "visitante": "Valencia", "apuestas": {"1": 60, "X": 25, "2": 15}},
                  {"local": "Barcelona", "visitante": "Almería", "apuestas": {"1": 70, "X": 18, "2": 12}},
                  {"local": "Atlético de Madrid", "visitante": "Villarreal", "apuestas": {"1": 55, "X": 28, "2": 17}},
                  {"local": "Real Sociedad", "visitante": "Sevilla", "apuestas": {"1": 45, "X": 30, "2": 25}},
                ]
              },
              {
                "fecha": "2023-11-18",
                "jornada": 14,
                "partidos": [
                  {"local": "Sevilla", "visitante": "Real Sociedad", "apuestas": {"1": 30, "X": 35, "2": 35}},
                ]
              }
            ]
          }
        ),
      })
    );
  });
  
  afterEach(() => {
    jest.restoreAllMocks(); // Restaura la función fetch original después de cada prueba
  });
  

// 1. Test de renderizado: longitud del array jornadas = 2
test("La longitud del array de jornadas es 2", async() => {
    render(<ListadoQuinielasMio></ListadoQuinielasMio>)
    
    await waitFor(() => {
        const acordeones = screen.getAllByTestId("items-acordeon");
        expect(acordeones.length).toBe(2);
    }) 
})

// 2. Test para el título de la app (el renderizado también es asíncrono por haber incluido if(apuestas.length===0) {return (<h2>Cargando jornadas...)})
test("Test para ver si aparece el título", async () => {    
    render(<ListadoQuinielasMio></ListadoQuinielasMio>)
    
    expect(await screen.findByText("App de apuestas")).toBeInTheDocument();  // await ... findBy....
    
    await waitFor(() => {
        expect(screen.getByText("App de apuestas")).toBeInTheDocument();       // await waitFor => getBy...
    })
        
})

/* // 2. Test para renderizado directo del título  // Este test no funciona, porque el renderizado del título es asíncrono (ver arriba)
test("Test para renderizado directo del título en <h2> independiente", () => {
    render(<ListadoQuinielasMio></ListadoQuinielasMio>);
    expect(screen.getByText("App de apuestas")).toBeInTheDocument();
}) */

// 3. Test de reparto de las apuestas 1+x+2=100
test("Test para comprobar que la suma de las apuestas de cada partido es 100", async () => {
    render(<ListadoQuinielasMio></ListadoQuinielasMio>)

    await waitFor(() => {
        const apuestas1 = screen.getAllByTestId("apuestas1"); // array de apuestas 1, parsear después
        const apuestasX = screen.getAllByTestId("apuestasX");
        const apuestas2 = screen.getAllByTestId("apuestas2");
    
        for (let i=0; i<apuestas1.length; i++){
            let sumaApuestas = parseInt(apuestas1[i].textContent)+parseInt(apuestasX[i].textContent)+parseInt(apuestas2[i].textContent);
            expect(sumaApuestas).toBe(100);
        }
    })
})

/*
// 3. Test de fallos de renderizado NO ME SALE
test("Simular un fallo en el renderizado inicial para ver el mensaje de error", async() => {
    global.fetch = jest.fn(() =>
        Promise.reject(new Error("Error de red"))
    );

    render(<ListadoQuinielasMio></ListadoQuinielasMio>) // Se renderiza el componente

    await waitFor(() => {
        expect(screen.getByText("Error al cargar las jornadas")).toBeInTheDocument();
    })
    
})
    */