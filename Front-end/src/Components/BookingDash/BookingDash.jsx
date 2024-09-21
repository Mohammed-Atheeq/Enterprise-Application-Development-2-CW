import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./BookingDash.css";
import { Link } from "react-router-dom";
import profile_img from "../Assets/profile_img.jpg";

const BookingDash = () => {
  const [tour, setTour] = useState([]);
  const[no_Bookings, setNoBookings] = useState()
  const[revenue, setRevenue] = useState()

  const fetchTourDetails = async () => {
      try {
          const response = await axios.get(`http://localhost:8081/fly-loka/bookings`);
          setTour(response.data);
      } catch (error) {
          console.error("Failed to fetch Tour Details", error);
      }
  };

    const fetchNumbers = async () => {

      try {

        const response = await axios.get(`http://localhost:8081/fly-loka/bookings/count`);
        setNoBookings(response.data);
      } catch (error) {
        console.error("Failed to fetch Destinations:", error);
      }
  };

  const fetchRevenue = async () => {

    try {

      const response = await axios.get(`http://localhost:8081/fly-loka/bookings/revenue`);
      setRevenue(response.data);
    } catch (error) {
      console.error("Failed to fetch Destinations:", error);
    }
};



  
  useEffect(() => {
      fetchTourDetails();
      fetchNumbers();
      fetchRevenue();
  } );

  async function deleteTour(tour_id) {

      try {
        await axios.delete(`http://localhost:8081/fly-loka/bookings/${tour_id}`);
        alert('Location Deleted');
        //fetchDestination(); // Fetch destinations again after deleting a location
      } catch (err) {
        console.log(err);
      }
  };
  return (
    <div className="booking-dash">
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
              <li className="active">Bookings</li>
            </Link>
            <Link to="/LocationDash">
              <li>Locations</li>
            </Link>
            <Link to="/Enquiries">
              <li>Enquiries</li>
            </Link>
          </ul>
        </div>

        <div className="main-content2">
          <h1>Bookings</h1>
          <div className="dashboard2-cards">
            <div className="card2">
              <h3>Total Number of Bookings</h3>
              <p>{no_Bookings}</p>
            </div>

            <div className="card2">
              <h3>Revenue</h3>
              <p>{revenue}</p>
            </div>
            
          </div>

          <div className="bookings">
            <h2></h2>
            

            <div className="bookings-table">
            <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Tour Id</th>
                <th>Customer Id</th>
                <th>No_Adults</th>
                <th>No_Children</th>
                <th>Destinaiton</th>
                <th>Amount</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
            {
                    tour.map(tour=>(
                        <tr >
                            <td>{tour.booking_id }</td>
                            <td>{tour.customer_id}</td>
                            <td>{tour.no_adults}</td>
                            <td>{tour.no_children}</td>
                            <td>{tour.destination}</td>
                            <td>{tour.amount}</td>
                            <td>
                                <Link to={`/FinalBookingUpdate/${tour.booking_id}`}><button>Edit</button> </Link>
                                <button type="button" className="btn btn-danger" onClick={() => deleteTour(tour.booking_id)}>Delete</button>

                            </td>

                          </tr>
                    ))
                }
                
              
            </tbody>
          </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDash;
