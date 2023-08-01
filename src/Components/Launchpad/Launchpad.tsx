import React from "react";
import ColChart from "../Charts/ColChart";
import MixedChart from "../Charts/MixedChart"
import CandleChart from "../Charts/CandleChart";
import PieChart from "../Charts/PieChart";
import RadialChart from "../Charts/RadialChart";
import MedianChart from "../Charts/MedianChart";
import RadarChart from "../Charts/RadarChart";

const Launchpad = () => {
  return (
    <div className='px-1 mt-5 grid grid-cols-2 justify-items-center items-center overflow-x-hidden'>
      <div className="min-w-[80%]">
        <ColChart />
      </div>
      <div className="min-w-[80%]">
        <MixedChart />
      </div>
      <div className="min-w-[80%]">
        <CandleChart />
      </div>
      <div className="min-w-[80%]">
        <PieChart />
      </div>
      <div className="min-w-[80%]">
        <RadialChart />
      </div>
      <div className="min-w-full">
        <MedianChart />
      </div>
      <div className="min-w-full">
        <RadarChart />
      </div>
    </div>
  );
};

export default Launchpad;
