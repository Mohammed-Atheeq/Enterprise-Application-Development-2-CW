import React from "react";
import { Link } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
  return (
    <div className="cont4">
      <div className="panel3">
        <h2>Payment Details</h2>
        <form>
          <label htmlFor="cardNumber">Card Number:</label>
          <input type="text" id="cardNumber" />

          <label htmlFor="cardHolder">Cardholder Name:</label>
          <input type="text" id="cardHolder" />

          <div className="expiry-cvv">
            <div className="expiry">
              <label htmlFor="expiry">Expiry Date:</label>
              <input type="text" id="expiry" placeholder="MM/YY" />
            </div>
            <div className="cvv">
              <label htmlFor="cvv">CVV:</label>
              <input type="text" id="cvv" />
            </div>
          </div>

          <button className="pay-button" type="submit">Pay Now</button>
        </form>
      </div>
      <div className="panel4">
        <Link to="/ConfirmBook" className="next-button">
          Back
        </Link>
        <Link to="/" className="next-button">
          Done
        </Link>
      </div>
    </div>
  );
};

export default Payment;
