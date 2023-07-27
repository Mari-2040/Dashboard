import React, { useState } from "react";

const Question = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const options = [
    "Scope 1 - Determine environmental impact levels.",
    "Scope 2 - Reduce carbon footprints.",
    "Scope 3 - Enhance environmental impacts on a larger scale.",
    "I do not know the answer to this question",
  ];

  const options2 = [
    "Scope 1 - Determine environmental impact levels.",
    "Scope 2 - Reduce carbon footprints.",
  ]

  const handleOptionChange = (option) => { setSelectedOption(option)};
  const handleOptionChange2 = (option2) => { setSelectedOption2(option2)};


  return (
    <div>
      <div className='p-4 '>
        <h1 className='text-2xl font-bold mb-4'>Question 1:</h1>
        <p className='text-lg mb-4'> For Fiscal year 2021, what was your total GhG Carbon Emission for all scopes? </p>
        <div className='space-y-4'>
          {options.map((option) => (
            <div key={option} className='flex items-center space-x-2' >
              <input type='radio' id={option} value={option} checked={selectedOption === option}
                onChange={() => handleOptionChange(option)}
                className='form-radio text-blue-500 h-4 w-4'
              />
              <label htmlFor={option} className='text-lg'> {option} </label>
            </div>
          ))}
        </div>
      </div>

      <div className='p-4 '>
        <h1 className='text-2xl font-bold mb-4'>Question 2:</h1>
        <p className='text-lg mb-4'> For Fiscal year 2021, what was your total GhG Carbon Emission for all scopes? </p>
        <div className='space-y-4'>
          {options.map((option) => (
            <div key={option} className='flex items-center space-x-2'>
              <input type='radio' id={option} value={option} checked={selectedOption === option}
                onChange={() => handleOptionChange(option)}
                className='form-radio text-blue-500 h-4 w-4'
              />
              <label htmlFor={option} className='text-lg' > {option} </label>
            </div>
          ))}
        </div>
      </div>

      <div className='p-4 '>
        <h1 className='text-2xl font-bold mb-4'>Question 3:</h1>
        <p className='text-lg mb-4'> For Fiscal year 2021, what was your total GhG Carbon Emission for all scopes? </p>
        <div className='space-y-4'>
          {options.map((option) => (
            <div key={option} className='flex items-center space-x-2'>
              <input type='radio' id={option} value={option} checked={selectedOption === option}
                onChange={() => handleOptionChange(option)}
                className='form-radio text-blue-500 h-4 w-4'
              />
              <label htmlFor={option} className='text-lg'> {option} </label>
            </div>
          ))}
        </div>
      </div>

      <div className='p-4 '>
        <h1 className='text-2xl font-bold mb-4'>Question 4:</h1>
        <p className='text-lg mb-4'> For Fiscal year 2021, what was your total GhG Carbon Emission for all scopes? </p>
        <div className='space-y-4'>
          {options.map((option) => (
            <div key={option} className='flex items-center space-x-2'>
              <input type='radio' id={option} value={option} checked={selectedOption === option}
                onChange={() => handleOptionChange(option)}
                className='form-radio text-blue-500 h-4 w-4'
              />
              <label htmlFor={option} className='text-lg'> {option} </label>
            </div>
          ))}
        </div>
      </div>

      <div className='p-4 '>
        <h1 className='text-2xl font-bold mb-4'>Question 5:</h1>
        <p className='text-lg mb-4'> For Fiscal year 2021, what was your total GhG Carbon Emission for all scopes? </p>
        <div className='space-y-4'>
          {options.map((option) => (
            <div key={option} className='flex items-center space-x-2'>
              <input type='radio' id={option} value={option} checked={selectedOption === option}
                onChange={() => handleOptionChange(option)}
                className='form-radio text-blue-500 h-4 w-4'
              />
              <label htmlFor={option} className='text-lg'> {option} </label>
            </div>
          ))}
        </div>
      </div>

      <div className='p-4 '>
        <h1 className='text-2xl font-bold mb-4'>Question 6:</h1>
        <p className='text-lg mb-4'> For Fiscal year 2021, what was your total GhG Carbon Emission for all scopes? </p>
        <div className='space-y-4'>
          {options2.map((option2) => (
            <div key={option2} className='flex items-center space-x-2'>
              <input type='radio' id={option2} value={option2} checked={selectedOption === option2}
                onChange={() => handleOptionChange2(option2)}
                className='form-radio text-blue-500 h-4 w-4'
              />
              <label htmlFor={option2} className='text-lg'> {option2} </label>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Question;
