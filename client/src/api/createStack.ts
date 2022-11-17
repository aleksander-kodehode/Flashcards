const createStack = async (title: string) => {
  const response = await fetch("http://localhost:3500/cards", {
    method: "POST",
    body: JSON.stringify({
      title: title,
    }),
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
};
export default createStack;
