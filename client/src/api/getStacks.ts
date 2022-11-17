export type Card = {
  _id: string;
  title: string;
};
const getStacks = async (): Promise<Card[]> => {
  const res = await fetch("http://localhost:3500/cards");
  return res.json();
};

export default getStacks;
