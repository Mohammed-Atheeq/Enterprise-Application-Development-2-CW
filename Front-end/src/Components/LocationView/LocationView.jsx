import React, { useState } from "react";
import "./LocationView.css";
import { Link } from "react-router-dom";
import burj1 from "../Assets/Burj1.jpg";

export const LocationView = () => {

  return (
    <div>
      <div className="title1">
        <img src={burj1} alt="" className="image1" />
        <h2>Burj Khalifa</h2>
        <h3>United Arab Emirates</h3>
        <h4>Dubai</h4>
        <p>
          It is the world's tallest structure. With a total height of 829.8 m
          and a roof height (excluding antenna, but including a 242.6 m spire)
          of 828 m (2,717 ft).
        </p>
        <p>
          Burj Khalifa has been the tallest structure and building in the world
          since its topping out in 2009.
        </p>
      </div>

        <a href="" className="book-button11">
          <Link to="/Book">Book </Link>
        </a>
    </div>
  );
};
