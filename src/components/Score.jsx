import { useMemoryGame } from "../hooks/useMemoryGame";

export const Score = () => {
  const { flippedCardCount, pointCount } = useMemoryGame();

  return (
    <div className="score">
      <Points title="Pontos" value={pointCount} />
      <Points title="Cartas viradas" value={flippedCardCount} />
    </div>
  );
};

const Points = ({ title, value }) => {
  return (
    <div className="points">
      <strong className="points__title">{title}: </strong>
      <span className="points__value">{value}</span>
    </div>
  );
};
