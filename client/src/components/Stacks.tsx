import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import createCard from "../api/createCard";
import deleteCard from "../api/deleteCard";
import getStack from "../api/getStack";
import { Card } from "../api/getStacks";
import Flipcard from "./Flipcard";

function Stacks() {
  const [stack, setStack] = useState<Card>();
  const [cards, setCards] = useState<{ question: string; answer: string }[]>(
    []
  );
  const [question, setQuestion] = useState("" as string);
  const [answer, setAnswer] = useState("" as string);
  const [showError, setShowError] = useState(false);
  const { stackId } = useParams();

  const handleCreateCard = async (e: React.FormEvent) => {
    e.preventDefault();
    if (question.length < 4 && answer.length < 4) {
      setShowError(true);
      return;
    }
    const { cards: serverCards } = await createCard(stackId!, question, answer);
    setCards(serverCards);
    //clear out input after request is sent
    if (showError) setShowError(false);
    setQuestion("");
    setAnswer("");
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
      const newStack = await getStack(stackId);
      setStack(newStack);
      setCards(newStack.cards);
    })();
  }, [stackId]);

  return (
    <div className="flex justify-center items-center flex-col gap-4">
      <h2 className=" question-4xl">{stack?.title}</h2>
      <div className="grid overflow-hidden grid-cols-5 gap-5">
        {cards.length > 0 &&
          cards.map((card, idx) => {
            return (
              <div
                key={idx}
                className=" flex flex-col justify-center items-center"
              >
                <Flipcard
                  question={card.question}
                  answer={card.answer}
                  idx={idx}
                />
                <button className="" onClick={() => handleDeleteCard(idx)}>
                  Delete card
                </button>
              </div>
            );
          })}
      </div>
      <form className=" flex flex-col w-2/4 gap-2" onSubmit={handleCreateCard}>
        {showError ? (
          <label htmlFor="card-question" className=" text-red-500">
            Please fill in at least 3 characters
          </label>
        ) : (
          <label htmlFor="card-question">Set card question</label>
        )}
        <input
          id="card-question"
          className=" text-black"
          value={question}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setQuestion(e.target.value);
          }}
        ></input>
        {showError ? (
          <label htmlFor="card-answer" className=" text-red-500">
            Please fill in at least 3 characters
          </label>
        ) : (
          <label htmlFor="card-answer">Set card answer</label>
        )}
        <textarea
          id="card-question"
          className=" text-black"
          value={answer}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setAnswer(e.target.value);
          }}
        ></textarea>
        <button className=" bg-blue-400 h-15 my-2 px-3 py-3 rounded-md hover:bg-blue-600 transition-colors ">
          Create card
        </button>
      </form>
    </div>
  );
}

export default Stacks;
