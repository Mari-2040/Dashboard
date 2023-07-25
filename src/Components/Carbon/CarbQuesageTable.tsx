import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import DropDow from "./DropDow";

const CarbQuesageTable = () => {
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
      icon: (
        <AiFillCaretDown
          color='black'
          size={18}
        />
      ),
      progress: "Question 1/6",
      launch: "Launch",
    },
  ]);
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className='bg-white shadow-md rounded-lg overflow-hidden border w-[93%] mt-6'>
        <table className='w-full'>
          <tbody className='bg-white divide-y divide-gray-200'>
            {reportData.map((item, index) => (
              <tr key={index} className='hover:bg-gray-50'>
                <td className='px-6 py-4 whitespace-nowrap border-r-1 text-[#000000] border-gray-300 hover:cursor-pointer'>
                  {item.name}
                </td>
                <div onClick={handleDropdownClick} className="relative">
                  <div className='px-6 py-4 whitespace-nowrap border-l-2 text-[#6A6A6A] border-r-1 text-sm flex gap-3 items-center border-gray-300 hover:cursor-pointer'>
                    {item.status} {item.icon}
                  </div>
                </div>
                <td className='px-6 py-4 whitespace-nowrap border-l-2 text-[#6A6A6A] border-r-1 text-sm border-gray-300 hover:cursor-pointer'>
                  {item.progress}
                </td>
                <td className='px-6 py-4 whitespace-nowrap border-l-2 border-r-1 text-[#0F66CC] text-sm border-gray-300 hover:cursor-pointer'>
                  {item.launch}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <DropDow isDropdownOpen={isDropdownOpen} />
    </div>
  );
};

export default CarbQuesageTable;
