import React, { useState } from "react";
import Employe from "./Employe";
import Question1 from "./Question1";

const Esg = () => {
  const social = ["Social", "Faceboock", "Instagram", "Youtube"];
  const [selectedSocial, setSelectedSocial] = useState("Social");
  const handleSocial = (event) => { setSelectedSocial(event.target.value) };

  return (
    <div>
      <div className='flex justify-between px-6 py-6 border-b-2'>
        <div className='text-size2'>
          Take the questionnaire to determine your ESG Score
        </div>
        <div>
          <select id='selectOption' value={selectedSocial}
            onChange={handleSocial}
            className='cursor-pointer text-black border border-gray-200 w-44 h-10 px-2 text-size rounded-md focus:outline-none '
          >
            {social.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className=" flex gap-16">
        <Employe/>
        <Question1/>
      </div>
    </div>
  );
};

export default Esg;
