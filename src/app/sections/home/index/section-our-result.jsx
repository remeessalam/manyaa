import ItodoImage from "../../../elements/itodo-img";
import ourresult from "../../../../assets/images/ourresult.jpg";
import { companyDetails } from "../../../../globals/constants";
function Sectionourresult() {
  return (
    <>
      <div className="section-full  p-t110 p-b80 sx-bg-white sx-about-bx1-outer">
        <div className="container">
          <div className="section-content">
            <div className="sx-about-bx1-content-wrap">
              <div className="row">
                <div
                  className="col-lg-6 col-md-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-about-bx1-content">
                    <h2 className="sx-title">The Impact We Make</h2>
                    {/* <span className="sx-title-2">
                      Empowering Innovation Through Software Solutions
                    </span> */}
                    <p>
                      At {companyDetails.name}, we’re not just building
                      technology—we’re transforming businesses. We’ve seen
                      firsthand how digital solutions can increase efficiency,
                      enhance customer experiences, and unlock new revenue
                      streams. Our focus is on making a real impact, not just
                      through the solutions we build, but through the
                      long-lasting relationships we form with our clients. We
                      don’t just want to help you stay competitive—we want to
                      help you lead in your industry. With our
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-about-bx1-media">
                    <div className="sx-dot-bx">
                      <ItodoImage src="images/about/dotted-pic.png" alt="" />
                    </div>
                    <div className="sx-ab-img-outer">
                      <div className="sx-ab-img-section-2">
                        <img src={ourresult} alt="our solution" />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="sx-title" style={{ marginTop: "2rem" }}>
                    Let’s Create Something Great Together
                  </h2>
                  <p>
                    Are you ready to take your business to the next level? Let’s
                    work together to build the digital solutions you need to
                    succeed in today’s fast-moving world. Whether you’re looking
                    to develop a new mobile app, migrate to the cloud, or
                    integrate AI into your operations, we have the expertise to
                    make it happen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sectionourresult;
