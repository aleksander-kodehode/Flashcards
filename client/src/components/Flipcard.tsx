import { useState } from "react";
import { Card } from "../api/getStacks";

interface CardData {
  question: string;
  answer: string;
  idx: number;
}

const Flipcard = ({ question, answer, idx }: CardData) => {
  const [showBack, setShowBack] = useState(false);

  const handleShowBack = () => {
    setShowBack(!showBack);
  };

  return (
    <div className={`card ${showBack ? "flip" : ""}`}>
      <div className="front" onClick={handleShowBack}>
        <h3 className=" text-lg">{question}</h3>
      </div>
      <div className="back" onClick={handleShowBack}>
        <p className="text-sm">{answer}</p>
      </div>
    </div>
  );
};
export default Flipcard;
