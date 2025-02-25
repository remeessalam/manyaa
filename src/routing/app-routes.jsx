import { Route, Routes } from "react-router-dom";
// import FAQPage from "../app/components/company/faq";
// import GalleryPage from "../app/components/company/gallery";
// import IconsPage from "../app/components/company/icons";
// import PricingPage from "../app/components/company/pricing";
// import TeamPage from "../app/components/company/team";
import TestimonialsPage from "../app/components/company/testimonials";
// import WhyChooseUsPage from "../app/components/company/why-choose-us";
// import MissionVisionPage from "../app/components/IT solutions/mission-vision";
import ServicesPage from "../app/components/ITSolutions/services/services";
import ServicesDetailPage from "../app/components/ITSolutions/services/detail";
// import Portfolio1Page from "../app/components/IT solutions/portfolio/portfolio1";
// import Portfolio2Page from "../app/components/IT solutions/portfolio/portfolio2";
// import PortfolioDetailPage from "../app/components/IT solutions/portfolio/detail";
// import BlogGridPage from "../app/components/IT blogs/blog-grid";
// import BlogListSidebarPage from "../app/components/IT blogs/blog-list-sidebar";
// import BlogDetailPage from "../app/components/IT blogs/blog-detail";
// import BlogDetailSidebarPage from "../app/components/IT blogs/blog-detail-sidebar";
import ContactUsPage from "../app/components/contactus/contact-us";
import HomePage from "../pages/HomePage";
// import Home2Page from "../app/components/home/index2";
// import Home3Page from "../app/components/home/index3";
import LandingPage from "../app/landingPage/LandingPage";
import AboutUsPage from "../pages/about-us";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/about-us" element={<AboutUsPage />} />
        {/* <Route path="/faq" element={<FAQPage />} /> */}
        {/* <Route path="/gallery" element={<GalleryPage />} /> */}
        {/* <Route path="/icons" element={<IconsPage />} /> */}
        {/* <Route path="/testimonials" element={<TestimonialsPage />} /> */}
        {/* <Route path="/why-choose-us" element={<WhyChooseUsPage />} /> */}
        {/* <Route path="/pricing" element={<PricingPage />} /> */}
        {/* <Route path="/team" element={<TeamPage />} /> */}
        {/* <Route path="/mission" element={<MissionVisionPage />} /> */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:id" element={<ServicesDetailPage />} />
        {/* <Route path="/portfolio" element={<Portfolio1Page />} /> */}
        {/* <Route path="/portfolio2" element={<Portfolio2Page />} /> */}
        {/* <Route path="/portfolio/detail" element={<PortfolioDetailPage />} /> */}
        {/* <Route path="/blogs" element={<BlogGridPage />} /> */}
        {/* <Route path="/blogs/list" element={<BlogListSidebarPage />} /> */}
        {/* <Route path="/blogs/detail-with-sidebar" element={<BlogDetailSidebarPage />} /> */}
        {/* <Route path="/blogs/detail" element={<BlogDetailPage />} /> */}
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route
          path="/web-development"
          element={<LandingPage page={"web-development"} />}
        />
        <Route
          path="/app-development"
          element={<LandingPage page={"app-development"} />}
        />
      </Routes>
    </>
  );
}

export default AppRoutes;
