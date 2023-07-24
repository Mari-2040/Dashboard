import React from "react";

const data = [
  {
    name: "Environmental",
    status: "Not Started",
    progress: "Question 1/9",
    action: "Launch",
  },
  {
    name: "Social",
    status: "Not Started",
    progress: "Question 1/7",
    action: "Launch",
  },
  {
    name: "Governance",
    status: "Not Started",
    progress: "Question 1/6",
    action: "Launch",
  },
];

const CarbonRep = () => {
  return (
    <div className='mt-9'>
      <div className='bg-white shadow-md rounded-lg overflow-hidden border w-4/5'>
        <table className='w-full'>
          <thead>
            <tr className='bg-gray-800 text-white'>
              <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border-l-4 border-r-4 border-gray-900'>
                SECTION
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border-l-4 border-r-4 border-gray-900'>
                STATUS
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border-l-4 border-r-4 border-gray-900'>
                PROGRESS
              </th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {data.map((item, index) => (
              <tr
                key={index}
                className='hover:bg-gray-50'
              >
                <td className='px-6 py-4 whitespace-nowrap border-l-4 border-r-1 border-gray-300'>
                  {item.name}
                </td>
                <td className='px-6 py-4 whitespace-nowrap border-l-4 border-r-1 border-gray-300'>
                  {item.status}
                </td>
                <td className='px-6 py-4 whitespace-nowrap border-l-4 border-r-1 border-gray-300'>
                  {item.progress}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CarbonRep;
