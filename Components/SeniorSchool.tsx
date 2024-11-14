import React from 'react'

function SeniorSchool() {
  return (
    <div className="w-full p-4 sm:p-8 lg:p-12 bg-gray-100 min-h-screen">
      <div className="w-full bg-gray-100 ">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold">A Level College</h1>
          <p className="text-gray-700 mt-4">
            This includes; (IAS – Year 12 / Form 5, and A2 – Year 13 / Form 6).
            In each Form, we only conduct Regular Classes which run from 7.20 am
            to 3.40 pm Monday to Friday, and from 9.00 am to 1.00 pm on
            Saturdays. Intake for Year 12 and Year 13 is done once – in
            September every year.
          </p>
        </div>

        {/* Subject Cards */}
        <div className="subjects">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
            Range of Teaching Subjects
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200 min-h-[200px] w-[70%] mx-auto transform transition duration-300 hover:scale-105 hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_2px_4px_0px_rgba(171,190,209,0.2)]">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Mathematics - Pure Maths, Mechanics, Statistics</li>
              <li>English Language</li>
              <li>English Literature</li>
              <li>Physics</li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200 min-h-[200px] w-[70%] mx-auto transform transition duration-300 hover:scale-105 hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_2px_4px_0px_rgba(171,190,209,0.2)]">
            <h2 className="sr-only">Additional Subjects</h2>{" "}
            {/* Hidden heading for screen readers */}
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
              <li>Chemistry</li>
              <li>Biology</li>
              <li>Business</li>
              <li>Economics</li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200 min-h-[200px] w-[70%] mx-auto transform transition duration-300 hover:scale-105 hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_2px_4px_0px_rgba(171,190,209,0.2)]">
            <h2 className="sr-only">Other Subjects</h2>{" "}
            {/* Hidden heading for screen readers */}
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
              <li>Geography</li>
              <li>History</li>
              <li>Information Technology (IT)</li>
            </ul>
          </div>
        </div>

        {/* IGCSE Section */}
        <div className="mt-8  p-4">
          <h2 className="text-xl font-semibold text-center">KS4: IGCSE</h2>
          <p className="text-gray-700 mt-4">
            IGCSE (Year 10 & Year 11), we have Regular Classes which run from
            7.30 am to 3.40 pm Monday to Friday. Religious (Quran & Bible study)
            take place every morning between 7.20 am and 7.50 am every Monday to
            Thursday.
          </p>
          <p className="text-gray-700 mt-4">
            We strictly don’t have any intake for Year 11. Year 10 Intake are
            only done in Term 1 between 1st September and 30th November
            annually.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SeniorSchool
