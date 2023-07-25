import React from "react";
import CarbQuesageTable from "./CarbQuesageTable";
import CarbonText from "./CarbonText"
const CarbQuesage = ({isDropdownOpen}) => {
  return (
    <div className="px-24 py-5">
      <div>
        <div className="text-3xl font-bold text-black">ESG Questionnaire</div>
        <div className="text-xl font-normal text-black mt-1">Take the questionnaire to determine your ESG score.</div>
      </div>
      <CarbonText/>
      <CarbQuesageTable />
    </div>
  );
};

export default CarbQuesage;
