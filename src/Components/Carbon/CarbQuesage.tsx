import React, { useState } from "react";
import CarbQuesageTable from "./CarbQuesageTable";
import CarbonText from "./CarbonText";
import CarbQuesInput from "./CarbQuesInput";
import Esg from "./Esg";

const CarbQuesage = () => {
  const [showEsg, setShowEsg] = useState(true);
  const handleToggleEsg = () => {setShowEsg((prevEsg) => !prevEsg);};

  return (
    <div>
      {showEsg ? (
        <>
          <div className='px-24 py-5'>
            <div className='text-3xl font-bold text-black'> ESG Questionnaire </div>
            <div className='text-xl font-normal text-black mt-1'> Take the questionnaire to determine your ESG score. </div>
            <CarbonText />
            <CarbQuesageTable />
            <CarbQuesInput onClick={handleToggleEsg} handleToggleEsg={handleToggleEsg} />
          </div>
        </>
      ) : (
        <Esg />
      )}
    </div>
  );
};

export default CarbQuesage;
