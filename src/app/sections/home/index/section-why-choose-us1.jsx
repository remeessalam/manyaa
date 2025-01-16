import {
  ourServices,
  publicUrlFor,
  services,
} from "../../../../globals/constants";
// import { NavLink } from "react-router-dom";
import backgroundimage from "../../../../assets/images/whychooseusbackground.jpg";
import { useNavigate } from "react-router-dom";

function SectionWhyChooseUs1() {
  let styleForCard = {
    display: "flex",
    flexDirection: "column",
    minHeight: "340px",
    maxHeight: "350px",
    justifyContent: "space-between",
  };
  const navigate = useNavigate();
  const navigatToDetails = (id) => {
    navigate(`/services/${id}`);
  };
  return (
    <>
      <div
        className="section-full p-t110 p-b80 sx-why-chooseus-outer sx-bg-light bg-contain bg-no-repet"
        style={{
          backgroundImage: `url(${backgroundimage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          {/* TITLE START */}
          <div className="section-head center">
            {/* <div className="sx-head-s-title">Why Choose Us</div> */}
            <div className="sx-head-l-title">
              <h2 className="sx-title">Our Services</h2>
            </div>
          </div>
          {/* TITLE END */}
          <div className="section-content">
            <div className="sx-icon-bx-wrap">
              <div className="row justify-content-center g-col-6">
                {/* Block one */}
                {services.map((obj) => (
                  <div
                    onClick={() => navigatToDetails(obj.id)}
                    key={obj.heading}
                    className="col-lg-6 col-md-6 wow fadeInDown"
                    data-wow-duration="1000ms"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="sx-icon-bx-1">
                      <div
                        className="sx-icon-box-wraper mi"
                        style={{ ...styleForCard }}
                      >
                        <div className="sx-icon-bx-icon ">
                          <span className="sx-text-primary">
                            <img src={obj.icon} alt="icon" width={50} />
                          </span>
                          {/* <NavLink to="/services/detail"> */}
                          <h4 className="sx-tilte">{obj.heading}</h4>
                          {/* </NavLink> */}
                        </div>
                        <div className="icon-content">
                          <p className=" truncate-text">{obj.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionWhyChooseUs1;
