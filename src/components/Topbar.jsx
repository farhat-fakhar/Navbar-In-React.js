import React from "react";
import "./Style.css";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
export default function Topbar() {
  return (
    <>
      <div className="topbar">
      
          <div className="row">
            <div className="col-lg-6  col-md-12 col-sm-12 d-flex justify-content-evenly align-items-center">
              <div className="contact-info d-flex  justify-content-evenly align-items-center">
                <div className="phone pe-4">
                  <span>
                    <FaPhone />
                  </span>{" "}
                  +92 324 3465234
                </div>
                <div className="email">
                  <span>
                    <FaEnvelope />
                  </span>{" "}
                  Example@gmail.com
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-12 col-sm-12">
              <div className="social-icons">
                <ul>
                  <li>
                    <a href="#">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaWhatsapp />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
              <form action="" className="form">
                <input type="text" placeholder="Search here!"  />  <span><FaSearch /></span>
              </form>
            </div>
          </div>
        </div>
     
    </>
  );
}
