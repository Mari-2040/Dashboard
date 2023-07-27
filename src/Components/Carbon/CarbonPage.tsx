import React from "react";
import CarbonRep from "./CarbonRep";
import CarbonSecret from "./CarbonSecret";

const CarbonPage = () => {
  return (
    <div className='pl-20 mt-10'>
      <div className=''>
        <div className="bg-[url('man1.svg')] w-[70%] h-52 shrink-0 over no-repeat bg-no-repeat bg-cover #d6d3d1">
          <CarbonSecret />
        </div>
      </div>
      <CarbonRep />
    </div>
  );
};

export default CarbonPage;
