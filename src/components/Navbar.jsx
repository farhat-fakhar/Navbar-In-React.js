import React, { useState } from "react";
import "./Style.css";
import { FaUser, FaArrowDown, FaBars, FaTimes } from "react-icons/fa";
import Topbar from "./Topbar";

export default function Navbar() {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <>
      <Topbar />
      <nav>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-1 col-md-4 col-sm-2 d-flex justify-content-center align-items-center">
              <div className="logo">
                <a href="#">
                  <h1>BRAND</h1>
                </a>
              </div>
            </div>
            <div className="col-lg-7 col-md-1 col-sm-1 d-flex justify-content-center align-items-center main-menu">
              <div className="main-menu">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">
                      Products{" "}
                      <span>
                        <FaArrowDown />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Services{" "}
                      <span>
                        <FaArrowDown />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8 d-flex justify-content-center align-items-center">
              <div className="nav-btn d-flex justify-content-center align-items-center">
                <button>
                  <FaUser /> <a>Login</a>
                </button>
                <button>
                  <FaUser /> <a>Register</a>
                </button>
                <span onClick={toggleMobileMenu} className="hamburger-icon">
                  {isMobileMenuVisible ? (
                    <FaTimes className="icon-close" />
                  ) : (
                    <FaBars className="icon-bars" />
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {isMobileMenuVisible && (
        <div className="mobile-menu">
 
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">
                Products{" "}
                <span>
                  <FaArrowDown />
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                Services{" "}
                <span>
                  <FaArrowDown />
                </span>
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
