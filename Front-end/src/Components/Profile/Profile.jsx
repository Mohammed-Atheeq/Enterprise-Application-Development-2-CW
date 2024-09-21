import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Profile.css";
import { useParams } from "react-router-dom";

const Profile = ({ onBack }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const { fetchedUserId } = useParams(); // Correctly destructure fetchedUserId from useParams
  const [UserData, setUserData] = useState([])
  const [editingUser,seteditingUser] = useState()

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://192.168.190.184:8082/EAD2Test3/user/${fetchedUserId}`);
        if (response.status === 200) {
          const userData = response.data;
          setUserData(userData);
          setLoading(false);
        } else {
          console.error("Failed to fetch user data.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [fetchedUserId]); // Add fetchedUserId as a dependency to useEffect

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  

  async function handleUpdate(event) {
    event.preventDefault();
    try {
      await axios.put(`http://192.168.190.184:8082/EAD2Test3/user/${fetchedUserId}`, {
        id:fetchedUserId,
        username: username,
        email: UserData.email,
        password: password,
        role: "user",
      });
      alert("Location Updated");
    } catch (err) {
      console.log(err)
    }
}

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="pay-cont">
          <h1>Profile</h1>
          <div>
            <label>Username</label>
            <input type="text" value= {UserData.username}  onChange={(event)=>setUsername(event.target.value)} />
          </div>
          <div>
            <label>Password</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
          </div>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={onBack}>Back</button>
          <p>User ID: {fetchedUserId}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
