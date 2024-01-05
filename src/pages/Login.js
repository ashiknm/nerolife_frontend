import React from "react";
import one from "../website_assets/images/one.jpg";
import "./Outlets.css";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <div className="layout p-5 mb-5">
      <div className="mb-5 pb-10">
        <h1 className="text-center text-light fw-bold fs-1 p-5">LOGIN</h1>
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
              <h1 style={{ color: "white", padding: "5px", border :  "1px solid white" , marginTop: "30px" , width: "90%" , textAlign: "center" , fontWeight: "bold" , fontSize: "30px"}}>
                CUSTOMER
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
              <h1 style={{ color: "white", padding: "5px", border :  "1px solid white" , marginTop: "30px" , width: "90%" , textAlign: "center" , fontWeight: "bold" , fontSize: "30px"}}>
                VENUIE
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
              <h1 style={{ color: "white", padding: "5px", border :  "1px solid white" , marginTop: "30px" , width: "90%" , textAlign: "center" , fontWeight: "bold" , fontSize: "30px"}}>
                ARTIST
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

export default Login;