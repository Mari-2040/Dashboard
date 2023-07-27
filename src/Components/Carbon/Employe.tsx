import React, { useState } from "react";

const Employe = () => {
  const questions = [
    "What are the employee satisfaction?",
    "Is there a senior code of ethics?",
    "Suspendisse maximus neque?",
    "Donec accumsan odio eget aliquam?",
    "Nullam imperdiet arcu eget magna?",
    "Donec accumsan odio eget aliquam?",
    "Is there a senior code of ethics?",
    "What are the employee satisfaction?",
    "Senior code of ethics?",
    "Maximus neque malesuada sapien sollicitudin, eu.",
    "Donec odio eget aliquam.",
    "Nullam eget magna?",
    "Donec eget aliquam?",
    "Is there a code of ethics?",
  ];

  return (
    <div>
      <div className='max-h-80 max-w-md overflow-y-auto p-4 mt-4'>
        <ul className='space-y-4'>
          {questions.map((question, index) => (
            <li key={index} className='text-lg font-medium'>
              {index + 1}. {question}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Employe;
