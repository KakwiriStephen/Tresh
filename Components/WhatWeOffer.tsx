import React from "react";

function WhatWeOffer() {
  return (
    <div className="bg-[#EDEEF5] py-12 px-4">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">
        What We Offer
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Senior School */}
        <div className=" bg-white p-6 rounded-lg shadow-md text-center cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            BLOCK A: SENIOR SCHOOL
          </h3>
          <p className="text-gray-600">A Level College</p>
        </div>

        {/* Junior School */}
        <div className=" bg-white p-6 rounded-lg shadow-md text-center cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            BLOCK B: JUNIOR SCHOOL
          </h3>
          <p className="text-gray-600">KS1/KS2: iPrimary</p>
        </div>

        {/* Middle School */}
        <div className=" bg-white p-6 rounded-lg shadow-md text-center cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            BLOCK C: MIDDLE SCHOOL
          </h3>
          <p className="text-gray-600">KS3: iLower Secondary</p>
        </div>
      </div>
    </div>
  );
}

export default WhatWeOffer;
