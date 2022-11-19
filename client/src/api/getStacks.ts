import { apiConfig } from "./apiConfig";
const stackEndpoint = apiConfig.endpoints.stacks;

export type Card = {
  _id: string;
  cards: { question: string; answer: string }[];
  title: string;
};
const getStacks = async (): Promise<Card[]> => {
  const res = await fetch(`${apiConfig.server}${stackEndpoint}`);
  return res.json();
};

export default getStacks;
