import React, { useState } from "react";
import "./LocationPage.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import profile_img from "../Assets/profile_img.jpg";
import imgL1 from "../Assets/Burj Khalifa.jpg";
import imgL2 from "../Assets/Taj Mahal1.jpg";
import imgL3 from "../Assets/China Wall.jpg";
import imgL4 from "../Assets/Maldives.jpg";
import imgL5 from "../Assets/paris.jpg";
import imgL6 from "../Assets/fall.jpg";
import imgL7 from "../Assets/State.jpg";
import imgL8 from "../Assets/Rome.jpeg";

export const LocationPage = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <div className="banner2">
        <div className="header1" id="home">
          <nav>
            <Link to="/HomePage" className="logo">
              <img src={logo} alt="" className="logo" />
            </Link>
            <ul className="navbar">
              <li>
                <Link to="/HomePage">Home</Link>
                <Link to="/LocationPage" className="L">Locations</Link>
                <Link to="/About">About Us</Link>
                <Link to="/Contact">Contact Us</Link>
              </li>
            </ul>
            <div className="profile1" onClick={toggleMenu}>
              <img src={profile_img} alt="" className="profile1_img" />
              <span>John</span>
              {showMenu && (
                <div className="profile1-menu">
                  <ul>
                    <li><Link to="/Profile">Profile</Link></li>
                    <li><Link to="/UserBooking">Bookings</Link></li>
                    <li><Link to="/">Log out</Link></li>
                  </ul>
                </div>
              )}
            </div>
          </nav>
        </div>

        <section className="locations1" id="locations">
          <div className="ltitle">
            <h1>Locations</h1>
          </div>
          <div className="location1-content">
            <a>
              <div className="col1-content">
                <Link to="./LocationView">
                  <img src={imgL1} alt="" className="img1" />
                </Link>
                <h5>Dubai</h5>
                <p>U A E</p>
              </div>
            </a>

            <a>
              <div className="col1-content">
                <Link to="./LocationView">
                  <img src={imgL2} alt="" className="img1" />
                </Link>
                <h5>Agra</h5>
                <p>India</p>
              </div>
            </a>

            <a>
              <div className="col1-content">
                <Link to="./LocationView">
                  <img src={imgL3} alt="" className="img1" />
                </Link>
                <h5>Beijing</h5>
                <p>China</p>
              </div>
            </a>

            <a>
              <div className="col1-content">
                <Link to="./LocationView">
                  <img src={imgL4} alt="" className="img1" />
                </Link>
                <h5>Anantara</h5>
                <p>Maldives</p>
              </div>
            </a>

            <a>
              <div className="col1-content">
                <Link to="./LocationView">
                  <img src={imgL5} alt="" className="img1" />
                </Link>
                <h5>Paris</h5>
                <p>France</p>
              </div>
            </a>

            <a>
              <div className="col1-content">
                <Link to="./LocationView">
                  <img src={imgL6} alt="" className="img1" />
                </Link>
                <h5>Dhaka</h5>
                <p>Pakistan</p>
              </div>
            </a>

            <a>
              <div className="col1-content">
                <Link to="./LocationView">
                  <img src={imgL7} alt="" className="img1" />
                </Link>
                <h5>New York City</h5>
                <p>U S A</p>
              </div>
            </a>

            <a>
              <div className="col1-content">
                <Link to="./LocationView">
                  <img src={imgL8} alt="" className="img1" />
                </Link>
                <h5>Agra</h5>
                <p>India</p>
              </div>
            </a>

            <a>
              <div className="col1-content">
                <Link to="./LocationView">
                  <img src={imgL4} alt="" className="img1" />
                </Link>
                <h5>Agra</h5>
                <p>India</p>
              </div>
            </a>

            <a>
              <div className="col1-content">
                <Link to="./LocationView">
                  <img src={imgL1} alt="" className="img1" />
                </Link>
                <h5>Agra</h5>
                <p>India</p>
              </div>
            </a>

            <a>
              <div className="col1-content">
                <Link to="./LocationView">
                  <img src={imgL6} alt="" className="img1" />
                </Link>
                <h5>Agra</h5>
                <p>India</p>
              </div>
            </a>

            <a>
              <div className="col1-content">
                <Link to="./LocationView">
                  <img src={imgL2} alt="" className="img1" />
                </Link>
                <h5>Agra</h5>
                <p>India</p>
              </div>
            </a>

            <a>
              <div className="col1-content">
                <Link to="./LocationView">
                  <img src={imgL7} alt="" className="img1" />
                </Link>
                <h5>Agra</h5>
                <p>India</p>
              </div>
            </a>

            <a>
              <div className="col1-content">
                <Link to="./LocationView">
                  <img src={imgL3} alt="" className="img1" />
                </Link>
                <h5>Agra</h5>
                <p>India</p>
              </div>
            </a>

            <a>
              <div className="col1-content">
                <Link to="./LocationView">
                  <img src={imgL5} alt="" className="img1" />
                </Link>
                <h5>Agra</h5>
                <p>India</p>
              </div>
            </a>

            <a>
              <div className="col1-content">
                <Link to="./LocationView">
                  <img src={imgL7} alt="" className="img1" />
                </Link>
                <h5>Agra</h5>
                <p>India</p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LocationPage;
