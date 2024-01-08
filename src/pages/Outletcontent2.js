import React from "react";
import one from "../website_assets/images/one.jpg";
import "./Outlets.css";
import Footer from "../components/Footer";

import { useState, useEffect } from "react";
import axios from "../api/axios";

import {useNavigate} from "react-router-dom"

const Outletcontent2 = () => {

    const navigate = useNavigate();



  const [alloutlets, setAlloutlets] = useState([]);

  useEffect (() => {
    let isMounted = true;

    const getAlloutlets = async () => {
        try {
          console.log("getting")
            const response = await axios.get(`/outlets`, {
                // // signal: controller.signal
                // 'Access-Control-Allow-Origin' : true
            });
            isMounted && setAlloutlets(response.data);
  
        } catch (err) {
            console.error(err);
            // navigate('/login', { state: { from: location }, replace: true });
        }
    }

     getAlloutlets();


    return () => {
        isMounted = false;
        
        // controller.abort();
    }
}, []);


  return (

<div className="layout p-5 mb-5">
<div className="mb-5 pt-10 pb-10">
  <div className=" flex justify-evenly align-items-center flex-wrap">

  {alloutlets.map((outlet, index) => (
          <div KEY = {index} onClick={()=>navigate(`/outletvideos/${outlet.outlet_id}`)} className="flex flex-column m-2" style={{ height: "400px" }} >
          <img
            src={outlet.outlet_icon}
            alt="one"
            // style={{ height: "90%", width: "300px" }}
            className="eventimage"
          />

        </div>
        ))}

  </div>
</div>

<div  className="footer-overlay">
  <Footer />
</div>
</div>
  );
};

export default Outletcontent2;
