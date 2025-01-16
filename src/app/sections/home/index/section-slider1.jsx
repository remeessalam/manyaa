// import { publicUrlFor } from "../../../../globals/constants";
import { NavLink } from "react-router-dom";
import { register } from "swiper/element/bundle";
import bannerone from "../../../../assets/images/homepage-banner1.jpg";
import bannertwo from "../../../../assets/images/homepage-banner2.jpg";
register();

function SectionSlider1() {
  return (
    <>
      <div className="sx-bnr-1-wrap-outer home-1-slider">
        {/* swiper slides */}
        <swiper-container
          loop="true"
          space-between="30"
          effect="fade"
          navigation-next-el=".swiper-button-next"
          navigation-perv-el=".swiper-button-prev"
          pagination-el=".swiper-pagination"
          pagination-clickable="true"
          autoplay-delay="7000"
          autoplay-disable-on-interaction="true"
          class="swiper-wrapper"
        >
          <swiper-slide
            class="sx-bnr-1-wrap swiper-slide overlay-overlay"
            style={{ backgroundImage: `url(${bannertwo})` }}
          >
            <div className="sx-bg-overlay opacity-0 sx-bg-primary" />
            <div className="container">
              <div className="sx-bnr-1-content">
                <span
                  className="sx-bnr-1-small-title text-shadow"
                  data-swiper-parallax="-300"
                >
                  We are Focused
                </span>
                <h2 className="sx-bnr-1-large-title text-shadow">
                  Elevating Your Digital Presence
                </h2>
                <div className="sx-bnr-1-info text-shadow">
                  At MANYAA TECH SOLUTIONS, we specialize in transforming how
                  businesses use technology to drive success. Whether you need a
                  custom mobile app, a redesigned website with a focus on user
                  experience, or a smooth transition to the cloud, our team
                  delivers top-tier solutions that not only meet your current
                  needs but also help you stay ahead in an ever-evolving digital
                  landscape.
                </div>
                <div className="sx-bnr-readmore">
                  <NavLink
                    to="/about-us"
                    className="site-button sx-btn-primary icon"
                  >
                    <i className="fa  fa-long-arrow-right" />
                    Read More
                  </NavLink>
                </div>
                {/* <div className="sx-bnr-video">
                  <a
                    href="https://www.youtube.com/watch?v=c1XNqw2gSbU"
                    className="mfp-video circle"
                  >
                    <i className="flaticon-play" />
                  </a>
                </div> */}
              </div>
            </div>
            {/* <div className="sx-bnr-text-masking">
              <div className="light">
                <h1 className="animate-charcter">IT Solution</h1>
              </div>
            </div> */}
          </swiper-slide>
          <swiper-slide
            class="sx-bnr-1-wrap swiper-slide overlay-overlay"
            style={{
              backgroundImage: `url(${bannerone})`,
            }}
          >
            <div className="sx-bg-overlay opacity-0 sx-bg-primary" />
            <div className="container">
              <div className="sx-bnr-1-content">
                <span
                  className="sx-bnr-1-small-title text-shadow"
                  data-swiper-parallax="-300"
                >
                  We are the finest
                </span>
                <h2 className="sx-bnr-1-large-title text-shadow">
                  Innovative Solutions for Growing Businesses
                </h2>
                <div className="sx-bnr-1-info text-shadow">
                  We offer innovative solutions to help your business grow and
                  stay competitive. From custom apps and websites to AI and
                  cloud services, we tailor our strategies to meet your unique
                  needs, empowering you to scale and succeed in a fast-changing
                  digital world.
                </div>
                <div className="sx-bnr-readmore">
                  <NavLink
                    to="/about-us"
                    className="site-button sx-btn-primary icon"
                  >
                    <i className="fa  fa-long-arrow-right" />
                    Read More
                  </NavLink>
                </div>
                {/* <div className="sx-bnr-video">
                  <a
                    href="https://www.youtube.com/watch?v=c1XNqw2gSbU"
                    className="mfp-video circle"
                  >
                    <i className="flaticon-play" />
                  </a>
                </div> */}
              </div>
            </div>
            {/* <div className="sx-bnr-text-masking">
              <div className="light">
                <h1 className="sx-title">Analytics</h1>
              </div>
            </div> */}
          </swiper-slide>
        </swiper-container>
        {/* !swiper slides */}
        {/* Add Arrows */}
        <div className="swiper-button-next" />
        <div className="swiper-button-prev" />
      </div>
    </>
  );
}

export default SectionSlider1;
