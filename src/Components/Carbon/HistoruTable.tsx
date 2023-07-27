import React, { useState } from "react";
const HistoruTable = () => {
  const [reportData, setReportData] = useState([
    {
      name: "Social",
      status: "April 14, 2023",
      launch: "View",
      launch1: "Retake",
    },
    {
      name: "Governance",
      status: "April 15, 2020",
      launch: "View",
      launch1: "Retake",
    },
    {
      name: "Environmental",
      status: "April 16, 2020",
      launch: "View",
      launch1: "Retake",
    },
    {
      name: "Social",
      status: "April 17, 2023",
      launch: "View",
      launch1: "Retake",
    },
    {
      name: "Environmental",
      status: "April 16, 2024",
      launch: "View",
      launch1: "Retake",
    },
    {
      name: "Governance",
      status: "April 18, 2023",
      launch: "View",
      launch1: "Retake",
    },
    {
      name: "Media",
      status: "April 18, 2023",
      launch: "View",
      launch1: "Retake",
    },
    {
      name: "Build",
      status: "April 18, 2023",
      launch: "View",
      launch1: "Retake",
    },
  ]);

  return (
    <div>
      <div className='bg-white shadow-md rounded-lg overflow-hidden border w-[93%] mt-6 '>
        <table className='w-full'>
          <tbody className='divide-y divide-gray-200 '>
            {reportData.map((item, index) => (
              <tr key={index} className='hover:bg-gray-50' >
                <td className='px-6 py-4 whitespace-nowrap border-r-1 text-[#000000] border-gray-300 hover:cursor-pointer'>
                  {item.name}
                </td>
                <div className='relative'>
                  <div className='px-6 py-4 whitespace-nowrap border-l-2 text-[#6A6A6A] border-r-1 text-sm flex gap-3 items-center border-gray-300 hover:cursor-pointer'>
                    {item.status}
                  </div>
                </div>
                <td className='px-6 py-4 whitespace-nowrap border-l-2 ml-5 border-r-1 text-[#0F66CC] text-sm border-gray-300 hover:cursor-pointer'>
                  {item.launch} {item.launch1}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoruTable;
