import { cardPairs } from "../constants/cards";

const shuffleList = (list = []) => {
  for (let index = list.length - 1; index > 0; index--) {
    const item = list[index];
    const randomIndex = Math.floor(Math.random() * (index + 1));
    list[index] = list[randomIndex];
    list[randomIndex] = item;
  }
  return list;
};

export const fetchCards = async () => {
  return shuffleList(cardPairs);
};
