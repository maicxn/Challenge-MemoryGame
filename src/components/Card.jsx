import classNames from "classnames";
import { useMemoryGame } from "../hooks/useMemoryGame";

export const Card = ({ id, pairId, image }) => {
  const { flipCard, flippedCardIds, foundPairIds } = useMemoryGame();

  const handleClick = () => {
    flipCard({ id, pairId });
  };

  const found = foundPairIds.includes(pairId);
  const flipped = found || flippedCardIds.includes(id);
  const blocked = flipped || flippedCardIds.length > 1;

  const cn = classNames("card", {
    "card--flipped": flipped,
    "card--found": found,
  });

  return (
    <button
      id={id}
      className={cn}
      onClick={handleClick}
      disabled={blocked}
    >
      <div className="card__content">
        <div className="card__front" />
        <div className="card__back">
          <img alt={pairId} width={300} src={image} />
        </div>
      </div>
    </button>
  );
};
