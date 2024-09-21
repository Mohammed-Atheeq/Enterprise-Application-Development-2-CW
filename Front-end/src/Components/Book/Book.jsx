import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import "./Book.css";

const Book = () => {

  const[customerid, setCustomerId] = useState(20)
    const[no_adults, setAdults] = useState(0)
    const[no_childrens, setChildrens] = useState(0)
    const[no_infant, setInfant] = useState(0)

    const[alldestination, setAllDestination] = useState([])
    const[destination, setDestination] = useState("")
    const[destinationPriceadults, setDestinationPriceAdults] = useState(0)
    const[destinationPricechildrens, setDestinationPriceChildrens] = useState(0)
    const[destinationPriceinfant, setDestinationPriceInfant] = useState(0)
    const[destinationDescription, setDestinationDescription] = useState("");

    const[departuredate, setDepartureDate] = useState("")
    const[returndate, setReturnDate] = useState("")
    const[hoteltype, setHotelType] = useState("")
    const[allhotelnames, setAllHotelNames] = useState([])
    const[hotelname, setHotelName] = useState("")
    const[roomtype, setRoomType] = useState("")
    const[noroom, setNoRoom] = useState(0)
    const[airline, setAirline] = useState("")
    const[typeoffair, setTypeOfFair] = useState("")

    const[allactivity, setAllActivity] = useState([])
    const[activity, setActivity] = useState("")
    const[selectedActivities, setSelectedActivities] = useState([]);
    const[activityPrices, setActivityPrices] = useState([]);

    const [totalAmount, setTotalAmount] = useState(0);

    const handleIncrementAdults = () =>
    {
        setAdults(no_adults + 1);
    }
    const handleDecrementAdults = () =>
    {
        if(no_adults > 0)
            setAdults(no_adults - 1);
    }

    const handleIncrementChildren = () =>
    {
        setChildrens(no_childrens + 1);
    }
    const handleDecrementChildren = () =>
    {
        if(no_childrens > 0)
        setChildrens(no_childrens - 1);
    }

    const handleIncrementInfant = () =>
    {
        setInfant(no_infant + 1);
    }
    const handleDecrementInfant = () =>
    {
        if(no_infant > 0)
        setInfant(no_infant - 1);
    }

    const handleIncrementRoom = () =>
    {
        setNoRoom(noroom + 1);
    }
    const handleDecrementRoom = () =>
    {
        if(noroom > 0)
        setNoRoom(noroom - 1);
    }

    const fetchDestination = async () => {

        try {
    
          const response = await axios.get(`http://localhost:8085/fly-loka/locations`);
          setAllDestination(response.data);
        } catch (error) {
          console.error("Failed to fetch Destinations:", error);
        }
    };

    {/*
    const fetchHotels = async () => {

        try {
    
          const response = await axios.get(`http://192.168.190.184:8081/fly-loka/hotels?name=${destination}`);
          setAllHotelNames(response.data);
        } catch (error) {
          console.error("Failed to fetch Hotels:", error);
        }
    };*/}

    const fetchActivity = async () => {
        try{
            const response = await axios.get(`http://localhost:8085/fly-loka/activities?name=${destination}`);
            setAllActivity(response.data);
        }
        catch(error){
            console.log("Failed to fetch the Activity : ", error)
        }
    };

    useEffect(() => {
        fetchDestination();
        //fetchHotels(destination);
        fetchActivity(destination)
    }, [destination]);//, [destination]);

    const handleDestinationChange = (event) => {
        const selectedName = event.target.value;
        const selectedDestination = alldestination.find(destination => destination.name === selectedName);
        if (selectedDestination) {
            setDestination(selectedName);
            setDestinationPriceAdults(selectedDestination.adult_price);
            setDestinationPriceChildrens(selectedDestination.children_price);
            setDestinationPriceInfant(selectedDestination.infant_price);
            setDestinationDescription(selectedDestination.description);
        }
    };

    const handleActivityChange =(event,index)=>{
        const isChecked = event.target.checked;
        const activity = event.target.value;
        const activityPrice = allactivity[index].adultprice;


        if (isChecked) {

            setSelectedActivities(prevSelected => [...prevSelected, activity]);
            setActivityPrices(prevPrices => [...prevPrices, activityPrice]);
        } else {

            const updatedSelectedActivities = selectedActivities.filter(selected => selected !== activity);
            const indexOfActivity = selectedActivities.findIndex(selected => selected === activity);
            const updatedActivityPrices = [...activityPrices];
            updatedActivityPrices.splice(indexOfActivity, 1); // Remove price at the same index as the unselected activity
            setSelectedActivities(updatedSelectedActivities);
            setActivityPrices(updatedActivityPrices);
        }
    }

    const totalPriceForAdult = no_adults *  (destinationPriceadults + activityPrices.reduce((total, price) => total + price, 0));

    const totalPriceForChildren = no_childrens* (destinationPricechildrens + activityPrices.reduce((total, price) => total + price, 0));

    const totalPriceForInfant = no_infant * (destinationPriceinfant + activityPrices.reduce((total, price) => total + price, 0));

    const total = totalPriceForAdult + totalPriceForChildren + totalPriceForInfant;

    async function save(event) {

        const activityString = selectedActivities.join(', ');

        event.preventDefault();
        try{
            await axios.post("http://localhost:8081/fly-loka/bookings", {

    
            customer_id:customerid,
            no_adults:no_adults,
            no_children:no_childrens,
            no_infant:no_infant,
            destination:destination,
            departure_date:departuredate,
            retrun_date:returndate,
            hotel_type:hoteltype,
            hotel_name:hotelname,
            room_type:roomtype,
            no_room:noroom,
            airline:airline,
            fair_type:typeoffair,
            activity:activityString,
            amount:total

            });
            alert("Tour Added");
        }
        catch(err){
            alert(err);
        }
    }

    function totalPssanger() {
        setTotalAmount(no_adults + no_childrens + no_infant)
    }

/*
  const { fetchedUserId } = useParams();
  const [passengers, setPassengers] = useState({
    adults: 0,
    children: 0,
    infants: 0
  });
  const [destination, setDestination] = useState("None");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  useEffect(() => {
    // Fetch data or perform side effects on component mount
  }, []);

  const [displayDetails, setDisplayDetails] = useState({});

  const handleIncrement = (category) => {
    setPassengers((prevPassengers) => ({
      ...prevPassengers,
      [category]: prevPassengers[category] + 1
    }));
  };

  const handleDecrement = (category) => {
    setPassengers((prevPassengers) => ({
      ...prevPassengers,
      [category]: Math.max(prevPassengers[category] - 1, 0)
    }));
  };

  const updateDisplayDetails = () => {
    const details = {
      passengers: passengers.adults + passengers.children + passengers.infants,
      destination,
      departureDate,
      returnDate,
      // Add more details as needed
    };
    setDisplayDetails(details);
  };*/

  return (

    <div>
        <br />

       {/* <Link to="/FinalBookingUpdate">View the Booking </Link> <br /> */}

        No.Adults : <button onClick={handleIncrementAdults}>+</button> {no_adults} <button onClick={handleDecrementAdults}>-</button> <br /><br />

        No.Childrens : <button onClick={handleIncrementChildren}>+</button> {no_childrens} <button onClick={handleDecrementChildren}>-</button> <br /><br />

        No.Infant : <button onClick={handleIncrementInfant}>+</button> {no_infant} <button onClick={handleDecrementInfant}>-</button> <br /><br />
                
        Destination : <select name="Destination" id="Destination" onChange={handleDestinationChange}>
            
                <option value="">--select--</option>

                {alldestination.map ((alldestinations, index) => (

                    <option value={alldestinations.name} key={index} >{alldestinations.name}</option> 

                ))} 
           
        </select> <br /><br />
        
       

        Departure Date : <input type="date" name="Departure Date" id="Departure_Date"
            value={departuredate}
            onChange={(event) => setDepartureDate(event.target.value)}
        /> <br /><br />

        Retrun Date : <input type="date" name="Return Date" id="Return_Date"
            value={returndate}
            onChange={(event) => setReturnDate(event.target.value)}
        /> <br /><br />

        Hotel Type : <input type="number" name="Hotel Type" id='Hotel_Type'
            value={hoteltype}
            onChange={(event) => setHotelType(event.target.value)}
        /> <br /><br />

        Hotel Name : <select name="Hotel Name" id="Hotel_Name" onChange={(event) => setHotelName(event.target.value)}>

            <option>--select--</option>
            <option>Hotel A</option>
            <option>Hotel B</option>
            <option>Hotel C</option>
            <option>Hotel D</option>
            <option>Hotel F</option>
            
            {allhotelnames.map ((hotelname, index) => (

                <option value={hotelname} key={index}>{hotelname}</option>
            
            ))}

        </select> <br /><br />

        Room Type : <select name="Room Type" id="Room_Type" onChange={(event) => setRoomType(event.target.value)}>
            <option value="">--select--</option>
            <option value="Single">Single</option>
            <option value="Double">Double</option>
        </select> <br /><br />

        No of Room : <button onClick={handleIncrementRoom}>+</button> {noroom} <button onClick={handleDecrementRoom}>-</button> <br /><br />

        Airline : <input type="text" name="Airline" id="Airline"
            value={airline}
            onChange={(event) => setAirline(event.target.value)}
        /> <br /><br />

        Type of Fair : <select name="Type of fair" id="Type_of_fair" onChange={(event) => setTypeOfFair(event.target.value)}>
            <option value="">--select--</option>
            <option value="First Class">First Class</option>
            <option value="Business Class">Business Class</option>
            <option value="Economy Class">Economy Class</option>
        </select> <br /><br />

        Activities :
        {allactivity.map((allactivities,index)=>
            <div key={index}>
                <input id={index} type="checkbox" value={allactivities.name}  onChange={(e)=>handleActivityChange(e,index)} />{allactivities.name} - <br />Adults : {allactivities.adultprice} <br />Childrens : {allactivities.childprice}
            </div>
          )
        }

        <br /><button onClick={save}>Save</button>

        <p>Selected Activities:</p>
            <ul>
                {selectedActivities.map((activity, index) => (
                    <li key={index}>
                        {activity} - ${activityPrices[index]}
                    </li>
                ))}
            </ul>


        <p>
            Price for : {destination} <br />
            Description: {destinationDescription} <br />
            Price for Adults LKR : {destinationPriceadults} <br />
            Price for Children LKR : {destinationPricechildrens} <br />
            Price for Infant LKR : {destinationPriceinfant} <br /> <br />
            
            Activity : {selectedActivities} <br />
            Activity Price : {activityPrices} <br />
            Total Price For Adult: ${totalPriceForAdult} <br />
            Total Price For Children: ${totalPriceForChildren} <br />
            Total Price For Infant: ${totalPriceForInfant} <br /> <br />
            Total : ${total}
        </p>

    </div>
   
  );
};

export default Book;