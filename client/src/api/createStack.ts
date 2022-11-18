import { apiConfig } from "./apiConfig";
const stackEndpoint = apiConfig.endpoints.stacks;

const createStack = async (title: string) => {
  const response = await fetch(`${apiConfig.server}${stackEndpoint}`, {
    method: "POST",
    body: JSON.stringify({
      title: title,
    }),
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
};
export default createStack;
