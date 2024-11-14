"use client";
import React, { useState } from 'react';
import SeniorSchool from './SeniorSchool';
import JuniorSchool from './JuniorSchool';
import MiddleSchool from './MiddleSchool';

function SchoolInfo() {
    const [activeSection, setActiveSection] = useState("SeniorSchool");

    // Function to render the active component
    const renderActiveSection = () => {
      switch (activeSection) {
        case "SeniorSchool":
          return <SeniorSchool />;
        case "JuniorSchool":
          return <JuniorSchool />;
        case "MiddleSchool":
          return <MiddleSchool />;
        default:
          return <SeniorSchool />;
      }
    };
  
    return (
      <div className="w-full p-4 sm:p-8 lg:p-12  min-h-screen ">
        <div className="w-full  p-6 rounded-lg shadow-lg mt-8">
          {/* Navigation Buttons */}
          <div className="flex justify-evenly text-sm text-gray-600 mb-6">
            <button
              onClick={() => setActiveSection("SeniorSchool")}
              className={`px-4 py-2 rounded-lg ${
                activeSection === "SeniorSchool" ? "text-blue-600 font-semibold" : "hover:text-gray-800"
              }`}
            >
              Block A: Senior School
            </button>
            <button
              onClick={() => setActiveSection("JuniorSchool")}
              className={`px-4 py-2 rounded-lg ${
                activeSection === "JuniorSchool" ? "text-blue-600 font-semibold" : "hover:text-gray-800"
              }`}
            >
              Block B: Junior School
            </button>
            <button
              onClick={() => setActiveSection("MiddleSchool")}
              className={`px-4 py-2 rounded-lg ${
                activeSection === "MiddleSchool" ? "text-blue-600 font-semibold" : "hover:text-gray-800"
              }`}
            >
              Block C: Middle School
            </button>
          </div>
  
          {/* Render the active component */}
          <div>{renderActiveSection()}</div>
        </div>
      </div>
  );
}

export default SchoolInfo;