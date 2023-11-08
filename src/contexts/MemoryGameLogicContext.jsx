import { createContext, useState } from "react";
import { POINTS, TIME_IN_MS } from "../constants/settings";
import { fetchCards } from "../services/fetchCards";

export const MemoryGameLogicContext = createContext();

export const MemoryGameLogicProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [foundPairIds, setFoundPairIds] = useState([]);
  const [flippedCardIds, setFlippedCardIds] = useState([]);

  const [flippedCardCount, setFlippedCardCount] = useState(0);
  const [pointCount, setPointCount] = useState(0);

  const startGame = async () => {
    setFoundPairIds([]);
    setFlippedCardIds([]);

    setFlippedCardCount(0);

    const cards = await fetchCards();
    setCards(cards);
    setPointCount(0);


  };

  const newRound = () => {
    setFlippedCardIds([]);
  };

  const incrementFlippedCardCount = () =>
    setFlippedCardCount((count) => count + 1);

  const addPoint = () =>
    setPointCount((points) => points + POINTS.PAIR_FOUND);

  const registerFoundPair = (pairId) =>
    setFoundPairIds((ids) => [...ids, pairId]);

  const compareCardsByIds = ([firstId, secondId]) => {
    const pairId1 = cards.find(({ id }) => id === firstId)?.pairId;
    const pairId2 = cards.find(({ id }) => id === secondId)?.pairId;
    return pairId1 === pairId2;
  };

  const flipCard = ({ id, pairId }) => {
    incrementFlippedCardCount();

    if (flippedCardIds.length === 0) {
      return setFlippedCardIds([id]);
    }

    const firstId = flippedCardIds[0];
    const secondId = id;
    const ids = [firstId, secondId];
    setFlippedCardIds(ids);

    const sameCards = compareCardsByIds(ids);
    if (sameCards) {
      addPoint();
      registerFoundPair(pairId);
    }

    const time = sameCards ? 0 : TIME_IN_MS.FLIP_CARD;
    setTimeout(newRound, time);
  };

  const value = {
    cards,
    foundPairIds,
    flippedCardIds,

    flippedCardCount,
    pointCount,

    startGame,
    flipCard,
  };

  return (
    <MemoryGameLogicContext.Provider value={value}>
      {children}
    </MemoryGameLogicContext.Provider>
  );
};
