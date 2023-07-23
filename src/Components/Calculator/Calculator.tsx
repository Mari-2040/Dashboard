import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        // Using eval to evaluate the mathematical expression
        setDisplay(eval(display).toString());
      } catch (error) {
        setDisplay("Error");
      }
    } else if (value === "C") {
      // Clear the display
      setDisplay("");
    } else {
      // Append the clicked button value to the display
      setDisplay((prevDisplay) => prevDisplay + value);
    }
  };

  const handleKeyboardInput = (event) => {
    const key = event.key;
    if (key === "Enter") {
      // For the equal sign, evaluate the expression
      handleButtonClick("=");
    } else if (key === "Escape") {
      // For the "C" key, clear the display
      handleButtonClick("C");
    } else if (!isNaN(key) || key === "." || "+-*/%".includes(key)) {
      // For numbers and operators, update the display
      handleButtonClick(key);
    }
  };

  return (
    <div
      className='bg-gray-200 p-4 rounded-md shadow-md w-72 mx-auto mt-10'
      onKeyDown={handleKeyboardInput} // Attach onKeyDown event to the div
    >
      <div className='text-3xl font-bold mb-4 text-center'>
        {display || "0"}
      </div>
      <div className='grid grid-cols-4 gap-2'>
        {[7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", 0, ",", "=", "/"].map(
          (value) => (
            <button
              key={value}
              className='bg-gray-300 rounded-lg p-3 text-xl text-gray-800'
              onClick={() => handleButtonClick(value)}
            >
              {value}
            </button>
          )
        )}
        <button
          className='bg-red-500 rounded-lg w-64 p-3 text-xl text-white'
          onClick={() => handleButtonClick("C")}
        >
          C
        </button>
      </div>
    </div>
  );
};

export default Calculator;
