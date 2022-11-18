import { apiConfig } from "./apiConfig";
import { Card } from "./getStacks";
const stackEndpoint = apiConfig.endpoints.stacks;

const createCard = async (deckId: string, text: string): Promise<Card> => {
  const response = await fetch(
    `${apiConfig.server}${stackEndpoint}/${deckId}/cards`,
    {
      method: "POST",
      body: JSON.stringify({
        text: text,
      }),
      headers: { "Content-Type": "application/json" },
    }
  );
  return response.json();
};
export default createCard;
