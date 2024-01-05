import React from "react";
import two from "../website_assets/images/one.jpg";
import one from "../website_assets/images/upcoming_event.jpg";
import "./Outlets.css";
import Footer from "../components/Footer";
import { IoMdStar } from "react-icons/io";

const Eachartist = () => {
  return (
    <div className="layout mt-5  mb-5">
        <div className="outletparent d-flex flex-wrap mb-5 eachartistparent">

        <div className="eachartistmainsection">
          <img src={one} alt="some outlet" style={{objectFit:"cover"}} className="mainartistimg"/>

          <div className="artistpicturebottom">
            <img src={two} alt="some outlet"  className="avatarimg"/>
        </div>

          <div className="artiststars">
            <div className="d-flex">
            <IoMdStar size={38} color='yellow'/>
            <IoMdStar size={38} color='yellow'/>
            <IoMdStar size={38} color='yellow'/>
            <IoMdStar size={38} color='yellow'/>
            <IoMdStar size={38} color='yellow'/>
            </div>
        </div>

        </div>
      </div>

    
    <div className="footer-overlay">
        <Footer />
      </div>
    </div>
  );
};

export default Eachartist;