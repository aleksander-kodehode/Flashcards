import { apiConfig } from "./apiConfig";
import { Card } from "./getStacks";
const stackEndpoint = apiConfig.endpoints.stacks;

const getStack = async (deckId: string): Promise<Card> => {
  const res = await fetch(`${apiConfig.server}${stackEndpoint}/${deckId}`);
  return res.json();
};

export default getStack;
