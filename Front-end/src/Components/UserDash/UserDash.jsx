import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import profile_img from '../Assets/profile_img.jpg';

const UserDash = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://192.168.190.184:8087/fly-loka/user');
            setUsers(response.data);
        } catch (error) {
            console.error('Failed to fetch users:', error);
        }
    };

    const deleteUser = async (userId) => {
        try {
            await axios.delete(`http://192.168.190.184:8082/EAD2Test3/user`);
            alert('User Deleted');
            fetchUsers(); // Fetch users again after deleting a user
        } catch (error) {
            console.error('Failed to delete user:', error);
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
                            <li>Bookings</li>
                        </Link>
                        <Link to="/UserDash">
                            <li className="active">Users</li>
                        </Link>
                        <Link to="/LocationDash">
                            <li>Locations</li>
                        </Link>
                        <Link to="/Enquiries">
                            <li>Enquiries</li>
                        </Link>
                    </ul>
                </div>

                <div className="main-content3">
                    <h1>Users</h1>
                </div>
            </div>

            <div className="bookings3">
                <h2>Users</h2>
                <input type="text" placeholder="Search User" className="Search" />
                <div className="bookings3-table">

                <div className="bookings3-table">
          <table>
            <thead>
              <tr>
                <th>User ID</th>
                <th>User Name</th>
                <th>Date of Birth</th>
                <th>Passport Number</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Telephone</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>Shasny</td>
                <td>2022-04-01</td>
                <td>32485255</td>
                <td>22</td>
                <td>Male</td>
                <td>0775623152</td>
                <th><button className="Button-Del">Delete</button></th>
                <Link to="UpdateUser" >
                <th><button className="Button-Del">Update</button></th>
                </Link>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>1</td>
                <td>Shasny</td>
                <td>2022-04-01</td>
                <td>32485255</td>
                <td>22</td>
                <td>Male</td>
                <td>0775623152</td>
                <th><button className="Button-Del">Delete</button></th>
                <Link to="UpdateUser" >
                <th><button className="Button-Del">Update</button></th>
                </Link>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>1</td>
                <td>Shasny</td>
                <td>2022-04-01</td>
                <td>32485255</td>
                <td>22</td>
                <td>Male</td>
                <td>0775623152</td>
                <th><button className="Button-Del">Delete</button></th>
                <Link to="UpdateUser" >
                <th><button className="Button-Del">Update</button></th>
                </Link>
              </tr>
            </tbody>
          </table>
        </div>


                    <table>
                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>

                        <tbody>
                            {users.map((user) => (
                                <tr key={user.userId}>
                                    <td>{user.userId}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button className="Button-Del" onClick={() => deleteUser(user.userId)}>
                                            Delete
                                        </button>
                                    </td>
                                    <td>
                                        <Link to={`/updateUser/${user.userId}`}>
                                            <button className="Button-Del">Update</button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserDash;
