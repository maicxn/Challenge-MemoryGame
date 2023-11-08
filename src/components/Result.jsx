import classNames from "classnames";
import { useMemo } from "react";
import { results } from "../constants/results";
import { useMemoryGame } from "../hooks/useMemoryGame";

export const Result = () => {
  const {
    cards,
    foundPairIds,
    flippedCardCount,
    startGame,
  } = useMemoryGame();

  const open = useMemo(
    () => cards.length > 0 && cards.length === foundPairIds.length * 2,
    [foundPairIds.length]
  );

  const accuracyRate = (cards.length / flippedCardCount ?? 1) * 100;

  const result = useMemo(
    () => results.find(({ min }) => min < accuracyRate),
    [open]
  );

  const cn = classNames("result", {
    "result--open": open,
  });

  return (
    <div className={cn}>
      <div className="result__box">
        <p>Seu nível de memória é:</p>
        <h1>{result?.title}</h1>
        <img
          src={result?.image}
          height={150}
          alt="Memory level image"
        />
        <p>
          <strong>Precisão de acerto:</strong> {accuracyRate.toFixed(0)}%
        </p>
        <button className="button" onClick={startGame}>
          Novo jogo
        </button>
      </div>
    </div>
  );
};
