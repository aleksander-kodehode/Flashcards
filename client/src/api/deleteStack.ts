const deleteStack = async (cardId: string) => {
  await fetch(`http://localhost:3500/cards/${cardId}`, {
    method: "DELETE",
  });
};

export default deleteStack;
