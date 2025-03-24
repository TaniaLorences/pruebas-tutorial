import React, { useEffect, useState } from 'react';

const MemoryGame = () => {
  const [cards, setCards] = useState([]);

  const cargarCartas = async () => {
    try {
      const response = await fetch('/api/cards');
      const data = await response.json();
      setCards(data);
    } catch (error) {
      console.error("Error al cargar las cartas", error);
      setCards([]);             // Si hay un error se vacía el array de cartas.
    }
  }

useEffect(() => {
  cargarCartas();
}, [])


  return (
    <div>
      <h1>Memory Game</h1>
      <div data-testid="cards-container">
        {cards.map((card) => (
          <div key={card.id} data-testid="card">
            {card.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;
