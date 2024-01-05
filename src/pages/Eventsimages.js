import React from "react";
import one from "../website_assets/images/one.jpg";
import "./Outlets.css";
import Footer from "../components/Footer";

import { useState, useEffect } from "react";
import axios from "../api/axios";
import { useParams } from "react-router-dom";

const Eventsimages = () => {

const { event_id } = useParams();



  const [eventsImages, setEventImages] = useState([]);

  useEffect (() => {
    let isMounted = true;

    const getAllEventImages = async () => {
        try {
          console.log("getting")
            const response = await axios.get(`/images/${event_id}`, {
                // // signal: controller.signal
                // 'Access-Control-Allow-Origin' : true
            });
            isMounted && setEventImages(response.data);
            console.log("images",response.data)
           
  
        } catch (err) {
            console.error(err);
            // navigate('/login', { state: { from: location }, replace: true });
        }
    }

     getAllEventImages();


    return () => {
        isMounted = false;
        
        // controller.abort();
    }
}, []);


  return (

<div className="layout p-5 mb-5">
<div className="mb-5 pt-10 pb-10">
  <div className=" flex justify-evenly align-items-center flex-wrap">

    {eventsImages.length> 0?
    eventsImages.map((event, index) => (
        <div KEY = {index} className="flex flex-column m-2" style={{ height: "400px" }}>
        <img
          src={event.icon}
          alt="one"
          // style={{ height: "90%", width: "300px" }}
          className="eventimage"
        />
      </div>
      ))
    :<div>
        <h1 className="text-danger" style = {{fontSize: '24px', fontWeight :'600'}}>No Images Found</h1>
        </div>}



  </div>
</div>

<div  className="footer-overlay">
  <Footer />
</div>
</div>
  );
};

export default Eventsimages;
