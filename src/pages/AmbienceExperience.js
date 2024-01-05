import React from "react";
import two from "../website_assets/images/one.jpg";
import one from "../website_assets/images/upcoming_event.jpg";
import "./Outlets.css";
import Footer from "../components/Footer";
import "./Outlets.css";

import ReactSimplyCarousel from "react-simply-carousel";

import axios from "../api/axios";

import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";

const AmbienceExperience = () => {
  const { outlet_id } = useParams();

  const [ambienceImages, setAmbienceImages] = useState([]);
  const [experienceImages, setExperienceImages] = useState([]);

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlideIndex(
        (prevIndex) => (prevIndex + 1) % ambienceImages.length
      );
    }, 3000); // Adjust the interval according to your preference in milliseconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [ambienceImages.length]);

  useEffect(() => {
    let isMounted = true;

    console.log("outlet id : ", outlet_id);

    const getAmbienceImages = async () => {
      try {
        console.log("getting");
        const response = await axios.get(`images/ambience/${outlet_id}`, {
          // // signal: controller.signal
          // 'Access-Control-Allow-Origin' : true
        });
        isMounted && setAmbienceImages(response.data);
        console.log("ambience", response.data);
      } catch (err) {
        console.error(err);
        // navigate('/login', { state: { from: location }, replace: true });
      }
    };

    const getExperienceImages = async () => {
      try {
        console.log("getting");
        const response = await axios.get(`/images/experience/${outlet_id}`, {
          // // signal: controller.signal
          // 'Access-Control-Allow-Origin' : true
        });
        isMounted && setExperienceImages(response.data);
        console.log("experience", response.data);
      } catch (err) {
        console.error(err);
        // navigate('/login', { state: { from: location }, replace: true });
      }
    };

    getAmbienceImages();
    getExperienceImages();

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
            <h1 className="me-5 text-light fw-bold fs-3">AMBIENCE</h1>
          </div>
        </div>

        <div className="outletright"  style = {{height : '500px'}}>
         
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
              {ambienceImages.map((ambience, index) => (
                <div key={index}   style={{ height: "500px", width: '600px' }}>
                  <img
                    src={ambience.icon}
                    alt={`Slide ${index}`}
                  />
                </div>
              ))}
            </ReactSimplyCarousel>
        </div>
      </div>

      <div className=" flex justify-evenly align-items-center flex-wrap">
        {ambienceImages.map((ambience, index) => (
          <div
            KEY={index}
            className="flex flex-column m-2"
            style={{ height: "400px" }}
          >
            <img
              src={ambience.icon}
              alt="one"
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

export default AmbienceExperience;
