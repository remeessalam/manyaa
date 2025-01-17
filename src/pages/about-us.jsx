// import SectionClients2 from "../../sections/home/index2/section-clients2";
// import { bannerData } from "../../../globals/banner";
import { useEffect } from "react";
import { loadScript } from "../globals/constants";
import asdf from "../";
import banner from "../assets/images/aboutusbanner.jpg";
import Banner from "../Components/banner";
import SectionAboutCompany1 from "../Components/section-about-company1";
import SectionServices1 from "../Components/section-services1";
import SectionVideo2 from "../Components/section-video2";
import SectionWhyChooseUs4 from "../Components/section-why-choose-us4";
import Sectionoursolutiion from "../Components/section-our-solution";
import Testimonials from "../Components/Testimonials";
import OurValues from "../Components/OurValues";
import SectionBlogs1 from "../app/sections/home/index/section-blogs1";

function AboutUsPage() {
  useEffect(() => {
    loadScript("js/custom.js");
  });

  return (
    <>
      <Banner _data={banner} page={"About Us"} />
      <SectionAboutCompany1 />
      <SectionServices1 />
      <OurValues />
      {/* <SectionVideo2 /> */}
      <SectionBlogs1 />

      {/* <SectionWhyChooseUs4 /> */}
      <Sectionoursolutiion />
      <Testimonials />
      {/* <SectionClients2 /> */}
    </>
  );
}

export default AboutUsPage;
