import React, { useEffect, useState } from 'react'
import axios from "axios";
import "./AdminHome.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import profile_img from "../Assets/profile_img.jpg";
import imgL1 from "../Assets/Burj Khalifa.jpg";
import imgL2 from "../Assets/Taj Mahal1.jpg";
import imgL3 from "../Assets/China Wall.jpg";
import imgL4 from "../Assets/Maldives.jpg";

const AdminHome = () => {


  const[id, setId] = useState()

    const[alldestination, setAllDestination] = useState([])
    const[destination, setDestination] = useState("")
    const[name, setName] = useState("")
    const[description, setDescription] = useState("")
    const[adultprice, setAdultPrice] = useState()
    const[childprice, setChildPrice] = useState()
    const[infantprice, setInfantPrice] = useState()
    
    const[editingLocation, setEditLocation] = useState()

    const[no_locations, setNoLocations] = useState()

    const fetchDestination = async () => {

        try {
    
          const response = await axios.get(`http://localhost:8085/fly-loka/locations`);
          setAllDestination(response.data);
        } catch (error) {
          console.error("Failed to fetch Destinations:", error);
        }
    };

    const fetchNumbers = async () => {

      try {
  
        const response = await axios.get(`http://localhost:8085/fly-loka/locations/num`);
        setNoLocations(response.data);
      } catch (error) {
        console.error("Failed to fetch Destinations:", error);
      }
  };
    
    

    useEffect(() => {
        fetchDestination();
        fetchNumbers();
    });

    const handleDestinationChange = (event) => {
        const selectedName = event.target.value;
        const selectedDestination = alldestination.find(destination => destination.name === selectedName);
        if (selectedDestination) {
            setName(selectedName);
            setDescription(selectedDestination.description);
            setAdultPrice(selectedDestination.adult_price);
            setChildPrice(selectedDestination.children_price);
            setInfantPrice(selectedDestination.infant_price)
            setId(selectedDestination.location_id )
        }

        
    };

    

    async function save(event) {
        event.preventDefault();
        try{
            await axios.post("http://localhost:8085/fly-loka/locations", {

            name: name,
            description: description,
            adult_price: adultprice,
            children_price: childprice,
            infant_price: infantprice,

            
            });
            alert("Location Added");
        }
        catch(err){
            alert(err);
        }
    }

    async function update(event) {
        event.preventDefault();
        try {
          await axios.put(`http://localhost:8085/fly-loka/locations/${id}`, {
            location_id:id,
            name: name,
            description: description,
            adult_price: adultprice,
            children_price: childprice,
            infant_price: infantprice,
          });
          alert("Location Updated");
        } catch (err) {
          console.log(err)
        }
    }

    async function deleteLocation(id) {

        try {
          await axios.delete(`http://localhost:8085/fly-loka/locations/${id}`);
          alert('Location Deleted');
          fetchDestination(); // Fetch destinations again after deleting a location
        } catch (err) {
          console.log(err);
        }
    };

    const editLocation = (locations) => {
      setEditLocation(locations);
      setName(locations.name);
      setDescription(locations.description);
        setAdultPrice(locations.adult_price);
        setChildPrice(locations.children_price);
        setInfantPrice(locations.infant_price);
        setId(locations.location_id);
    }


  const [selectedBookingType, setSelectedBookingType] = useState("Future");

  const handleBookingTypeChange = (event) => {
    setSelectedBookingType(event.target.value);
  };


  

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8087/fly-loka/user');
            setUsers(response.data);
        } catch (error) {
            console.error('Failed to fetch users:', error);
        }
    };

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:8087/fly-loka/user/${id}`);
            alert('User Deleted');
            fetchUsers(); // Fetch users again after deleting a user
        } catch (error) {
            console.error('Failed to delete user:', error);
        }
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
              <li className="active">Dashboard</li>
            </Link>
            <Link to="/BookingDash">
              <li>Bookings</li>
            </Link>
            <Link to="/LocationDash">
              <li>Locations</li>
            </Link>
            <Link to="/Enquiries">
              <li>Enquiries</li>
            </Link>
          </ul>
        </div>

        <div className="main-content1">
          <h1>Dashboard</h1>
          

          <div className="bookings">
            <h2>Locations</h2>
            

            <div className="bookings-table">
              <table>
                <thead>
                  <tr>
                    <th>Location Id</th>
                    <th>Location Name</th>
                    <th>Location Description</th>
                    <th>Adult Amout</th>
                    <th>Children Amount</th>
                    <th>Infant Amount</th>
                    <th>Options</th>
                  </tr>
                </thead>

                <tbody>
                {
                    alldestination.map(locations=>(
                        <tr >
                            <td>{locations.location_id}</td>
                            <td>{locations.name}</td>
                            <td>{locations.description}</td>
                            <td>{locations.adult_price}</td>
                            <td>{locations.children_price}</td>
                            <td>{locations.infant_price}</td>
                            <td>
                                <button type="button" className="btn btn-warning" onClick={() => editLocation(locations)}>Edit</button> {"   "}
                                <button type="button" className="btn btn-danger" onClick={() => deleteLocation(locations.location_id)}>Delete</button>
                            </td>
                          </tr>
                    ))
                }
            </tbody>

            <section> <br /><br />
          <input type="text" name="Name" id="name" placeholder='Destination Name'
              value={name}
              onChange={(event) => setName(event.target.value)}
          /> <br /><br />

          <input type="text" name="description" id="description" placeholder='Description'
              value={description}
              onChange={(event) => setDescription(event.target.value)}
          /> <br /><br />

          <input type="number" name="adultPrice" id="adult_price" placeholder='Adult Price'
              value={adultprice}
              onChange={(event) => setAdultPrice(event.target.value)}
          /> <br /><br />

          <input type="number" name="childPrice" id="children_price" placeholder='Child Price'
              value={childprice}
              onChange={(event) => setChildPrice(event.target.value)}
          /> <br /><br />

          <input type="number" name="infantPrice" id="infant_price" placeholder='Infant Price'
              value={infantprice}
              onChange={(event) => setInfantPrice(event.target.value)}
          /> <br /><br />

          <button onClick={save}>Add</button> <button onClick={update}>Update</button> <button onClick={deleteLocation}>Delete</button> <br />
        </section>
              </table>
            </div>

            <div className="bookings">
              <h2>Users</h2>
              <div className="bookings-table">
              <table>
                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {users.map((user) => (
                                <tr key={user.userId}>
                                    <td>{user.id}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <button className="Button-Del" onClick={() => deleteUser(user.id)}>
                                            Delete
                                        </button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
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
              <a href="" className="more-button5">
                <Link to="/">More </Link>
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
