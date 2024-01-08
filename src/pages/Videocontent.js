import React from "react";
import user_login from "../website_assets/images/user_login.jpg";
import outlet_login from "../website_assets/images/outlet_login.jpg";
import artist_login from "../website_assets/images/artist_login.jpg";
import "./Outlets.css";
import Footer from "../components/Footer";

import { Link, useNavigate } from "react-router-dom";

const Videocontent = () => {

    const navigate = useNavigate();
  return (
    <div className="layout p-5 mb-5">
      <div className="mb-5 pb-10">
        <h1 className="text-center text-light fw-bold fs-1 p-5">VIDEOS</h1>
        <div className=" flex justify-evenly align-items-center flex-wrap">

          <div  className="flex flex-column m-2" style={{ height: "500px" , width: "400px" }}>
            <img
              src={user_login}
              alt="one"
              className="threeeventimage"
            />
            <div
              style={{ height: "10%" }}
              className="flex align-items-center justify-center"
            >
              <h1 className="image_video_button" onClick={()=>navigate('/contentsofshows2')} >
                EVENTS
              </h1>
            </div>
          </div>



          <div className="flex flex-column m-2" style={{ height: "500px" , width: "400px" }}>
            <img
              src={outlet_login}
              alt="one"
              className="threeeventimage"
            />
            <div
              style={{ height: "10%" }}
              className="flex align-items-center justify-center"
            >
              <h1 onClick={()=>navigate('/outletcontents2')} className="image_video_button">
                OUTLETS
              </h1>
            </div>
          </div>
          <div className="flex flex-column m-2" style={{ height: "500px" , width: "400px" }}>
            <img
              src={artist_login}
              alt="one"

              className="threeeventimage"
            />
            <div
              style={{ height: "10%" }}
              className="flex align-items-center justify-center"
            >
              <h1 onClick={()=>navigate('/artistcontents2')} className="image_video_button">
                ARTISTS
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

export default Videocontent;