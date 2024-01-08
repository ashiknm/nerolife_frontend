import React from "react";
import two from "../website_assets/images/one.jpg";
import one from "../website_assets/images/upcoming_event.jpg";
import "./Outlets.css";
import Footer from "../components/Footer";

import { useState, useEffect } from "react";
import axios from "../api/axios";

import ReactSimplyCarousel from "react-simply-carousel";

const Artists = () => {

  const [allArtists, setAllArtists] = useState([]);

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlideIndex(
        (prevIndex) => (prevIndex + 1) % allArtists.length
      );
    }, 3000); // Adjust the interval according to your preference in milliseconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [allArtists.length]);

  useEffect (() => {
    let isMounted = true;

    const getAllArtists = async () => {
        try {
            const response = await axios.get(`/artists`, {
                // // signal: controller.signal
                // 'Access-Control-Allow-Origin' : true
            });
            isMounted && setAllArtists(response.data);
            
  
        } catch (err) {
            console.error(err);
            // navigate('/login', { state: { from: location }, replace: true });
        }
    }

     getAllArtists();


    return () => {
        isMounted = false;
        
        // controller.abort();
    }
}, []);

  return (
    <div className="layout mt-5 p-5 mb-5">
        <div className="outletparent d-flex flex-wrap mb-5">
        <div className="outletleft d-flex align-items-center justify-content-center">
          <div>
            <h1 className="me-5 text-light fw-bold fs-3">ARTISTS TO WATCH</h1>
          </div>
        </div>

        <div className="outletright" style = {{height : '500px'}}>
        <ReactSimplyCarousel
        
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 800,
          },
        ]}
        speed={400}
        easing="linear"
        autoPlay={true}
        autoPlayInterval={3000}
      >
        {allArtists.map((artist, index) => (
          <div key={index}   style={{ height: "500px", width: '600px' }}>
            <img
              src={artist.artist_profile_icon}
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </ReactSimplyCarousel>
        </div>
      </div>

      <div className=" flex justify-evenly align-items-center flex-wrap">
        {allArtists.map((artist, index) => (
          <div
            KEY={index}
            className="flex flex-column m-2"
            style={{ height: "400px" }}
          >
            <img
              src={artist.artist_profile_icon}
              alt={artist.artist_name}
              // style={{ height: "90%", width: "300px" }}
              className="eventimage"
            />
          </div>
        ))}
      </div>

    <div className="footer-overlay">
        <Footer />
      </div>
    </div>
  );
};

export default Artists;