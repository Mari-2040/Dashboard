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
    <div className='ml-5 mt-5 grid gap-4 grid-cols-3 justify-items-center items-center'>
      <div className="min-w-full">
        <ColChart />
      </div>
      <div className="min-w-full">
        <MixedChart />
      </div>
      <div className="min-w-full">
        <CandleChart />
      </div>
      <div className="min-w-full">
        <PieChart />
      </div>
      <div className="min-w-full">
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
