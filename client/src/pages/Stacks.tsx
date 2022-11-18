import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import createCard from "../api/createCard";
import deleteCard from "../api/deleteCard";
import getStack from "../api/getStack";
import { Card } from "../api/getStacks";

function Stacks() {
  const [deck, setDeck] = useState<Card | undefined>();
  const [cards, setCards] = useState<String[]>([]);
  const [text, setText] = useState("");
  const [showError, setShowError] = useState(false);
  const { stackId } = useParams();

  const handleCreateCard = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { cards: serverCards } = await createCard(stackId!, text);
      setCards(serverCards);
      //clear out input after request is sent
      setText("");
    } catch {
      if (text.length < 3) {
        setShowError(true);
      } else {
        throw new Error("Unexpected server error");
      }
    }
  };
  const handleDeleteCard = async (index: number) => {
    if (!stackId) return;
    const newStack = await deleteCard(stackId, index);
    setCards(newStack.cards);
    //setStacks(stacks.filter((stack) => stack._id !== stackId));
  };
  //Get the stack in question
  useEffect(() => {
    if (!stackId) return;
    (async () => {
      const newDeck = await getStack(stackId);
      setDeck(newDeck);
      setCards(newDeck.cards);
    })();
  }, [stackId]);

  return (
    <div className="App flex justify-center items-center flex-col gap-4">
      <div className="grid overflow-hidden grid-cols-5 gap-5">
        {cards.length > 0 &&
          cards.map((card, idx) => {
            return (
              <div
                className="flex justify-center items-center relative h-40 min-h-full max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
                key={idx}
              >
                <h3 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  {card}
                </h3>
                <button
                  className="absolute top-1 right-2"
                  onClick={() => handleDeleteCard(idx)}
                >
                  X
                </button>
              </div>
            );
          })}
      </div>
      <form className=" flex flex-col w-2/4 " onSubmit={handleCreateCard}>
        {showError ? (
          <label htmlFor="card-text" className=" text-red-500">
            Please fill in at least 3 characters
          </label>
        ) : (
          <label htmlFor="card-text">Set a card title</label>
        )}
        <input
          id="card-text"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setText(e.target.value);
          }}
        ></input>
        <button className=" bg-blue-400 h-15 my-2 px-3 py-3 rounded-md hover:bg-blue-600 transition-colors ">
          Create card
        </button>
      </form>
    </div>
  );
}

export default Stacks;
