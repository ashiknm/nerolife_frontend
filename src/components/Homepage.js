import React from "react";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import ReactSimplyCarousel from "react-simply-carousel";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import backgroundVideo from "../website_assets/HOME/STORY/home_bg.mp4";

import backgroundVideo from "../website_assets/NIGHTCUBE/OUTLET/home_bg2.mp4";

import carosel1 from "../website_assets/HOME/1.mp4";
import carosel2 from "../website_assets/HOME/2.mp4";
import carosel3 from "../website_assets/HOME/3.mp4";
import carosel4 from "../website_assets/HOME/4.mp4";
import carosel5 from "../website_assets/HOME/5.mp4";

import upcomingEvent1 from "../website_assets/EVENT/1.mp4";
import upcomingEvent2 from "../website_assets/EVENT/2.mp4";
import upcomingEvent3 from "../website_assets/EVENT/3.mp4";

import upcomming_image from "../website_assets/EVENT/upcoming_image.jpeg";
import prev_image from "../website_assets/EVENT/previous_image.jpg";
import live_image from "../website_assets/EVENT/live_image.jpeg";

import filtered_outlet from "../website_assets/HOME/filtered_outlet.jpg";
import event_on_preference from "../website_assets/HOME/event_on_preference.png";
import categorized_artists from "../website_assets/HOME/categorized_artists.jpg";

import Header from "./Header";
import Footer from "./Footer";

function Homepage() {
  const videoURLs = [carosel1, carosel2, carosel3, carosel4, carosel5];
  const eventvideoURLs = [upcomingEvent1, upcomingEvent2, upcomingEvent3];

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const upcommingImages = [
    upcomming_image,
    prev_image,
    live_image,
    upcomming_image,
    prev_image,
    live_image,
    upcomming_image,
    prev_image,
    live_image,
    //  upcomming_image,
    //  upcomming_image
  ];

  const previousImages = [
    prev_image,
    prev_image,
    prev_image,
    prev_image,
    prev_image,
    prev_image,
    prev_image,
    prev_image,
    //  upcomming_image,
    //  upcomming_image
  ];

  const liveImages = [
    live_image,
    live_image,
    live_image,
    live_image,
    live_image,
    live_image,
    live_image,
    live_image,
    //  upcomming_image,
    //  upcomming_image
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [eventVideoIndex, seteventVideoIndex] = useState(0);

  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once when the element comes into view
  });

  const settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoURLs.length);
      seteventVideoIndex(
        (prevIndex) => (prevIndex + 1) % eventvideoURLs.length
      );
    }, 5000); // Change the interval (in milliseconds) as needed

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlideIndex(
        (prevIndex) => (prevIndex + 1) % upcommingImages.length
      );
    }, 3000); // Adjust the interval according to your preference in milliseconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [upcommingImages.length]);

  return (
    <div className="">
      {/* <Header /> */}

      {/* <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      <div className="layout flex flex-column">
        <div
          style={{
            height: "55vh",
            width: "100%",
            marginTop: "10%",
          }}
          className="flex align-items-center"
        >
          <div className="home-carosel" style={{ width: "60%" }}>
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

          <div className="home-tags flex align-items-center">
            <div style={{ width: "100%" }} className=" p-2">
              <h1
                className="heading1"
                style={{
                  textAlign: "right",
                  marginRight: "2vh",
                  marginBottom: "4%",
                  fontSize: "125%",
                }}
              >
                EXPLORE NEW SPOTS,
              </h1>
              <h1
                className="heading2"
                style={{
                  textAlign: "right",
                  marginRight: "5vh",
                  marginBottom: "4%",
                  fontSize: "125%",
                }}
              >
                ENJOY YOUR FAVOURITE ARTISTS,
              </h1>
              <h1
                className="heading3"
                style={{
                  textAlign: "right",
                  marginRight: "25vh",
                  fontSize: "125%",
                }}
              >
                BOOK EVENTS AND MORE
              </h1>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "55vh",
            width: "100%",
            marginTop: "10%",
            marginBottom: "10%",
            // marginRight: '15%',
          }}
          className="flex align-items-center"
        >
          <div className="home-tags2 flex align-items-center">
            <h1
              ref={ref}
              className={`animated-element ${inView ? "animate" : ""}`}
              style={{
                textAlign: "right",
                marginRight: "2vh",
                marginBottom: "4%",
                fontSize: "145%",
                cursor: "pointer",
              }}
            >
              TOP SHOWS OF THE WEEK,
            </h1>
          </div>
          <div className="home-carosel2" style={{ width: "60%" }}>
            {eventvideoURLs.map((url, index) => (
              <video
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                key={index}
                autoPlay
                loop
                muted
                className={index === eventVideoIndex ? "visible" : "hidden"}
              >
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ))}
          </div>
        </div>

        <div
          style={{ marginBottom: "100px" }}
          className="flex flex-column align-items-end me-5"
        >
          <div
            className="heading2  mb-2 flex"
            style={{ height: "200px", width: "55%", overflow: "hidden" }}
          >
            <ReactSimplyCarousel
              activeSlideIndex={activeSlideIndex}
              onRequestChange={setActiveSlideIndex}
              itemsToShow={1}
              itemsToScroll={1}
              responsiveProps={[
                {
                  itemsToShow: 5,
                  itemsToScroll: 1,
                  minWidth: 768,
                },
              ]}
              speed={400}
              easing="linear"
              autoPlay={true}
              autoPlayInterval={3000}
            >
              {upcommingImages.map((image, index) => (
                <div key={index} className="me-2" style={{ width: "200px" }}>
                  <img
                    src={image}
                    alt={`Slide ${index}`}
                    className="eventscrollimage"
                  />
                </div>
              ))}
            </ReactSimplyCarousel>
          </div>

          <h1 className="mt-3" style={{ fontSize: 25, color: "white" }}>
            COMMING SOON
          </h1>
        </div>

        <div
          style={{ marginBottom: "100px" }}
          className="flex flex-column align-items-start me-5"
        >
          <div
            className="heading1  mb-2 flex"
            style={{ height: "200px", width: "55%", overflow: "hidden" }}
          >
            <ReactSimplyCarousel
              activeSlideIndex={activeSlideIndex}
              onRequestChange={setActiveSlideIndex}
              itemsToShow={1}
              itemsToScroll={1}
              responsiveProps={[
                {
                  itemsToShow: 5,
                  itemsToScroll: 1,
                  minWidth: 768,
                },
              ]}
              speed={400}
              easing="linear"
              autoPlay={true}
              autoPlayInterval={3000}
            >
              {upcommingImages.map((image, index) => (
                <div key={index} className="me-2" style={{ width: "200px" }}>
                  <img
                    src={image}
                    alt={`Slide ${index}`}
                    className="eventscrollimage"
                  />
                </div>
              ))}
            </ReactSimplyCarousel>
          </div>
          <h1 className="mt-3 ms-4" style={{ fontSize: 25, color: "white" }}>
            CATCH LIVE
          </h1>
        </div>

        <div className="flex flex-column align-items-end me-5">
          <div
            className="heading3  mb-2 flex"
            style={{ height: "200px", width: "55%", overflow: "hidden" }}
          >
            <ReactSimplyCarousel
              activeSlideIndex={activeSlideIndex}
              onRequestChange={setActiveSlideIndex}
              itemsToShow={1}
              itemsToScroll={1}
              responsiveProps={[
                {
                  itemsToShow: 5,
                  itemsToScroll: 1,
                  minWidth: 768,
                },
              ]}
              speed={400}
              easing="linear"
              autoPlay={true}
              autoPlayInterval={3000}
            >
              {upcommingImages.map((image, index) => (
                <div key={index} className="me-2" style={{ width: "200px" }}>
                  <img
                    src={image}
                    alt={`Slide ${index}`}
                    className="eventscrollimage"
                  />
                </div>
              ))}
            </ReactSimplyCarousel>
          </div>
          <h1 className="mt-3" style={{ fontSize: 25, color: "white" }}>
            YOU MISSED OUT ON
          </h1>
        </div>

        <div
          style={{ marginTop: "250px" }}
          className=" flex justify-evenly align-items-center flex-wrap"
        >
          <div className="flex flex-column " style={{ height: "500px" }}>
            <div className="overlay-trigger-container" style={{ height: "90%", width: "400px" }}>
            <img
              src={filtered_outlet}
              alt="filtered_outlet"
              className="overlay-trigger"
              style={{height: '100%'}}
            />
            <div className="overlay">
              <div className="overlay-content">
                <h2>Image Title</h2>
                <p>Additional info about the image.</p>
              </div>
            </div>
            </div>
           

            <div
              style={{ height: "10%" }}
              className="flex align-items-center justify-center"
            >
              <h1 style={{ left: "50%", color: "white" }}>FILTERED OUTLETS</h1>
            </div>
          </div>

          <div className="flex flex-column" style={{ height: "500px" }}>
          <div className="overlay-trigger-container" style={{ height: "90%", width: "400px" }}>
            <img
              src={event_on_preference}
              alt="event_on_preference"
              className="overlay-trigger"
              style={{height: '100%'}}
            />
            <div className="overlay">
              <div className="overlay-content">
                <h2>Image Title</h2>
                <p>Additional info about the image.</p>
              </div>
            </div>
            </div>

            <div
              style={{ height: "10%" }}
              className="flex align-items-center justify-center"
            >
              <h1 style={{ left: "50%", color: "white" }}>
                EVENTS ON PREFERENCE
              </h1>
            </div>
          </div>

          <div className="flex flex-column" style={{ height: "500px" }}>
          <div className="overlay-trigger-container" style={{ height: "90%", width: "400px" }}>
            <img
              src={categorized_artists}
              alt="categorized_artists"
              className="overlay-trigger"
              style={{height: '100%'}}
            />
            <div className="overlay">
              <div className="overlay-content">
                <h2>Image Title</h2>
                <p>Additional info about the image.</p>
              </div>
            </div>
            </div>
            <div
              style={{ height: "10%" }}
              className="flex align-items-center justify-center"
            >
              <h1 style={{ left: "50%", color: "white" }}>
                CATEGORIZEE ARTISTS
              </h1>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "250px" }} className="footer-overlay">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
