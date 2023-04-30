"use client";
import { useEffect, useState } from "react";
import Question from "./Questions";

export interface Faq {
  id: number;
  question: string;
  answer: string;
}
export default function Faq() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Faq[]>([]);

  useEffect(() => {
    const questions = [
      {
        id: 1,
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra sed tellus quis bibendum. Proin vel tempus dolor. Donec placerat imperdiet justo non posuere.",
      },
      {
        id: 2,
        question: "Aliquam sodales consequat leo, id dapibus nunc luctus ut?",
        answer:
          "Aliquam sodales consequat leo, id dapibus nunc luctus ut. Integer sollicitudin turpis at velit tincidunt, eget lobortis ante consectetur. Nulla facilisi. Nunc in efficitur mi. Suspendisse potenti. In hac habitasse platea dictumst.",
      },
      {
        id: 3,
        question: "Ut commodo magna a risus feugiat posuere",
        answer:
          "Ut commodo magna a risus feugiat posuere. Fusce euismod convallis lacus at viverra. Phasellus nec ullamcorper mi, et sagittis elit. Maecenas vel tincidunt nisi. Quisque varius sapien sed mauris mollis, eget molestie odio accumsan. Morbi ac lectus venenatis, aliquam massa vel, tempus augue.",
      },
      {
        id: 4,
        question: "Morbi ac lectus venenatis?",
        answer:
          "Morbi ac lectus venenatis, aliquam massa vel, tempus augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque auctor finibus erat, vitae sagittis enim iaculis porttitor.",
      },
      {
        id: 5,
        question: "Curabitur placerat interdum erat?",
        answer:
          "Maecenas vel tincidunt nisi. Quisque varius sapien sed mauris mollis, eget molestie odio accumsan. Morbi ac lectus venenatis, aliquam massa vel, tempus augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque auctor finibus erat, vitae sagittis enim iaculis porttitor. Nam auctor blandit vulputate. Sed est diam, sollicitudin sit amet enim eu, ornare pellentesque augue. Nulla in dapibus ligula. Aliquam sit amet imperdiet quam. Curabitur risus sapien, suscipit vitae libero eget, semper gravida mauris.",
      },
      {
        id: 6,
        question: "Nulla pellentesque orci nec arcu lacinia consequat?",
        answer:
          "Morbi ac lectus venenatis, aliquam massa vel, tempus augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque auctor finibus erat, vitae sagittis enim iaculis porttitor.",
      },
      {
        id: 7,
        question: "Sed tempor orci vel tincidunt?",
        answer:
          "Sed tempor orci vel tincidunt vulputate. Nunc efficitur libero id ante pharetra sagittis. Vivamus ultrices quam et volutpat bibendum. Nulla pellentesque orci nec arcu lacinia consequat.",
      },
    ];
    const results = questions.filter((item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results as Faq[]);
  }, [searchTerm]);

  return (
    <div className="faq-container" id="kkk">
      <h1 className="heading title">Korduma kippuvad küsimused</h1>
      <form className="search">
        {/* <div className="svg-container">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            role="img"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
          </svg>
        </div> */}
        <input
          className="searchbar"
          type="text"
          placeholder="Klikka ja sisesta otsitav küsimus"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </form>
      <section className="faq">
        {searchResults.map((item, index) => {
          return (
            <Question
              key={index}
              question={item.question}
              answer={item.answer}
              index={item.id}
            />
          );
        })}
      </section>
    </div>
  );
}
