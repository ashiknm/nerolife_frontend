import React from "react";
import two from "../website_assets/images/one.jpg";
import one from "../website_assets/images/upcoming_event.jpg";

import carosel1 from "../website_assets/HOME/1.mp4";
import carosel2 from "../website_assets/HOME/2.mp4";
import carosel3 from "../website_assets/HOME/3.mp4";
import carosel4 from "../website_assets/HOME/4.mp4";
import carosel5 from "../website_assets/HOME/5.mp4";


import "./Outlets.css";
import Footer from "../components/Footer";
import "./Outlets.css";

import ReactSimplyCarousel from "react-simply-carousel";

import axios from "../api/axios";

import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";

const Eventsvideos = () => {
  const { event_id } = useParams();
  const videoURLs = [carosel1, carosel2, carosel3, carosel4, carosel5];
  const [eventImages, setEventImages] = useState([]);

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
 

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlideIndex(
        (prevIndex) => (prevIndex + 1) % eventImages.length
      );
    }, 3000); // Adjust the interval according to your preference in milliseconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [eventImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoURLs.length);
    }, 5000); // Change the interval (in milliseconds) as needed

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let isMounted = true;

   
    const geteventImages = async () => {
      try {
        console.log("getting");
        const response = await axios.get(`images/${event_id}`, {
          // // signal: controller.signal
          // 'Access-Control-Allow-Origin' : true
        });
        isMounted && setEventImages(response.data);
        
      } catch (err) {
        console.error(err);
        // navigate('/login', { state: { from: location }, replace: true });
      }
    };

    geteventImages();

    return () => {
      isMounted = false;

      // controller.abort();
    };
  }, []);

  return (
    <div className="layout mt-5 p-5 mb-5">
      <div className="outletparent d-flex flex-wrap mb-5">
        <div className="outletleft d-flex align-items-center justify-content-center">
          <div>
            <h1 className="me-5 text-light fw-bold fs-3">VIDEOS</h1>
          </div>
        </div>

        <div className="outletright"  style = {{height : '500px'}}>
         
        {/* <ReactSimplyCarousel
        
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
              {eventImages.map((ambience, index) => (
                <div key={index}   style={{ height: "500px", width: '600px' }}>
                  <img
                    src={ambience.icon}
                    alt={`Slide ${index}`}
                  />
                </div>
              ))}
            </ReactSimplyCarousel> */}

        <div c style={{ width: "100%" }}>
            {videoURLs.map((url, index) => (
              <video
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                key={index}
                autoPlay
                loop
                muted
                className={index === currentVideoIndex ? "visible" : "hidden"}
              >
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ))}
          </div>
        </div>
      </div>

      <div className=" flex justify-evenly align-items-center flex-wrap">
        {eventImages.map((event, index) => (
          <div
            KEY={index}
            className="flex flex-column"
            style={{ height: "300px" }}
          >


            {/* <img
              src={event.icon}
              alt="one"
              // style={{ height: "90%", width: "300px" }}
              className="eventimage"
            /> */}

               <video
                style={{ height: "90%", width: "450px", objectFit: "cover" }}
                // key={index}
                // autoPlay
                // loop
                controls
          
                // className={index === currentVideoIndex ? "visible" : "hidden"}
              >
                <source src={'http://localhost:8000/uploads/event1.mp4'} type="video/mp4" />
                Your browser does not support the video tag.
              </video>


          </div>
        ))}
      </div>

      <div className="footer-overlay">
        <Footer />
      </div>
    </div>
  );
};

export default Eventsvideos;
