import ItodoImage from "../../../elements/itodo-img";
import { NavLink } from "react-router-dom";
import SectionTestimonials2 from "./section-testimonials2";
import question from "../../../../assets/images/question.jpg";
export function SectionWhyChooseUs2Inner() {
  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="sx-about-bx4-media">
            <div className="sx-ab4-img-outer">
              <div className="sx-ab4-media">
                <img src={question} alt="media" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="sx-about-bx4-content">
            <h2 className="sx-title">
              Why Choose MANYAA TECH SOLUTIONS Technologies?
            </h2>
            <p>
              At MANYAA TECH SOLUTIONS Technologies, we understand that choosing
              the right technology partner is crucial for your business's
              success. Here’s why we stand out in a crowded marketplace
            </p>

            {/* <NavLink
              to="/why-choose-us"
              className="site-button sx-btn-primary icon sx-btn-lg"
            >
              <i className="fa  fa-long-arrow-right" />
              View All
            </NavLink> */}
          </div>
        </div>
      </div>
    </>
  );
}

function SectionWhyChooseUs2() {
  return (
    <>
      <div className="section-full  p-t110 p-b80 sx-bg-light sx-about-bx4-outer">
        <div className="container">
          <div className="section-content">
            <div className="sx-about-bx4-content-wrap p-b70">
              <SectionWhyChooseUs2Inner />
            </div>
            {/*testimonial section */}
            <SectionTestimonials2 />
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionWhyChooseUs2;
