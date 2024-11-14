import Community from "@/Components/Community";
import React from "react";

const About: React.FC = () => {
  return (
    <div>
      <section className="bg-[#1C3C6C]  flex items-center justify-center px-4 pt-28 pb-36 relative">
        <div className="flex relative items-center justify-center p-8 max-w-[1200px] mx-0 mt-10 z-10">
          {/* Main Glassmorphic Card */}
          <div className=" mt-10 flex flex-col items-center justify-center max-w-[640px] h-[420px] px-4 py-8 bg-[#FFFFFF1A] border border-gray-400 rounded-[66px] backdrop-blur-lg shadow-xl z-10">
            {/* Content */}
            <div className="text-center text-white px-6">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">About Us</h2>
              <h3 className="text-lg md:text-2xl font-semibold mb-4">
                Quality Education at TIS
              </h3>
              <p className="text-sm md:text-base">
                At Treshaw International School, we focus on the whole child –
                the social, emotional, mental, physical, and cognitive
                development of each student regardless of gender, race,
                ethnicity, socioeconomic status, or geographical location. We
                prepare each child for life, not just for testing.
              </p>
            </div>
          </div>
          {/* Top Left Image */}
          <div className="absolute top-[-50px]  left-[-160px]  md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-gray-400 hidden sm:block z-0 ">
            <img
              src="/assets/Ellipse 798.png"
              alt="Event"
              className="object-cover w-full h-full  "
              //   style={{ filter: "blur(8px)" }}
            />
          </div>
          {/* Bottom Right Image */}
          <div className="absolute bottom-[-50px] right-[-160px]  md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-gray-400 hidden sm:block z-0">
            <img
              src="/assets/Ellipse 799.png"
              alt="Event Stage"
              className="object-cover w-full h-full"
              //   style={{ filter: "blur(8px)" }}
            />
          </div>
          {/* Bottom left Image */}
          <div className="absolute top-[30px]  right-[-220px]  md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-gray-400 hidden sm:block z-0">
            <img
              src="/assets/Ellipse 800.png"
              alt="Event Stage"
              className="object-cover w-full h-full"
              //   style={{ filter: "blur(8px)" }}
            />
          </div>
          {/* Top Right Image */}
          <div className="absolute bottom-[-70px] right-[700px]  md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-gray-400 hidden sm:block z-0">
            <img
              src="/assets/Ellipse 801.png"
              alt="Event Stage"
              className="object-cover w-full h-full"
              //   style={{ filter: "blur(8px)" }}
            />
          </div>
        </div>
      </section>
      {/* <AboutComponent /> */}
      <Community />
    </div>
  );
};

export default About;
