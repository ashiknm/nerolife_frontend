import React from "react";
import two from "../website_assets/images/one.jpg";
import one from "../website_assets/images/upcoming_event.jpg";
import "./Outlets.css";
import Footer from "../components/Footer";

const Artists = () => {
  return (
    <div className="layout mt-5 p-5 mb-5">
        <div className="outletparent d-flex flex-wrap mb-5">
        <div className="outletleft d-flex align-items-center justify-content-center">
          <div>
            <h1 className="me-5 text-light fw-bold fs-3">ARTISTS TO WATCH</h1>
          </div>
        </div>

        <div className="outletright">
          <img src={one} alt="some outlet" />
        </div>
      </div>

      <div className=" flex justify-evenly align-items-center flex-wrap">


<div className="flex flex-column m-2" style={{ height: "400px" }}>
  <img
    src={one}
    alt="one"
    className="threeeventimage"
  />
  <div
    style={{ height: "10%" }}
    className="flex align-items-center justify-center"
  >
    <h1 style={{ left: "50%", color: "white" }}>
      Artist 1
    </h1>
  </div>
</div>
<div className="flex flex-column m-2" style={{ height: "400px" }}>
  <img
    src={one}
    alt="one"
    className="threeeventimage"
  />
  <div
    style={{ height: "10%" }}
    className="flex align-items-center justify-center"
  >
    <h1 style={{ left: "50%", color: "white" }}>
      Artist 2
    </h1>
  </div>
</div>
<div className="flex flex-column m-2" style={{ height: "400px" }}>
  <img
    src={one}
    alt="one"

    className="threeeventimage"
  />
  <div
    style={{ height: "10%" }}
    className="flex align-items-center justify-center"
  >
    <h1 style={{ left: "50%", color: "white" }}>
      Artist 3
    </h1>
  </div>
</div>
</div>

    <div className="footer-overlay">
        <Footer />
      </div>
    </div>
  );
};

export default Artists;