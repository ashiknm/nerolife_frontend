import React from "react";
import defaultvideo from "../website_assets/videos/default_bg_video.mp4";
import cover_upcoming from "../website_assets/videos/cover_upcoming.mp4";
import one from "../website_assets/images/one.jpg";
import upcoming_event from "../website_assets/images/upcoming_event.jpg";
import "./Singleevent.css";

import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import axios from "../api/axios";

const Singleevent = () => {
  const { event_id } = useParams();

  const [eventData, setEventData] = useState({});

  const [introVideo, setIntroVideo]= useState();

  const [isLoading, setIsLoading] = useState(true);

  useEffect (() => {
    let isMounted = true;

    const getEventData = async () => {
        try {
          console.log("getting")
            const response = await axios.get(`/events/${event_id}`, {
                // // signal: controller.signal
                // 'Access-Control-Allow-Origin' : true
            });
            isMounted && setEventData(response.data);
            console.log("event data",response.data);
            setIntroVideo(response.data.intro_video);

            console.log("Video Path:",response.data.intro_video);
  
        } catch (err) {
            console.error(err);
            // navigate('/login', { state: { from: location }, replace: true });
        }
    }

     getEventData();


    return () => {
        isMounted = false;
        
        // controller.abort();
    }
}, []);



  return (
    <div>
      <h1 className="text-center text-light pb-3 fw-bold">COMING SOON</h1>
      <div className="relative" style={{ height: "600px" }}>
        <div className="absolute inset-0 overflow-hidden">
          <video controls autoPlay muted loop className="w-full h-full object-cover">
            <source
              src={introVideo} // Replace with your video file path
              type="video/mp4"

            />
         

            Your browser does not support the video tag.
          </video>
        </div>
        <div className="relative z-10 text-white"></div>
      </div>

      <div className="mt-5 mb-5 d-flex flex-wrap justify-content-evenly">
        <div className="eachevent border rounded-5">
          <img src={one} alt="single event poster" className="rounded-5" />
        </div>

        <div className="eachevent rounded-5 p-3">
          <div className="d-flex justify-content-start text-light p-2">
            <h1 className="fs-12 fw-bold">EVENT NAME : </h1> <p>{eventData.event_name} </p>
          </div>
          <div className="d-flex justify-content-start text-light p-2">
            <h1 className="fs-12 fw-bold">VENUE : </h1> <p> </p>
          </div>
          <div className="d-flex justify-content-start text-light p-2">
            <h1 className="fs-12 fw-bold">ARTIST : </h1> <p> </p>
          </div>
          <div className="d-flex justify-content-start text-light p-2">
            <h1 className="fs-12 fw-bold">DATE : </h1> <p> </p>
          </div>
          <div className="d-flex justify-content-start text-light p-2">
            <h1 className="fs-12 fw-bold">START : </h1> <p> </p>
          </div>
          <div className="d-flex justify-content-start text-light p-2">
            <h1 className="fs-12 fw-bold">END : </h1> <p> </p>
          </div>
          <div className="d-flex justify-content-start text-light p-2">
            <h1 className="fs-12 fw-bold">MUSIC CATEGORY : </h1> <p> </p>
          </div>
          <div className="d-flex justify-content-start text-light p-2">
            <h1 className="fs-12 fw-bold">EVENT CATEGORY : </h1> <p> </p>
          </div>
          <div className="d-flex justify-content-start text-light p-2">
            <h1 className="fs-12 fw-bold">RESERVATION : </h1> <p> </p>
          </div>

          <div className="d-flex justify-content-start text-light p-2">
            <h1 className="fs-12 fw-bold">GUEST LIST : </h1> <p className="ms-5"> 1 | 2 | 3 | 4 | 5+ </p>
          </div>

          <div className="d-flex justify-content-start text-light p-2">
            <h1 className="fs-12 fw-bold">TICKETS : </h1> <p></p>
          </div>
        </div>
        <div className="eachevent d-flex align-items-center justify-content-center border rounded-5">
          <div className="">
            <div>
              <h1 className="text-center text-light fw-bold "></h1>
            </div>

            <div>
              {/* <h1 className="text-center text-light fw-bold">
                IMAGES | VIDEOS
              </h1> */}
                        <div
            id="carouselExampleInterval1"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img src={upcoming_event} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item" data-bs-interval="10000">
                <img src={upcoming_event} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item" data-bs-interval="10000">
                <video controls>
                   <source src={cover_upcoming} type="video/mp4">
                   </source>
                </video>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
            </div>
          </div>
        </div>
      </div>

      <div className="disclamer">
        <h1 className="text-decoration-underline text-light fw-bold p-3">
          DISCLAMERS:
        </h1>

        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link text-light" href="#">
              &rarr; Active
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#">
              &rarr; Active
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#">
              &rarr; Active
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#">
              &rarr; Active
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Singleevent;
