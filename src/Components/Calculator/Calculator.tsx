import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("");
  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setDisplay(eval(display).toString());
      } catch (error) {
        setDisplay("Error");
      }
    } else if (value === "C") {
      setDisplay("");
    } else if (value === "Backspace") {
      setDisplay((prevDisplay) => prevDisplay.slice(0, -1));
    } else {
      setDisplay((prevDisplay) => prevDisplay + value);
    }
  };

  const handleKeyboardInput = (event) => {
    const key = event.key;
    if (key === "Enter") {
      handleButtonClick("=");
    } else if (key === "Escape") {
      handleButtonClick("C");
    } else if (key === "Backspace") {
      handleButtonClick("Backspace");
    } else if (!isNaN(key) || key === "." || "+-*/%".includes(key)) {
      handleButtonClick(key);
    }
  };

  return (
    <div className='flex'>
      <div
        className='bg-indigo-900 p-4 rounded-md shadow-md w-72 mx-auto mt-10 text-white focus:outline-none'
        tabIndex={0} 
        onKeyDown={handleKeyboardInput}
      >
        <div className='text-3xl font-bold mb-4 text-center'>
          {display || "0"}
        </div>
        <div className='grid grid-cols-4 gap-2 '>
          {[7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", 0, ",", "=", "/"].map(
            (value) => (
              <button key={value}
                className='bg-pink-300 rounded-lg p-3 text-xl text-white focus:outline-none'
                onClick={() => handleButtonClick(value)}
              >
                {value}
              </button>
            )
          )}
          <button
            className='focus:outline-none bg-red-500 rounded-lg w-64 p-3 text-xl text-white'
            onClick={() => handleButtonClick("C")}
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
