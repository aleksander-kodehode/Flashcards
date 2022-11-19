import { apiConfig } from "./apiConfig";
import { Card } from "./getStacks";
const stackEndpoint = apiConfig.endpoints.stacks;

const createCard = async (
  deckId: string,
  question: string,
  answer: string
): Promise<Card> => {
  const response = await fetch(
    `${apiConfig.server}${stackEndpoint}/${deckId}/cards`,
    {
      method: "POST",
      body: JSON.stringify({
        question: question,
        answer: answer,
      }),
      headers: { "Content-Type": "application/json" },
    }
  );
  return response.json();
};
export default createCard;
