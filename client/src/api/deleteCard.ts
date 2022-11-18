import { apiConfig } from "./apiConfig";
import { Card } from "./getStacks";
const stackEndpoint = apiConfig.endpoints.stacks;

const deleteCard = async (stackId: string, index: number): Promise<Card> => {
  const res = await fetch(
    `${apiConfig.server}${stackEndpoint}/${stackId}/cards/${index}`,
    {
      method: "DELETE",
    }
  );
  return res.json();
};

export default deleteCard;
