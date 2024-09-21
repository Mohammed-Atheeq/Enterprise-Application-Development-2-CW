import React, { useState } from "react";
import "./LocationDash.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import profile_img from "../Assets/profile_img.jpg";
import imgL1 from "../Assets/Burj Khalifa.jpg";
import imgL2 from "../Assets/Taj Mahal1.jpg";
import imgL3 from "../Assets/China Wall.jpg";
import imgL4 from "../Assets/Maldives.jpg";

const LocationDash = () => {
  const [selectedBookingType, setSelectedBookingType] = useState("Future");

  const handleBookingTypeChange = (event) => {
    setSelectedBookingType(event.target.value);
  };

  return (
    <div className="c">
      <div className="profile">
        <img src={profile_img} alt="" className="profile_img" />
        <span>John</span>
      </div>

      <div className="admin-dashboard">
        <div className="side-panel">
          <ul>
            <Link to="/AdminHome">
              <li>Dashboard</li>
            </Link>
            <Link to="/BookingDash">
              <li>Bookings</li>
            </Link>
            <Link to="/LocationDash">
              <li className="active"> Locations</li>
            </Link>
            <Link to="/Enquiries">
              <li>Enquiries</li>
            </Link>
          </ul>
        </div>

        <div className="main-content4">
          <h1>Locations</h1>
          <div className="dashboard4-cards">
            <div className="card4">
              <h3>Total Number of Bookings</h3>
              <p>100</p>
            </div>
            <div className="card4">
              <h3>Revenue</h3>
              <p>$10,000</p>
            </div>
            <div className="card4">
              <h3>Net Profit</h3>
              <p>$4,000</p>
            </div>
            <div className="card4">
              <h3>Revenue</h3>
              <p>$10,000</p>
            </div>
          </div>

          <section className="locations5" id="locations">
            <div className="package-title5">
              <h2>Locations</h2>
            </div>

            <div className="location5-content">
              <a>
                <div className="col5-content">
                  <img src={imgL1} alt="" className="img1" />
                  <h5>Dubai</h5>
                  <p>U A E</p>
                </div>
              </a>

              <a>
                <div className="col5-content">
                  <img src={imgL2} alt="" className="img1" />
                  <h5>Agra</h5>
                  <p>India</p>
                </div>
              </a>

              <a>
                <div className="col5-content">
                  <img src={imgL3} alt="" className="img1" />
                  <h5>Beijing</h5>
                  <p>China</p>
                </div>
              </a>

              <a>
                <div className="col5-content">
                  <img src={imgL4} alt="" className="img1" />
                  <h5>Anantara</h5>
                  <p>Maldives</p>
                </div>
              </a>

              <a>
                <div className="col5-content">
                  <img src={imgL4} alt="" className="img1" />
                  <h5>Anantara</h5>
                  <p>Maldives</p>
                </div>
              </a>

              <a>
                <div className="col5-content">
                  <img src={imgL4} alt="" className="img1" />
                  <h5>Anantara</h5>
                  <p>Maldives</p>
                </div>
              </a>
            </div>
          </section>
          <Link to="/AddLocation" className="add_location_button">
          Add a Location
        </Link>
        </div>
      </div>
    </div>
  );
};

export default LocationDash;
