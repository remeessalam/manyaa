import { useEffect } from "react";
import { loadScript } from "../../../../globals/constants";
import Banner from "../../../../Components/banner";

import SectionWhyChooseUs1 from "../../../sections/home/index/section-why-choose-us1";
import SectionAboutCompany1 from "../../../../Components/section-about-company1";
import SectionVideo2 from "../../../../Components/section-video2";
import SectionWhyChooseUs4 from "../../../../Components/section-why-choose-us4";
import banner from "../../../../assets/images/servicesbanner.jpg";
import SectionBlogs1 from "../../../sections/home/index/section-blogs1";
import Testimonials from "../../../../Components/Testimonials";

function ServicesPage() {
  useEffect(() => {
    loadScript("js/custom.js");
  });

  return (
    <>
      <Banner _data={banner} />
      <SectionWhyChooseUs1 />
      {/* <SectionAboutCompany1 /> */}
      {/* <SectionVideo2 /> */}
      {/* <SectionWhyChooseUs4 /> */}
      {/* <SectionClients2 /> */}
      <SectionBlogs1 />
      <Testimonials />
    </>
  );
}

export default ServicesPage;
