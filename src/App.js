import "./App.css";
import Layout from "./components/Layout";

import Homepage from "./components/Homepage"
import Events from "./components/Events";

import Allevents from "./pages/Allevents";
import Outlets from "./pages/Outlets";
import Login from "./pages/Login";
import Artists from "./pages/Artists";
import Eachartist from "./pages/Eachartist";
import Singleevent from "./pages/Singleevent";
import Content from "./pages/Content";
import Contentsofshows from "./pages/Contentsofshows";
import Eventsimages from "./pages/Eventsimages";
import Outletcontent from "./pages/Outletcontent";
import Artistcontent from "./pages/Artistcontent";
import AmbienceExperience from "./pages/AmbienceExperience";
import PotraitExperience from "./pages/PotraitExperience";

import { Routes, Route } from "react-router-dom";

import { disableReactDevTools } from "@fvilers/disable-react-devtools";

import Header from "./components/Header";

// import backgroundVideo from "../website_assets/NIGHTCUBE/OUTLET/home_bg2.mp4";

import backgroundVideo from "./website_assets/NIGHTCUBE/OUTLET/home_bg2.mp4";



if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}

function App() {

  

  return (
    <div className="background-video-container">
       <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover absolute top-0 left-0 z-[-1] background-video"
        >
          <source
            src={backgroundVideo } // Replace with your video file path
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      <Header />
      <div className="flex-1">
      <Routes>
    <Route path="/" element={<Layout />}>
    <Route  element={<Header />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/outlets" element={<Outlets />} />
      <Route path="/events" element={<Allevents />} />
      <Route path="/upcommingevents" element={<Homepage />} />
      <Route path="/liveevents" element={<Homepage />} />
      <Route path="/prevevents" element={<Homepage />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/eachartist" element={<Eachartist />} />
      <Route path="/singleevent/:event_id" element={<Singleevent />} />

      <Route path="/videos" element={<Eachartist />} />
      <Route path="/images" element={<Content />} />

      <Route path="/contentsofshows" element={<Contentsofshows/>} />
      <Route path="/eventsimages/:event_id" element={<Eventsimages/>} />
 
      <Route path="/ambienceexperience/:outlet_id" element={<AmbienceExperience/>} />
      <Route path="/potraitexperience/:artist_id" element={<PotraitExperience/>} />
   

      <Route path="/outletcontents" element={<Outletcontent/>} />
      <Route path="/artistcontents" element={<Artistcontent/>} />

      
    </Route>
  </Routes>
      </div>
  
    </div>
 
  );


}

export default App;
