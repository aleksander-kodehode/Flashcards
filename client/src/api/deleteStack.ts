import { apiConfig } from "./apiConfig";
const stackEndpoint = apiConfig.endpoints.stacks;

const deleteStack = async (stackId: string) => {
  await fetch(`${apiConfig.server}${stackEndpoint}/${stackId}`, {
    method: "DELETE",
  });
};

export default deleteStack;
