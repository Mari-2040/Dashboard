import React, { useState } from "react";

const HistoryText = () => {
  const [selectedOption, setSelectedOption] = useState("QUESTIONNAIRE");
  const [selecteData, setSelecteData] = useState("DATE COMPLETED");
  const [selecteAct, setSelecteAct] = useState("ACTION");

  const handleOptionChange = (event) => { setSelectedOption(event.target.value)};
  const handleData = (event) => { setSelecteData(event.target.value)};
  const handleAct = (event) => { setSelecteAct(event.target.value)};


  const options = ["QUESTIONNAIRE", "DATE COMPLETED", "ACTION"];
  const date = ["DATE COMPLETED", "QUESTIONNAIRE", "ACTION"];
  const action = ["ACTION", "QUESTIONNAIRE", "DATE COMPLETED"];

  return (
    <div>
      <div className='justify-around mt-10 text-sm font-bold text-[#101011] flex focus:outline-none'>
        <select id='selectOption' value={selectedOption}  onChange={handleOptionChange} className='cursor-pointer text-black border border-gray-100 px-3 py-2 rounded-md focus:outline-none mr-20'>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <select id='selectOption' value={selecteData} onChange={handleData} className='cursor-pointer text-black border border-gray-100 px-3 py-2 rounded-md focus:outline-none mr-20'>
          {date.map((option) => (
            <option key={option} value={option}> 
                {option} 
            </option>
          ))}
        </select>

        <select id='selectOption' value={selecteAct} onChange={handleAct} className='cursor-pointer text-black border border-gray-100 px-3 py-2 rounded-md focus:outline-none mr-20'>
          {action.map((option) => (
            <option key={option}value={option}>
              {option}
            </option>
          ))}
        </select>
        
      </div>
    </div>
  );
};

export default HistoryText;
// sr-only
