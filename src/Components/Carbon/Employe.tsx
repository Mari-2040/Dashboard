import React, { useState } from "react";

const Employee = () => {
  const questions = [
    "What is the level of employee satisfaction?",
    "Is there a senior code of ethics?",
    "Suspendisse maximus neque?",
    "Donec accumsan odio eget aliquam?",
    "Nullam imperdiet arcu eget magna?",
    "Donec accumsan odio eget aliquam?",
    "Is there a senior code of ethics?",
    "What is the level of employee satisfaction?",
    "Is there a code of ethics?",
  ];

  const [activeQuestion, setActiveQuestion] = useState(0);

  const handleQuestionClick = (index) => {
    setActiveQuestion(index);
  };

  return (
    <div>
      <div className="max-h-80 max-w-md overflow-y-auto p-4 mt-4 ">
        <ul className="space-y-4 ">
          {questions.map((question, index) => (
            <li
              key={index}
              className={`text-lg font-medium text-black hover:text-emerald-500 cursor-pointer ${
                activeQuestion === index ? "text-emerald-500" : ""
              }`}
              onClick={() => handleQuestionClick(index)}
            >
              {index + 1}. {question}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Employee;
