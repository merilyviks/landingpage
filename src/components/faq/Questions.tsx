"use client";
import { useState } from "react";

export default function Question({
  question,
  answer,
  index,
  key,
}: {
  question: string;
  answer: string;
  index: number;
  key: number;
}) {
  const [isActive, setActive] = useState(false);
  const handleClick = ({ index }: { index: number }) => {
    setActive(!isActive);
  };
  return (
    <div className="question-wrapper" key={key}>
      <div className="question" id={`${index}`}>
        <h3>{question}</h3>
        <button onClick={() => handleClick({ index })}>
          <svg
            className={isActive ? "active" : ""}
            viewBox="0 0 320 512"
            width="100"
          >
            <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
          </svg>
        </button>
      </div>
      <div className={isActive ? "answer active" : "answer"}>{answer}</div>
    </div>
  );
}
