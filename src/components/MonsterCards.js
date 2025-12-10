import React, { useState, useEffect } from "react";
import "../css/style.css";

const cardImages = Array.from(
  { length: 25 },
  (_, i) => `${process.env.PUBLIC_URL}/cards/monster/card${i + 1}.webp`
);

function getRandomCards(cardArray, count) {
  const shuffled = [...cardArray].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count).map((src, i) => ({
    id: `${Date.now()}-${i}`, // Unique ID for key
    src,
  }));
}

export default function CardGame() {
  const [cards, setCards] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [zoomedCard, setZoomedCard] = useState(null);

  // Load cards on mount and trigger initial flip
  useEffect(() => {
    const newCards = getRandomCards(cardImages, 5);
    setCards(newCards);

    // Trigger initial flip after slight delay
    setTimeout(() => {
      setIsFlipped(true);
    }, 200);
  }, []);

  const shuffleCards = () => {
    setIsFlipped(false); // Flip back first

    setTimeout(() => {
      const newCards = getRandomCards(cardImages, 5);
      setCards(newCards);

      setTimeout(() => {
        setIsFlipped(true); // Flip to front
      }, 50);
    }, 800); // Wait for back flip to finish
  };

  return (
    <div className="card-game">
      <h2 className="title" style={{ color: "rgba(44, 44, 44, 1)" }}>
        Čudovišta
      </h2>
      <div className="card-grid">
        {cards.map((card, index) => (
          <div key={card.id} className="card">
            <div
              className={`card-inner ${isFlipped ? "flipped" : ""}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="card-back">
                <img
                  src={`${process.env.PUBLIC_URL}/cards/monster/back.webp`}
                  alt="Card back"
                  className="card-image"
                />
              </div>
              <div className="card-front">
                <img
                  src={card.src}
                  alt={`Card ${index + 1}`}
                  className="card-image"
                  onClick={() => setZoomedCard(card)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      {zoomedCard && (
        <div className="zoom-overlay" onClick={() => setZoomedCard(null)}>
          <img src={zoomedCard.src} className="zoom-image" alt="zoom" />
        </div>
      )}
      <button className="new-game-button monster-button" onClick={shuffleCards}>
        Nova Čudovišta
      </button>
    </div>
  );
}
