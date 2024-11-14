import React from "react";
import HomeBanner from "../../Components/HomeBanner";
import About from "@/Components/AboutComponent";
import WhatWeOffer from "@/Components/WhatWeOffer";
import Community from "@/Components/Community";
import CulturalActivities from "@/Components/CulturalActivities";
import Reporting from "@/Components/Reporting";

function Page() {
  return (
    <>
      <HomeBanner />
      <About />
      <WhatWeOffer />
      <Community />
      <CulturalActivities />
      <Reporting />
    </>
  );
}

export default Page;
