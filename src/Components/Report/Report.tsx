import React from "react";
const data = [
  { id: 1, name: "John Doe", age: 28, worc: "USE", salary: 50000 },
  { id: 2, name: "Jane Smith", age: 32, worc: "SEU", salary: 60000 },
  { id: 3, name: "Bob Johnson", age: 25, worc: "TKT", salary: 45000 },
  { id: 4, name: "Alice Brown", age: 40, worc: "DEL", salary: 65000 },
  { id: 5, name: "Alice Brown", age: 50, worc: "SAMSUNG", salary: 57000 },
  { id: 6, name: "Alice Brown", age: 30, worc: "ASUC", salary: 85000 },
];

const Report = () => {
  return (
    <div className='container mx-auto p-8 animate-gradient'>
      <h1 className='text-3xl font-bold mb-4 text-white'>Report</h1>
      <div className='bg-white shadow-md rounded-lg overflow-hidden '>
        <table className='w-full divide-y divide-gray-200'>
          <thead className='bg-gray-50 animate-gradient2'>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider cursor-pointer '>
                ID
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider cursor-pointer'>
                Name
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider cursor-pointer'>
                Age
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider cursor-pointer'>
                Worc
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider cursor-pointer'>
                Salary
              </th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {data.map((item) => (
              <tr key={item.id}>
                <td className='px-6 py-4 whitespace-nowrap'>{item.id}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{item.name}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{item.age}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{item.worc}</td>
                <td className='px-6 py-4 whitespace-nowrap'>${item.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Report;
