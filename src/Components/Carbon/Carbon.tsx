import React from "react";
import CarbonPage from "./CarbonPage";
import CarbQuesage from "./CarbQuesage";

const Carbon = () => {
  return (
    <div>
      <div className='flex gap-20 p-6 text-black font-normal w-full font-sans leading-normal bg-[#F1F1F2;] rounded-t-lg '>
        <div className=''>ESG Score</div>
        <div>Questionnaire</div>
        <div>History</div>
      </div>
      {/* <CarbonPage /> */}
      <CarbQuesage isDropdownOpen={undefined}/>
    </div>
  );
};

export default Carbon;
