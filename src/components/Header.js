import React from "react";

import nerolifeLogo from "../website_assets/logos/logo.png";

import GroupAddIcon from "@mui/icons-material/GroupAdd";

import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

function Header() {
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="headerStyles flex pe-5">
      <div className="flex align-items-center">
        <img src={nerolifeLogo} alt="Logo" className="h-8" />
        <span className="text-white ml-2 text-lg font-semibold">NEROLIFE</span>
      </div>
      <div className="flex align-items-center my-auto" style={{ marginLeft: "auto" }}>
        <div className="hidden md:flex space-x-4">
          <div className="p-2">
            <a href="/" className="menu-items">
              HOME
            </a>
          </div>

          <div className="p-2">
            <a href="/events" className="menu-items">
              EVENTS
            </a>
          </div>

          <div className="p-2">
            <a href="/outlets" className="menu-items">
              OUTLETS
            </a>
          </div>
          <div className="p-2">
            <a href="/artists" className="menu-items">
              ARTISTS
            </a>
          </div>
          <div className="p-2">
            <a href="/nightcube" className="menu-items">
              NIGHTCUBE
            </a>
          </div>
          <div className="p-2">
                <button onClick={toggleDropdown} className="menu-items">
                  GALLERY
                </button>
                {isDropdownOpen && (
                  <div className="dropdown-content">
                    {/* Your dropdown items go here */}
                    <div className="  flex align-items-center justify-content-center gallerybuttons cursor-pointer">
                      <a href="/images" className="gallery-items" >
                        IMAGES
                      </a>
                    </div>
                    <div className="  flex align-items-center justify-content-center gallerybuttons cursor-pointer">
                      <a href="/videos" className="gallery-items" >
                        VIDEOS
                      </a>
                    </div>
                  </div>
                )}
              </div>
          <div className="p-2">
            <a href="/partners" className="menu-items">
              STORIES
            </a>
          </div>
          <div className="p-2">
            <a href="/login" className="menu-items">
              <GroupAddIcon style={{ color: "white" }}></GroupAddIcon>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
{
  /* 
 Header.js

 import React, { useState } from "react";

 import nerolifeLogo from "../website_assets/logos/logo.png";

 import GroupAddIcon from "@mui/icons-material/GroupAdd"; */
}

// const Header = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-transparent py-4">
//       <div className="container mx-auto flex  justify-between">
//         <div className="flex ">
//           <img src={nerolifeLogo} alt="Logo" className="h-8" />
//           <span className="text-white ml-2 text-lg font-semibold">
//             NEROLIFE
//           </span>
//         </div>

//         <div className="hidden md:flex space-x-4">
//           <div className="p-2">
//             <a href="/" className="menu-items">
//               HOME
//             </a>
//           </div>

//           <div className="p-2">
//             <a href="/events" className="menu-items">
//               EVENTS
//             </a>
//           </div>

//           <div className="p-2">
//             <a href="/outlets" className="menu-items">
//               OUTLETS
//             </a>
//           </div>
//           <div className="p-2">
//             <a href="/artists" className="menu-items">
//               ARTISTS
//             </a>
//           </div>
//           <div className="p-2">
//             <a href="/nightcube" className="menu-items">
//               NIGHTCUBE
//             </a>
//           </div>
//           <div className="p-2">
//             <button
//               className="menu-items"
//               onClick={toggleDropdown}
//               clbuttonssName="menu-items"
//             >
//               GALLERY
//             </button>
//             {isDropdownOpen && (
//   <div className='p-2'>
//   <button onClick={toggleDropdown}  className='menu-items'>GALLERY</button>
//   {isDropdownOpen && (
//   <div className="dropdown-content">
//     {/* Your dropdown items go here */}
//     <div className="border ms-2 flex align-items-center justify-content-center gallerybuttons cursor-pointer" >
//     <a href="/events"  className='menu-items'>IMAGES</a>
//     </div>
//     <div>
//       <a className="menu-items" href="/videos">
//         videos
//       </a>
//     </div>
//   </div>
// )}
// </div>
//             )}
//           </div>
//           <div className="p-2">
//             <a href="/partners" className="menu-items">
//               STORIES
//             </a>
//           </div>
//           <div className="m-2">
//             <a href="/login" className="menu-items">
//               <GroupAddIcon style={{ color: "white" }}></GroupAddIcon>
//             </a>
//           </div>
//         </div>

//         {/* Mobile Menu Icon */}
//         <div className="md:hidden">
//           <button
//             onClick={toggleMenu}
//             className="text-white focus:outline-none"
//           >
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               {isMenuOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 ></path>
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 ></path>
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-gray-800 p-4 absolute top-16 right-0 left-0 z-10">
//           <a href="#" className="block text-white py-2">
//             Home
//           </a>
//           <a href="#" className="block text-white py-2">
//             Login
//           </a>
//           <a href="#" className="block text-white py-2">
//             Register
//           </a>
//           <a href="#" className="block text-white py-2">
//             Events
//           </a>
//           <a href="#" className="block text-white py-2">
//             Logout
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Header;
