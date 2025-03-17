import React, { useEffect, useState } from 'react';

const MemoryGame = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('/api/cards')
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error('Error fetching cards:', error));
  }, []);

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
