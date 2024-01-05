import React from "react";
import one from "../website_assets/images/one.jpg";
import "./Outlets.css";
import Footer from "../components/Footer";





const Events = () => {

 


  return (
    <div className="layout p-5 mb-5">
      <div className="mb-5 pt-10 pb-10">
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
                CATEGORIZEE ARTISTS
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
                CATEGORIZEE ARTISTS
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
                CATEGORIZEE ARTISTS
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-overlay mt-5 mb-5">
        <Footer />
      </div>
    </div>
  );
};

export default Events;
