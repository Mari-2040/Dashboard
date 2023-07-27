import React, { useState } from "react";
import Question from "./Question";

const HistoryCvs = () => {
  const [selectedSocial, setSelectedSocial] = useState("Social");
  const options = ["Social", "Faceboock", "Instagram", "Youtube"];
  const handleSocial = (event) => {
    setSelectedSocial(event.target.value);
  };

  return (
    <div>
      <div className="flex justify-between border-b-2 p-4">
        <div className="text-size2">Date completed: April 22, 2022</div>
        <div className="flex gap-6">
          <button className='text-white font-normal px-4 py-2 rounded bg-blue-500 hover:bg-blue-500 focus:outline-none'>
           Retake
          </button>
          <select id='selectOption' value={selectedSocial} onChange={handleSocial} className='cursor-pointer text-black border border-gray-200 w-44 text-size rounded-md focus:outline-none '>
            {options.map((option) => (
              <option key={option} value={option} >
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <Question/>
      </div>
    </div>
  );
};

export default HistoryCvs;
