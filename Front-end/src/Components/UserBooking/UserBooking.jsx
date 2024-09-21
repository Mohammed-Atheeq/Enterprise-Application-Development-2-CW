import React from "react";
import "./UserBooking.css";
import profile_img from "../Assets/profile_img.jpg";

const UserBooking = () => {
  return (
    <div className="booking-dash">
      <div className="profile">
        <img src={profile_img} alt="" className="profile_img" />
        <span>John</span>
      </div>

      <div className="admin-dashboard">
        <div className="main-content11">
          <h1></h1>
          <div className="dashboard-cards">
            <div className="card">
              <h3>Total Number of Bookings</h3>
              <p>100</p>
            </div>
            <div className="card">
              <h3>Money Spend</h3>
              <p>$10,000</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bookings1">
        <h2>My Bookings</h2>
        <input type="text" placeholder="Search Bookings" className="Search1" />
        <div className="bookings1-table">
          <table>
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>User Name</th>
                <th>Date</th>
                <th>Passport Number</th>
                <th>Location</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>Shasny</td>
                <td>2022-04-01</td>
                <td>32485255</td>
                <td>India</td>
              </tr>
            </tbody>

            <tbody>
              <tr>
              <td>1</td>
                <td>Shasny</td>
                <td>2022-04-01</td>
                <td>32485255</td>
                <td>India</td>
              </tr>
            </tbody>

            <tbody>
              <tr>
              <td>1</td>
                <td>Shasny</td>
                <td>2022-04-01</td>
                <td>32485255</td>
                <td>India</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserBooking;
