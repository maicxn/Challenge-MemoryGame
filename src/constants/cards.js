const images = [
  "javascript.png",
  "nextjs.png",
  "nodejs.png",
  "reactjs.png",
  "typescript.png",
  "vitejs.png",
];

const uniqueCards = images.map((image, pairId) => ({ image, pairId }));

export const cardPairs = [...uniqueCards, ...uniqueCards].map((props, id) => ({
  ...props,
  id,
}));
