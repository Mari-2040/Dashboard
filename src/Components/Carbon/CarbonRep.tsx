import React, { useState } from "react";
import CarbonText from "./CarbonText";
import CarbonTable from "./CarbonTable";
const CarbonRep = () => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [progress, setProgress] = useState("");
  const [launch, setLaunch] = useState("");

  const [reportData, setReportData] = useState([
    {
      name: "Environmental",
      status: "Not Started",
      progress: "Question 1/9",
      launch: "Launch",
    },
    {
      name: "Social",
      status: "Not Started",
      progress: "Question 1/7",
      launch: "Launch",
    },
    {
      name: "Governance",
      status: "Not Started",
      progress: "Question 1/6",
      launch: "Launch",
    },
    {
      name: "Media",
      status: "Not Started",
      progress: "Question 2/6",
      launch: "Launch",
    },
    {
      name: "Info",
      status: "Not Started",
      progress: "Question 3/6",
      launch: "Launch",
    },
  ]);

  const handleAddReport = () => {
    if (name && status && progress && launch) {
      const newReport = {
        name: name,
        status: status,
        progress: progress,
        launch: launch,
      };
      setReportData([...reportData, newReport]);
      setName("");
      setStatus("");
      setProgress("");
      setLaunch("");
    }
  };

  return (
    <div className='mt-9 overflow-auto'>
      <div className='mt-6'>
        <h3 className='text-lg font-semibold'>Add New Report:</h3>
        <div className='mt-4 flex gap-7'>
          <input type='text' placeholder='Section Name' className='border px-3 py-2 rounded focus:outline-none' value={name} onChange={(e) => setName(e.target.value)}/>
          <input type='text' placeholder='Status' className='border px-3 py-2 rounded focus:outline-none' value={status} onChange={(e) => setStatus(e.target.value)}/>
          <input type='text' placeholder='Progress' className='border px-3 py-2 rounded focus:outline-none' value={progress} onChange={(e) => setProgress(e.target.value)}/>
          <input type='text' placeholder='Launch' className='border px-3 py-2 rounded focus:outline-none' value={launch} onChange={(e) => setLaunch(e.target.value)}/>
        </div>
        <button className='animate-gradient4 mt-3 text-slate-800 font-normal px-4 py-2 rounded' onClick={handleAddReport}> Add Report </button>
      </div>
      <CarbonText />
      <CarbonTable reportData = {reportData} />
    </div>
  );
};

export default CarbonRep;
