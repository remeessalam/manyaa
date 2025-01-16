import React, { useEffect, useState } from "react";
import { clientTestimonials } from "../globals/constants";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import "./testimonials.css";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clientTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + clientTestimonials.length) % clientTestimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="testimonials-slider position-relative">
      <div className="container">
        <div className="section-content">
          {/* TITLE START */}
          <div className="section-head text-center">
            <div className="sx-head-s-title">Our Testimonials</div>
            <div className="sx-head-l-title">
              <h2 className="sx-title">What Clients Say?</h2>
            </div>
          </div>
          {/* TITLE END */}
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12 col-sm-12 mb-4 mt-5">
              <div className="testimonial-3 hover-animation-1 sx-bg-light">
                <div className="testimonial-detail">
                  <div className="testimonial-user-info">
                    <span className="testimonial-position">
                      {clientTestimonials[currentIndex].position}
                    </span>
                    <h4 className="testimonial-name">
                      {clientTestimonials[currentIndex].name}
                    </h4>
                  </div>
                </div>
                <div className="testimonial-text">
                  <p>{clientTestimonials[currentIndex].description}</p>
                </div>
                <div className="testimonial-footer">
                  <div className="testimonial-quote sx-text-primary">
                    <i className="flaticon-quote"></i>
                  </div>
                  <ul className="sx-rating-st1 list-unstyled d-flex">
                    {[...Array(5)].map((_, i) => (
                      <li key={i}>
                        <span>
                          <i className="fa fa-star"></i>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <span className="sx-review-count">(5 Reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navigation Arrows */}
      <button
        onClick={prevTestimonial}
        className="nav-arrow nav-arrow-left"
        aria-label="Previous testimonial"
      >
        <i className="fa fa-chevron-left"></i>
      </button>
      <button
        onClick={nextTestimonial}
        className="nav-arrow nav-arrow-right"
        aria-label="Next testimonial"
      >
        <i className="fa fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Testimonials;
