import React, { useState } from "react";
import ColChart from "../Charts/ColChart";
import CandleChart from "../Charts/CandleChart";
import MedianChart from "../Charts/MedianChart";
import PieChart from "../Charts/PieChart";
import RadarChart from "../Charts/RadarChart";
import RadialChart from "../Charts/RadialChart";

const Analyze = () => {
  const [activeSection, setActiveSection] = useState("Overall");
  const sections = [
    { title: "Overall Statistics", id: "Overall" },
    { title: "User Engagement", id: "Engagement" },
    { title: "Conversion Rates", id: "Conversion" },
    { title: "Traffic Sources", id: "Traffic" },
    { title: "Geographical Analysis", id: "Geographical" },
    { title: "Device and Browser Analytics", id: "Device" },
  ];
  const handleSectionChange = (id) => {setActiveSection(id)};

  return (
    <div className='bg-gray-100'>
      <header className='animate-gradient6 py-4'>
        <div className='container mx-auto'>
          <h1 className='text-4xl font-bold text-white text-center'>
            Analysis Dashboard
          </h1>
        </div>
      </header>

      <nav className='bg-blue-300 p-4'>
        <div className='container mx-auto flex space-x-4'>
          {sections.map((section) => (
            <button key={section.id} onClick={() => handleSectionChange(section.id)}
              className={`text-black font-normal px-3 py-2 rounded ${
                activeSection === section.id ? "bg-pink-100 animate-bounce" : "font-medium"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>
      </nav>

      <div className='container py-8 grid gap-8 overflow-hidden'>
        {activeSection === "Overall" && (
          <section className='mx-auto p-6 bg-white rounded-lg shadow-md min-w-full'>
            <ColChart />
          </section>
        )}

        {activeSection === "Engagement" && (
          <section className='mx-auto min-w-[100%] p-6 bg-white rounded-lg shadow-md'>
            <CandleChart />
          </section>
        )}

          {activeSection === "Conversion" && (
            <section className='mx-auto min-w-[90%] p-6 bg-white rounded-lg shadow-md'>
              <MedianChart />
            </section>
          )}

         {activeSection === "Traffic" && (
          <section className='mx-auto min-w-[90%] p-6 bg-white rounded-lg shadow-md'>
            <PieChart />
          </section>
        )}
         {activeSection === "Geographical" && (
          <section className='mx-auto min-w-[90%] p-6 bg-white rounded-lg shadow-md'>
            <RadarChart />
          </section>
        )}
         {activeSection === "Device" && (
          <section className='mx-auto min-w-[90%] p-6 bg-white rounded-lg shadow-md'>
            <RadialChart />
          </section>
        )}
      </div>
    </div>
  );
};

export default Analyze;
