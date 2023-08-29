import React, { useState } from "react";

export default function Loader() {
  const [clicked, setClicked] = useState(false);

  const handleButtonClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="mt-10 height-[50vh] flex justify-center items-center flex-col gap-2 font-semibold">
      <div className="p-6 rounded-lg bg-[pink] shadow-lg max-w-md">
        <div className="header-section">
          <button
            className={`btn-add ${clicked ? "rotate" : ""} p-2 rounded-full bg-blue-500 text-white items-center hover:bg-blue-600 transition-all`}
            id="add"
            onClick={handleButtonClick}
          >
            {clicked ? "--" : "+"}
          </button>
          <div className={`dialog-section ${clicked ? "show" : ""} p-4 bg-gray-200 rounded-lg mt-4 shadow-md transition-all`}>
            <h3 className="text-lg font-semibold mb-2">Item Added</h3>
            <p>Your item was successfully added wherever you want to! 😄</p>
          </div>
          <div className="container p-4 bg-white rounded-lg mt-4 shadow-md">
            <h1 className="text-2xl font-bold mb-2">Add Item</h1>
            <p className="text-gray-700">
              Welcome to the Enchanted Forest Retreat. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
