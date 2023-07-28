import React, { useState } from "react";

const Question = () => {
  const [selectedOptions, setSelectedOptions] = useState(Array(6).fill(null));
  const options = [
    [
      "Scope 1 - Determine environmental impact levels.",
      "Scope 2 - Reduce carbon footprints.",
      "Scope 3 - Enhance environmental impacts on a larger scale.",
      "I do not know the answer to this question",
    ],
    [
      "Scope 1 - Determine environmental impact levels.",
      "Scope 2 - Reduce carbon footprints.",
      "Scope 3 - Enhance environmental impacts on a larger scale.",
      "I do not know the answer to this question",
    ],
    [
      "Scope 1 - Determine environmental impact levels.",
      "Scope 2 - Reduce carbon footprints.",
      "Scope 3 - Enhance environmental impacts on a larger scale.",
      "I do not know the answer to this question",
    ],
  ];

  const handleOptionChange = (questionIndex, option) => {
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.map((selectedOption, index) =>
        index === questionIndex ? option : selectedOption
      )
    );
  };

  return (
    <div>
      {options.map((questionOptions, index) => (
        <div key={index} className="p-4">
          <h1 className="text-2xl font-bold mb-4">Question {index + 1}:</h1>
          <p className="text-lg mb-4">
            For Fiscal year 2021, what was your total GhG Carbon Emission for all
            scopes?
          </p>
          <div className="space-y-4">
            {questionOptions.map((option, optionIndex) => (
              <div key={option} className="flex items-center space-x-2">
                <input
                  type="radio"
                  id={`question-${index}-option-${optionIndex}`}
                  value={option}
                  checked={selectedOptions[index] === option}
                  onChange={() => handleOptionChange(index, option)}
                  className="form-radio text-blue-500 h-4 w-4"
                />
                <label htmlFor={`question-${index}-option-${optionIndex}`} className="text-lg">
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Question;
