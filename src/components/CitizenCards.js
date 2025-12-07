import React, { useState, useEffect } from "react";
import "../css/style.css";

export default function CitizenCards() {
  const [cards, setCards] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [config, setConfig] = useState([]);

  // Load config from public folder
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/cards/citizen/config.json`)
      .then((res) => res.json())
      .then((data) => {
        setConfig(data.sets);
        const initialCards = generateRandomCards(data.sets);
        setCards(initialCards);
        setTimeout(() => setIsFlipped(true), 200);
      });
  }, []);

  const generateRandomCards = (sets) => {
    return sets.map((setObj, index) => {
      const randomIndex = Math.floor(Math.random() * setObj.count) + 1;
      return {
        id: `${Date.now()}-${index}`,
        src: `${process.env.PUBLIC_URL}/cards/citizen/set${setObj.set}/card${randomIndex}.webp`,
      };
    });
  };

  const shuffleCitizenCards = () => {
    setIsFlipped(false);
    setTimeout(() => {
      const newCards = generateRandomCards(config);
      setCards(newCards);
      setTimeout(() => setIsFlipped(true), 50);
    }, 800);
  };

  return (
    <div className="card-game">
      <h1 className="title" style={{ color: "#007bff" }}>
        Likovi
      </h1>
      <div className="card-grid">
        {cards.map((card, index) => (
          <div key={card.id} className="card">
            <div
              className={`card-inner ${isFlipped ? "flipped" : ""}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="card-back">
                <img
                  src={`${process.env.PUBLIC_URL}/cards/citizen/back.webp`}
                  alt="Card back"
                  className="card-image"
                />
              </div>
              <div className="card-front">
                <img
                  src={card.src}
                  alt={`Citizen card ${index + 1}`}
                  className="card-image"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="new-game-button citizen-button"
        onClick={shuffleCitizenCards}
      >
        Novi Likovi
      </button>
    </div>
  );
}
