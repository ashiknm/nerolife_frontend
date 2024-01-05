import React from "react";
import one from "../website_assets/images/one.jpg";
import "./Outlets.css";
import Footer from "../components/Footer";

import { useState, useEffect } from "react";
import axios from "../api/axios";

import {useNavigate} from "react-router-dom"

const Contentsofshows = () => {

    const navigate = useNavigate();



  const [allEvents, setAllEvents] = useState([]);

  useEffect (() => {
    let isMounted = true;

    const getAllEvents = async () => {
        try {
          console.log("getting")
            const response = await axios.get(`/events`, {
                // // signal: controller.signal
                // 'Access-Control-Allow-Origin' : true
            });
            isMounted && setAllEvents(response.data);
            console.log("events",response.data);
  
        } catch (err) {
            console.error(err);
            // navigate('/login', { state: { from: location }, replace: true });
        }
    }

     getAllEvents();


    return () => {
        isMounted = false;
        
        // controller.abort();
    }
}, []);


  return (

<div className="layout p-5 mb-5">
<div className="mb-5 pt-10 pb-10">
  <div className=" flex justify-evenly align-items-center flex-wrap">

  {allEvents.map((event, index) => (
          <div KEY = {index} onClick={()=>navigate(`/EventsImages/${event.event_id}`)} className="flex flex-column m-2" style={{ height: "400px" }} >
          <img
            src={event.poster_url}
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

export default Contentsofshows;
