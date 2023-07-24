import React from "react";
import CarbonPage from "./CarbonPage";

const Carbon = () => {
  return (
    <div>
      <div className='flex gap-20 p-6 text-black font-normal font-sans leading-normal bg-[#F1F1F2;] rounded-t-lg '>
        <div className=''>ESG Score</div>
        <div>Questionnaire</div>
        <div>History</div>
      </div>
      <CarbonPage />
    </div>
  );
};

export default Carbon;
