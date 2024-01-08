import React from "react";
import one from "../website_assets/images/one.jpg";
import "./Outlets.css";
import Footer from "../components/Footer";

import { useState, useEffect } from "react";
import axios from "../api/axios";

import {useNavigate} from "react-router-dom"

const Artistcontent2 = () => {

    const navigate = useNavigate();



  const [allartists, setAllartists] = useState([]);

  useEffect (() => {
    let isMounted = true;

    const getAllartists = async () => {
        try {
          console.log("getting")
            const response = await axios.get(`/artists`, {
                // // signal: controller.signal
                // 'Access-Control-Allow-Origin' : true
            });
            isMounted && setAllartists(response.data);
  
        } catch (err) {
            console.error(err);
            // navigate('/login', { state: { from: location }, replace: true });
        }
    }

     getAllartists();


    return () => {
        isMounted = false;
        
        // controller.abort();
    }
}, []);


  return (

<div className="layout p-5 mb-5">
<div className="mb-5 pt-10 pb-10">
  <div className=" flex justify-evenly align-items-center flex-wrap">

  {allartists.map((artist, index) => (
          <div KEY = {index} onClick={()=>navigate(`/artistvideos/${artist.artist_id}`)} className="flex flex-column m-2" style={{ height: "400px" }} >
          <img
            src={artist.artist_profile_icon}
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

export default Artistcontent2;
