import React, { useState } from "react";
import CarbonPage from "./CarbonPage";
import CarbQuesage from "./CarbQuesage";
import History from "./History";

const Carbon = () => {
  const [activeSection, setActiveSection] = useState("ESG");

  const handleSectionChange = (id) => {setActiveSection(id) };

  const sections = [
    { title: "ESG Score", id: "ESG" },
    { title: "Questionnaire", id: "Questionnaire" },
    { title: "History", id: "History" },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case "ESG":
        return <CarbonPage />;
      case "Questionnaire":
        return <CarbQuesage isDropdownOpen={undefined} />;
      case "History":
        return <History />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex text-black font-normal bg-[#F1F1F2] container space-x-10">
        {sections.map((section) => (
          <button key={section.id} onClick={() => handleSectionChange(section.id)}
            className={`text-black px-7 rounded ${
              activeSection === section.id ? "py-4 px-8 bg-white font-bold text-[#2E64C5] " : ""
            }`}
          >
            {section.title}
          </button>
        ))}
      </div>

      <div>
        {renderSection()}
      </div>
    </div>
  );
};

export default Carbon;
