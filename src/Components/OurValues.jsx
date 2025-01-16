import { Link } from "react-router-dom";
import iconone from "../assets/images/png/teamexpert.png";
import icontwo from "../assets/images/png/digitaltransformatin.png";
import iconthree from "../assets/images/png/equality.png";
import { ourValues } from "../globals/constants";
const OurValues = () => {
  return (
    <div className="section-full  p-t110 p-b80 sx-bg-white sx-about-bx1-outer">
      <div className="container">
        <div className="section-content">
          <div className="sx-our-services-bx">
            <div className="section-head center">
              <div className="sx-head-l-title">
                <h2 className="sx-title">Our Values</h2>
              </div>
            </div>
            <div className="row">
              {/* Block one */}
              {ourValues.map((obj) => (
                <div
                  className="col-lg-6 col-md-6 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-service-bx-1">
                    <div key={obj.id} className="sx-icon-box-wraper">
                      <div className="sx-service-bx-icon scale-in-center">
                        <span className="sx-text-primary">
                          {obj.icon}
                          {/* <img src={iconone} alt="logo" width={110} /> */}
                        </span>
                      </div>
                      <div className="icon-content">
                        <h4 className="sx-tilte">{obj.title}</h4>
                        <p>{obj.description}</p>
                        <div className="sx-center-btn">
                          <Link to="/about-us" className="site-button-circle">
                            <i className="fa fa-long-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* Block Two */}
              {/* <div
            className="col-lg-6 col-md-6 wow fadeInDown"
            data-wow-duration="1000ms"
          >
            <div className="sx-service-bx-1">
              <div className="sx-icon-box-wraper">
                <div className="sx-service-bx-icon scale-in-center">
                  <span className="sx-text-primary">
                    <img src={icontwo} alt="logo" width={110} />
                  </span>
                </div>
                <div className="icon-content">
                  <h4 className="sx-tilte">Driving Digital Transformation</h4>
                  <p>
                    In an era where technology is rapidly evolving, businesses
                    must adapt to stay competitive. At MANYAA TECH SOLUTIONS, we specialize
                    in harnessing the power of innovation to drive digital
                    transformation. Our approach focuses on integrating advanced
                    technologies into your operations, empowering you to enhance
                    productivity, streamline processes, and achieve sustainable
                    growth. We believe that technology should not only solve
                    problems but also create new opportunities.
                  </p>
                  <div className="sx-center-btn">
                    <Link to="/about-us" className="site-button-circle active">
                      <i className="fa fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
              {/* Block Three */}
              {/* <div
            className="col-lg-6 col-md-6 wow fadeInDown"
            data-wow-duration="1000ms"
          >
            <div className="sx-service-bx-1">
              <div className="sx-icon-box-wraper">
                <div className="sx-service-bx-icon scale-in-center">
                  <span className="sx-text-primary">
                    <img src={iconthree} alt="logo" width={110} />
                  </span>
                </div>
                <div className="icon-content">
                  <h4 className="sx-tilte">Our Commitment to Quality</h4>
                  <p>
                    Quality is at the heart of everything we do. We adhere to
                    rigorous standards and best practices, ensuring that our
                    solutions are not only functional but also scalable and
                    secure. Our commitment to excellence is reflected in our
                    processes, from the initial concept to the final delivery,
                    ensuring that we exceed your expectations at every stage.
                    Our solutions
                  </p>
                  <div className="sx-center-btn">
                    <Link to="/about-us" className="site-button-circle">
                      <i className="fa fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
