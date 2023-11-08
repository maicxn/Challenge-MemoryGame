import { useEffect } from "react";
import { MemoryGameLogicProvider } from "../contexts/MemoryGameLogicContext";
import { useMemoryGame } from "../hooks/useMemoryGame";
import { Card } from "./Card";
import { Score } from "./Score";
import { Result } from "./Result";

export const MemoryGame = () => {
  return (
    <MemoryGameLogicProvider>
      <MemoryGameContent />
    </MemoryGameLogicProvider>
  );
};

const MemoryGameContent = () => {
  const { cards, startGame } = useMemoryGame();
  const player = sessionStorage.getItem("player");


  useEffect(() => {
    startGame();
  }, []);

  return (
    <div className="memory-game">
      <div className="memory-game__content">
        <h1>Boa sorte, {player}!</h1>
        <Score />
        {cards?.length === 0 ? (
          <p>Loading cards...</p>
        ) : (
          <div className="cards">
            {cards.map((props) => (
              <Card key={props.id} {...props} />
            ))}
          </div>
        )}
      </div>
      <Result />
    </div>
  );
  
};
