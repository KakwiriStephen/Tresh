import Image from "next/image"; // If using Next.js for image optimization
import React from "react";
import eventImage from "../public/assets/about.jpeg"; // Adjust path as needed

export default function AboutComponent() {
  return (
    <section className="bg-white py-8 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-8">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
          <Image
            src={eventImage} // The image path uploaded
            alt="Judging Event"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            About Us <br />
            <span className="text-[#3A3B7B]">Quality Education at TIS</span>
          </h2>
          <p className="text-gray-700 mt-4">
            At Treshaw International School, we focus on the whole child – the
            social, emotional, mental, physical, and cognitive development of
            each student regardless of gender, race, ethnicity, socioeconomic
            status, or geographical location. We prepare each child for life,
            not just for testing.
          </p>
          <a href="/about">
            <button className="mt-6 px-6 py-3 bg-[#2CB34C] text-white rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:shadow-lg transition duration-300">
              Learn More{" "}
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
