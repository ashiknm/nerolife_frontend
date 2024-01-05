import React from "react";
import two from "../website_assets/images/one.jpg";
import one from "../website_assets/images/upcoming_event.jpg";
import "./Outlets.css";
import Footer from "../components/Footer";

const Outlets = () => {
  return (
    <div className="layout mt-5 p-5 mb-5">
        <div className="outletparent d-flex flex-wrap mb-5">
        <div className="outletleft d-flex align-items-center justify-content-center">
          <div>
            <h1 className="me-5 text-light fw-bold fs-3">SPOTS TO EXPLORE</h1>
          </div>
        </div>

        <div className="outletright">
          <img src={one} alt="some outlet" />
        </div>
      </div>

    <div className="mt-5 mb-5 pt-32 pb-10">
          <div className="outletclubsparent d-flex flex-wrap">
            <div className="outletclubsleft text-center">
              <div className="imagesection">
                <img src={one} alt="chacery" style = {{height: '400px', width: "400px"}}  className="rounded-3"/>
              </div>
            </div>

            <div className="outletclubscenter text-center">
              <div className="imagesection">
                <img src={one} alt="chacery" style = {{height: '400px', width: "400px"}} />
              </div>
            </div>

            <div className="outletclubsright text-center">
              <div className="imagesection">
                <img src={one} alt="chacery" style = {{height: '400px', width: "400px"}} />

              </div>
            </div>
          </div>
          <h1 className="text-light fw-bold fs-1 ms-5 category_name_heading">NIGHTCLUBS</h1>
    </div>

    <div className="mt-5 mb-5">
      <div className="outletclubsparent d-flex flex-wrap">
        <div className="outletclubsleft text-center">
          <div className="imagesection">
            <img src={one} alt="chacery"  style = {{height: '400px', width: "400px"}} />

          </div>
        </div>

        <div className="outletclubscenter text-center">
          <div className="imagesection">
            <img src={one} alt="chacery" style = {{height: '400px', width: "400px"}}/>
          </div>
        </div>

        <div className="outletclubsright text-center">
          <div className="imagesection">
            <img src={one} alt="chacery"  style = {{height: '400px', width: "400px"}}/>

          </div>
        </div>
      </div>
      <h1 className="text-light fw-bold fs-1 text-right me-5 category_name_heading">LOUNGES</h1>
    </div>
 
    <div className="mt-5 mb-5">
      <div className="outletclubsparent d-flex flex-wrap">
        <div className="outletclubsleft text-center">
          <div className="imagesection">
            <img src={one} alt="chacery" style = {{height: '400px', width: "400px"}}/>

          </div>
        </div>

        <div className="outletclubscenter text-center">
          <div className="imagesection">
            <img src={one} alt="chacery" style = {{height: '400px', width: "400px"}}/>

          </div>
        </div>

        <div className="outletclubsright text-center">
          <div className="imagesection">
            <img src={one} alt="chacery" style = {{height: '400px', width: "400px"}}/>

          </div>
        </div>
      </div>
      <h1 className="text-light fw-bold fs-1 ms-5 category_name_heading">RESTOCAFES</h1>
    </div>

    <div className="mt-5 mb-5">
      <div className="outletclubsparent d-flex flex-wrap">
        <div className="outletclubsleft text-center">
          <div className="imagesection">
            <img src={one} alt="chacery" style = {{height: '400px', width: "400px"}}/>

          </div>
        </div>

        <div className="outletclubscenter text-center">
          <div className="imagesection">
            <img src={one} alt="chacery" style = {{height: '400px', width: "400px"}}/>

          </div>
        </div>

        <div className="outletclubsright text-center">
          <div className="imagesection">
            <img src={one} alt="chacery" style = {{height: '400px', width: "400px"}}/>

          </div>
        </div>
      </div>
      <h1 className="text-light fw-bold fs-1 text-right me-5 category_name_heading">PUBS</h1>
    </div>
    <div className="footer-overlay">
        <Footer />
      </div>
    </div>
  );
};

export default Outlets;