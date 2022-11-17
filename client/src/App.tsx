import React, { useEffect, useState } from "react";

function App() {
  type Card = {
    _id: string;
    title: string;
  };

  const [title, setTitle] = useState("");
  const [cards, setCards] = useState([] as Card[]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    //Send card data to server
    const response = await fetch("http://localhost:3500/cards", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        title: title,
      }),
    });
    const card = await response.json();
    setCards([...cards, card]);
    //clear out input after request is sent
    setTitle("");
  };
  const handleDeleteCard = async (cardId: string) => {
    await fetch(`http://localhost:3500/cards/${cardId}`, {
      method: "DELETE",
    });
    setCards(cards.filter((card) => card._id !== cardId));
  };
  //Get all cards
  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3500/cards");
      const newDecks = await res.json();
      setCards(newDecks);
    })();
  }, []);

  return (
    <div className="App">
      <div className="grid overflow-hidden grid-cols-5 gap-5">
        {cards.length > 0 &&
          cards.map((card) => {
            return (
              <div
                className="flex justify-center items-center relative h-40 min-h-full max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
                key={card._id}
              >
                <h3 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  {card.title}
                </h3>
                <button
                  className="absolute top-1 right-2"
                  onClick={() => handleDeleteCard(card._id)}
                >
                  X
                </button>
              </div>
            );
          })}
      </div>
      <form className=" flex flex-col w-2/4 " onSubmit={handleFormSubmit}>
        <label htmlFor="inputCardTitle">Set a card title</label>
        <input
          id="inputCardTitle"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        ></input>
        <button className=" bg-blue-400 h-15 my-2 px-3 py-3 rounded-md hover:bg-blue-600 transition-colors ">
          Create card
        </button>
      </form>
    </div>
  );
}

export default App;
