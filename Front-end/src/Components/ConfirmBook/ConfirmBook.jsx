import React from "react";
import { Link } from "react-router-dom";
import "./ConfirmBook.css";
const ConfirmBook = () => {
  return (
    <div className="cont2">
      <div className="panel">
        <h2>Booking Details</h2>
        <form>
          <label htmlFor="mainFirstName">Main Customer First Name:</label>
          <input type="text" id="mainFirstName" />

          <label htmlFor="mainLastName">Main Customer Last Name:</label>
          <input type="text" id="mainLastName" />

          <label htmlFor="contactNumber">Contact Number:</label>
          <input type="tel" id="contactNumber" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />

          <label htmlFor="residentialAddress">Residential Address:</label>
          <input type="text" id="residentialAddress" />
        </form>
      </div>

      <div className="panel">
        <h2>Passenger Details</h2>
        <form>
          <label htmlFor="passengerFirstName">First Name:</label>
          <input type="text" id="passengerFirstName" />

          <label htmlFor="passengerLastName">Last Name:</label>
          <input type="text" id="passengerLastName" />

          <label htmlFor="passengerAge">Age:</label>
          <input type="number" id="passengerAge" />

          <label htmlFor="passengerDOB">Date of Birth:</label>
          <input type="date" id="passengerDOB" />

          <label htmlFor="passengerContact">Contact Number:</label>
          <input type="tel" id="passengerContact" />

          <label htmlFor="visaPhoto">Photo for Visa:</label>
          <input type="file" id="visaPhoto" accept="image/*" />

          <label htmlFor="passportPhoto">Photo of Passport:</label>
          <input type="file" id="passportPhoto" accept="image/*" />

          <label htmlFor="bankBalance">Bank Balance Sheet:</label>
          <input type="file" id="bankBalance" accept=".pdf" />
        </form>
      </div>

      <div className="panel1">
        <Link to="/Book" className="next-button">
          Back
        </Link>
        <Link to="/Payment" className="next-button">
          Proceed
        </Link>
      </div>
    </div>
  );
};

export default ConfirmBook;
