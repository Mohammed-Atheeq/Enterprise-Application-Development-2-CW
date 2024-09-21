import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

export const FinalBookingUpdate = () => {

    const {booking_id} = useParams();
    //const [tourId, setTourId] = useState(68);
    const [tour, setTour] = useState({
        customer_id: "",
        no_adults: "",
        no_children: "",
        no_infrant: "",
        destination: "",
        departure_date: "",
        return_date: "",
        hotel_type: "",
        hotel_name: "",
        room_type: "",
        no_rooms: "",
        airline_name: "",
        type_of_fair: "",
        activity_name: ""
    });
    const [allDestinations, setAllDestinations] = useState([]);
    const [allActivities, setAllActivities] = useState([]);
    const [destination, setDestination] = useState("");

    const fetchTourDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:8081/fly-loka/bookings/${booking_id}`);
            setTour(response.data);
        } catch (error) {
            console.error("Failed to fetch Tour Details", error);
        }
    };

    const fetchDestinations = async () => {
        try {
            const response = await axios.get(`http://localhost:8085/fly-loka/locations`);
            setAllDestinations(response.data);
        } catch (error) {
            console.error("Failed to fetch Destinations:", error);
        }
    };

    const fetchActivities = async () => {
        try {
            const response = await axios.get(`http://localhost:8085/fly-loka/activities?name=${destination}`);
            setAllActivities(response.data);
        } catch (error) {
            console.error("Failed to fetch Activities:", error);
        }
    };

    useEffect(() => {
        fetchTourDetails();
        fetchDestinations();
    }, [booking_id]);

    useEffect(() => {
        if (destination) {
            fetchActivities();
        }
    }, [destination]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTour(prevTour => ({
            ...prevTour,
            [name]: value
        }));
        if (name === "destination") {
            setDestination(value);
        }
    };

    async function update(event) {
        event.preventDefault();
        try {
            await axios.put(`http://localhost:8081/fly-loka/bookings/${booking_id}`, tour);
            alert("Tour Updated");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <h3>FinalBookingUpdate</h3>

            <input type="text" name="tourId" id="Tour_Id" value={booking_id} /> <br />

            <input type="number" name="customer_id" id="Customer_Id" value={tour.customer_id} onChange={handleInputChange} /> <br />

            <input type="number" name="no_adults" id="No_adults" value={tour.no_adults} onChange={handleInputChange} /> <br />

            <input type="number" name="no_children" id="No_adults" value={tour.no_children} onChange={handleInputChange} /> <br />

            <input type="number" name="no_infrant" id="No_Children" value={tour.no_infrant} onChange={handleInputChange} /> <br />


            <select name="destination" id="Destination" value={tour.destination} onChange={handleInputChange}>
                <option value="">Select Destination</option>
                {allDestinations.map(destination => (
                    <option key={destination.id} value={destination.name}>{destination.name}</option>
                ))}
            </select> <br />

            <input type="date" name='departure_date' id='Departure_date' value={tour.departure_date} onChange={handleInputChange} /> <br />

            <input type="date" name='return_date' id='Return_Date' value={tour.return_date} onChange={handleInputChange} /> <br />

            <input type="text" name='hotel_type' id='Hotel_Type' value={tour.hotel_type} onChange={handleInputChange} /> <br />

            <input type="text" name='hotel_name' id='Hotel_Name' value={tour.hotel_name} onChange={handleInputChange} /> <br />

            <input type="text" name='room_type' id='Room_Type' value={tour.room_type} onChange={handleInputChange} /> <br />

            <input type="number" name='no_rooms' id='No_Room' value={tour.no_rooms} onChange={handleInputChange} /> <br />

            <input type="text" name='airline_name' id='Airline' value={tour.airline_name} onChange={handleInputChange} /> <br />

            <input type="text" name='type_of_fair' id='Type_of_Fair' value={tour.type_of_fair} onChange={handleInputChange} /> <br />


            <label>Activities:</label><br />
            {allActivities.map(activity => (
                <label key={activity.id}>
                    <input
                        type="checkbox"
                        name="activity_name"
                        value={activity.name}
                        checked={tour.activity_name === activity.name}
                        onChange={handleInputChange}
                    />
                    {activity.name}
                </label>
            ))}

            <button onClick={update}>Update</button>
        </div>
    );
};
