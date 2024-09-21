import React, { useState } from "react";
import "./AddLocation.css";

const AddLocation = () => {
  const [locationName, setLocationName] = useState("");
  const [country, setCountry] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Location Name:", locationName);
    console.log("Country:", country);
    console.log("Image File:", image);

    setLocationName("");
    setCountry("");
    setImage(null);
  };

  return (
    <div className="add-location">
      <h2>Add Location</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="locationName">Location Name:</label>
          <input
            type="text"
            id="locationName"
            value={locationName}
            onChange={(e) => setLocationName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Upload Image:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageUpload}
            required
          />
        </div>
        <button type="submit">Add Location</button>
      </form>
    </div>
  );
};

export default AddLocation;
