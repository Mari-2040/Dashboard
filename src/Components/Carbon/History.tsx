import React, { useState } from "react";
import HistoruTable from "./HistoruTable";
import HistoryText from "./HistoryText";
import HistoryCvs from "./HistoryCvs";

const History = () => {
  const [showPageContent, setShowPageContent] = useState(true);
  const handleToggleHistory = () => { setShowPageContent((prevState) => !prevState)};
  

  return (
    <div className='items-center p-8 border-[#CCC]'>
      {showPageContent ? (
        <>
          <div className='flex gap-20'>
            <div className='text-[#101011] font-normal text-lg ml-4'>
              View your previous responses to the questionnaire
            </div>
            <div>
              <button
                className='text-white font-normal px-4 py-2 circle rounded-lg focus:outline-none'
                onClick={handleToggleHistory}
              >
                Questionnaire
              </button>
            </div>
          </div>
          <HistoryText />
          <HistoruTable />
        </>
      ) : (
        <HistoryCvs />
      )}
    </div>
  );
};

export default History;
