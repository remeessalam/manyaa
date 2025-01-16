import SectionSlider1 from "../app/sections/home/index/section-slider1";
import SectionServices1 from "../Components/section-services1";
import SectionWhyChooseUs1 from "../app/sections/home/index/section-why-choose-us1";
// import SectionVideo1 from "../../sections/home/index/section-video1";
// import SectionPricing1 from "../../sections/home/index/section-pricing1";
// import SectionClients1 from "../../sections/home/index/section-clients1";
// import SectionCaseStudy1 from "../../sections/home/index/section-case-study1";
import SectionBlogs1 from "../app/sections/home/index/section-blogs1";
import { useEffect } from "react";
import { loadScript } from "../globals/constants";
import Sectionourresult from "../app/sections/home/index/section-our-result";
import SectionAboutCompany1 from "../Components/section-about-company1";
import OurValues from "../Components/OurValues";

function HomePage() {
  useEffect(() => {
    loadScript("js/custom.js");
  });

  return (
    <>
      <SectionSlider1 />
      <SectionAboutCompany1 />
      <SectionServices1 />
      <SectionWhyChooseUs1 />
      <OurValues />
      {/* <SectionVideo1 /> */}
      {/* <SectionPricing1 /> */}
      {/* <SectionClients1 /> */}
      {/* <SectionCaseStudy1 /> */}
      <SectionBlogs1 />
      <Sectionourresult />
    </>
  );
}

export default HomePage;
