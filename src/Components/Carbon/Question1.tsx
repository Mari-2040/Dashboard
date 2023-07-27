import React, { useState } from "react";
import Question1Botn from "./Question1Botn"

const Question1 = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionChange = (option) => { setSelectedOption(option)};
  const options = [
    "Scope 1 - Determine environmental impact levels.",
    "Scope 2 - Reduce carbon footprints.",
    "Scope 3 - Enhance environmental impacts on a larger scale.",
    "I do not know the answer to this question",
  ];

  return (
    <div>
      <div className="mt-7">
        <div>
          <div className="content"> Question 1/9</div>
          <div className="fisc">For Fiscal year 2021, what was your total GhG Carbon Emission for all scopes?</div>
        </div>
        <div className='space-y-4 mt-5'>
          {options.map((option) => (
            <div key={option} className='flex items-center space-x-2'>
              <input type='radio' id={option} value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionChange(option)}
                className='form-radio text-blue-500 h-4 w-4'
              />
              <label htmlFor={option} className='text-lg'> {option}</label>
            </div>
          ))}
        </div>
      </div>
      <Question1Botn/>
    </div>
  );
};

export default Question1;
