import SectionClients2 from "../../../sections/home/index2/section-clients2";
import SectionCounter1 from "../../../sections/home/index/section-counter1";
import { useEffect } from "react";
import { loadScript, services } from "../../../../globals/constants";
import ItodoImage from "../../../elements/itodo-img";
import SectionVideo2 from "../../../../Components/section-video2";
import SectionWhyChooseUs4 from "../../../../Components/section-why-choose-us4";
import { useNavigate, useParams } from "react-router-dom";

function ServicesDetailPage() {
  useEffect(() => {
    loadScript("js/custom.js");
  });
  const navigate = useNavigate();

  const { id } = useParams();
  const serviceDetails = services[id - 1];
  console.log(serviceDetails, "asdfasgf");
  const navigatToDetails = (id) => {
    navigate(`/services/${id}`);
  };
  return (
    <>
      {/* service detail SECTION START */}
      <div className="section-full p-b80 sx-ser-detail-outer sx-bg-white">
        <div className="sx-ser-detail-l-pic p-b80">
          <div className="sx-media  relative ">
            <img
              src={serviceDetails?.image}
              alt={serviceDetails.heading}
              style={{ maxHeight: "80vh", width: "100vw", objectFit: "cover" }}
            />
            <div className="sx-bnr-outline-text">
              <h1> {serviceDetails.heading}</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="section-content">
            <div className="sx-our-service-detail">
              {/* TITLE START */}
              <div className="section-head2">
                {/* <div className="sx-head-s-title">Why Choose Uss</div> */}
                <div className="sx-head-l-title">
                  <h2 className="sx-title2">{serviceDetails.heading}</h2>
                </div>
              </div>

              {/* TITLE END */}
              <div className="sx-our-service-info m-b80">
                <p>{serviceDetails.description}</p>
                <p>{serviceDetails.paragraph}</p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fit, minmax(300px, 1fr))" /* Responsive grid */,
                    gap: "4rem" /* Gap between items */,
                  }}
                >
                  <div>
                    <div>
                      <h2>Our {serviceDetails.heading} Services</h2>
                      {serviceDetails.services.map((obj) => (
                        <div>
                          <div className="col-lg-12 col-md-12 m-b10">
                            <div className="sx-icon-bx-2">
                              <div className="sx-icon-bx-info">
                                <span className="sx-icon-bx-title">
                                  {obj.title}:
                                </span>
                                <span className="sx-icon-bx-title-info">
                                  {obj.details}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div>
                      <h2>What We Offer</h2>
                      {serviceDetails.offerings.map((obj) => (
                        <div>
                          <div className="col-lg-12 col-md-12 m-b10">
                            <div className="sx-icon-bx-2">
                              <div className="sx-icon-bx-info">
                                <span className="sx-icon-bx-title">
                                  {obj.title}:
                                </span>
                                <span className="sx-icon-bx-title-info">
                                  {obj.desc}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div>
                      <h2>Why Choose Us</h2>
                      {serviceDetails.whyChooseUs.map((obj) => (
                        <div>
                          <div className="col-lg-12 col-md-12 m-b10">
                            <div className="sx-icon-bx-2">
                              <div className="sx-icon-bx-info">
                                <span className="sx-icon-bx-title">
                                  {obj.title}:
                                </span>
                                <span className="sx-icon-bx-title-info">
                                  {obj.desc}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <h2>Other Services</h2>
                    {services.map((obj) => (
                      <>
                        {serviceDetails.id !== obj.id && (
                          <div
                            className="service-listing-button-style"
                            onClick={() => navigatToDetails(obj.id)}
                          >
                            <h4
                              className="sx-breadcrumb breadcrumb-style-2"
                              style={{ color: "white", cursor: "pointer" }}
                            >
                              {obj.heading}
                            </h4>
                          </div>
                        )}
                      </>
                    ))}
                  </div>
                </div>
              </div>
              {/* <SectionCounter1 /> */}
            </div>
          </div>
        </div>
      </div>
      {/* service detail SECTION END */}

      {/* <SectionVideo2 /> */}
      {/* <SectionWhyChooseUs4 /> */}
      {/* <SectionClients2 /> */}
    </>
  );
}

export default ServicesDetailPage;
