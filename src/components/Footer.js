// import React from 'react'

// import { Link } from "react-router-dom";
// import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { IoLocation } from "react-icons/io5";
// import { FaPhone } from "react-icons/fa";
// import { MdMarkEmailUnread } from "react-icons/md";

// function Footer() {
//   return (
//     // <div className = "border footerStyles">
//     //   Footer
//     // </div>

//     <footer className=" text-light p-5">
//       <div className="d-flex justify-content-evenly flex-wrap">
//         <div className="text-center">
//           <h5 className=" border-bottom border-warning">Address</h5>
//           <ul className="nav flex-column nav-underline">
//             <li className="nav-item">
//               <Link className="nav-link text-light" to="/contact">
//                 COMPANY NAME : NEROLIFE NETWORKS PVT. LTD.
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link text-light" to="/contact">
//               <IoLocation />  #17, KIRLOSKAR LAYOUT,
//                 <br />
//                 BANGALORE 560073 KARNATAKA, INDIA
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link text-light" to="/contact">
//                 <FaPhone /> (+91)-9740619310
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link text-light" to="/contact">
//                 <MdMarkEmailUnread /> NEROLIFEEXCLUSIVENETWORKS@GMAIL.COM
//               </Link>
//             </li>
//           </ul>
//         </div>

//         <div className="text-center">
//           <h5 className=" border-bottom border-warning">WebLinks</h5>
//           <ul className="nav flex-column nav-underline">
//             <li className="nav-item">
//               <Link className="nav-link text-light" to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link text-light" to="/contact">
//                 Contact
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link text-light" to="/about">
//                 About
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link text-light" to="/Events">
//                 Events
//               </Link>
//             </li>
//           </ul>
//         </div>

//         <div className="text-center">
//           <h5 className=" border-bottom border-warning">Social</h5>
//           <ul className="nav flex-column nav-underline">
//             <li className="nav-item">
//               <Link
//                 className="nav-link text-light"
//                 to="https://www.facebook.com"
//                 target="_blank"
//               >
//                 <FaFacebook />
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 className="nav-link text-light"
//                 to="https://www.linkedin.com"
//                 target="_blank"
//               >
//                 <FaLinkedin />
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 className="nav-link text-light"
//                 to="https://instagram.com"
//                 target="_blank"
//               >
//                 <FaInstagramSquare />
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 className="nav-link text-light"
//                 to="https://www.twitter.com"
//                 target="_blank"
//               >
//                 <FaTwitter />
//               </Link>
//             </li>
//           </ul>
//         </div>

//         <div className="text-center">
//           <h5 className=" border-bottom border-warning">Company Details</h5>
//           <ul className="nav flex-column nav-underline">
//             <li className="nav-item">
//               <Link className="nav-link text-light" to="/termsandconditions">
//                 Terms & Conditions
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link text-light" to="/privacy">
//                 Privacy
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link text-light" to="/companyprofile">
//                 Company Profile
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <small className="d-flex justify-content-between p-5">
//         <Link
//           to="https://www.ecoders.in"
//           target="_blank"
//           className="text-warning"
//         >
//           &copy; Nerolife, POWERED BY NIGHTCUBE SYSTEMS
//         </Link>
//         <Link
//           to="https://www.ecoders.in"
//           target="_blank"
//           className="text-warning"
//         >
//           Developed And Maintained by Ecoders
//         </Link>
//       </small>
//     </footer>
//   )
// }

// export default Footer;

// Footer.js

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-transparent">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 d-flex flex-wrap justify-content-between">
          {/* Address */}
          {/* <div className="mb-4 md:mb-0">
            <h3 className="text-white text-lg font-semibold mb-2 text-center">
              Address
            </h3>
            <p className="text-light text-center md:text-left">
              #17, KIRLOSKER LAYOUT, SAPTAGIRI
            </p>
            <p className="text-light text-center md:text-left">
              BANGALORE, IN.
              <br/>PIN - 560073
            </p>
            <p className="text-light text-center md:text-left">
              CONTACT - +91 9740619310
            </p>
          </div> */}

          {/* Website Links */}
          <div className="mb-2 md:mb-0">
            <ul className="list-none text-center md:text-left d-flex flex-warp">
              <li className="m-3 border-bottom">
                <a href="/" className="text-light mb-3">
                  TERMS & CONDITION
                </a>
              </li>
              <li className="m-3 border-bottom">
                <a href="/" className="text-light mb-3">
                  PRIVACY
                </a>
              </li>
              <li className="m-3 border-bottom">
                <a href="/" className="text-light mb-3">
                  COMPANY PROFILE
                </a>
              </li>
              <li className="m-3 border-bottom">
                <a href="/" className="text-light mb-3">
                  PARTNERS
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="mb-2 md:mb-0">
            <ul className="list-none text-center md:text-left d-flex flex-wrap justify-content-end">
              <li className="m-2">
                <a href="/" className="text-light">
                  Fb
                </a>
              </li>
              <li className="m-2">
                <a href="/" className="text-light">
                  Tw
                </a>
              </li>
              <li className="m-2">
                <a href="/" className="text-light">
                  In
                </a>
              </li>
            </ul>
          </div>

          {/* Privacy/Disclaimer Links */}
          <div>
          <ul className="list-none p-0 text-center md:text-left">
              <li className="m-2">
                <a href="/" className="text-light">
                  POWERED BY NIGHTCUBE SYSTEMS
                </a>
              </li>
              <li className="m-2">
                <a href="/" className="text-light">
                  DEVELOPED AND MAINTAINED BY ECODERS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

