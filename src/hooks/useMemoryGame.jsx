import { useContext } from "react";
import { MemoryGameLogicContext } from "../contexts/MemoryGameLogicContext";

export const useMemoryGame = () => {
  const context = useContext(MemoryGameLogicContext);
  return context;
};
