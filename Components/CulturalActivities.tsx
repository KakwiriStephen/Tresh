import React from "react";

function CulturalActivities() {
  return (
    <div className="bg-[#1C3C6C] py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-white text-3xl font-bold mb-8">
          Cultural Activities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Image 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="/assets/Frame 1000001762.png"
              alt="Cultural Activity 1"
              className="w-full h-auto rounded-md"
            />
          </div>

          {/* Image 2 with white dash below */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg relative">
            <img
              src="/assets/Frame 1000001763.png"
              alt="Cultural Activity 2"
              className="w-full h-auto rounded-md"
            />
            <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-white z-10"></div>
          </div>

          {/* Image 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="/assets/Frame 1000001764.png"
              alt="Cultural Activity 3"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CulturalActivities;
