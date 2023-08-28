import React, { useState } from "react";
import "./FAQCard.scss";
import { BsPlusSquare } from "react-icons/bs";
import { AiOutlineMinusSquare } from "react-icons/ai";

const FAQCard = (data) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className="faq-card">
      <div className="question-section">
        {showAnswer ? (
          <AiOutlineMinusSquare 
            className="accordian-icon"
            onClick={() => {
              setShowAnswer(!showAnswer);
            }}
          />
        ) : (
          <BsPlusSquare
            className="accordian-icon"
            onClick={() => {
              setShowAnswer(!showAnswer);
            }}
          />
        )}

        <p className="faq-question">{data.data.question}</p>
      </div>
      {showAnswer && <p className="faq-answer">{data.data.answer}</p>}
    </div>
  );
};

export default FAQCard;
