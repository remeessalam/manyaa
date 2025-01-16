import ItodoImage from "../app/elements/itodo-img";
import imageone from "../assets/images/sectionaboutcompany.jpg";
function SectionAboutCompany1() {
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
                  <div className="sx-about-bx1-media">
                    <div className="sx-dot-bx">
                      <ItodoImage src="images/about/dotted-pic.png" alt="" />
                    </div>
                    <div className="sx-ab-img-outer">
                      <div className="sx-ab-img-section-2">
                        <img src={imageone} alt="aboutcompanyimage" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-about-bx1-content">
                    <h2 className="sx-title">
                      Welcome to MANYAA TECH SOLUTIONS
                    </h2>
                    <span className="sx-title-2">
                      Empowering Businesses with Innovative Digital Solutions{" "}
                    </span>
                    <p>
                      At MANYAA TECH SOLUTIONS, we believe that technology plays
                      a vital role in shaping the future of businesses. Our core
                      mission is to help organizations unlock their true
                      potential by delivering forward-thinking, effective
                      digital solutions. Whether you're a small startup or an
                      established enterprise, we are here to guide you through
                      the ever-changing digital landscape and provide solutions
                      that drive growth and innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionAboutCompany1;
