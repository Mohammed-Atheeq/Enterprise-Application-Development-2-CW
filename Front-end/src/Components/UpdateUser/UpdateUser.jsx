import React, { useState } from 'react';
import './UpdateUser.css'; 

const UpdateUser = () => {
    const [username, setUsername] = useState('');
    const [passportNumber, setPassportNumber] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [telephone, setTelephone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Updated User Details:', {
            username,
            passportNumber,
            email,
            dob,
            age,
            gender,
            telephone
        });
    };

    return (
        <div className="update-user">
            <h1>Update User Details</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="passportNumber">Passport Number</label>
                    <input type="text" id="passportNumber" value={passportNumber} onChange={(e) => setPassportNumber(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="dob">Date of Birth</label>
                    <input type="date" id="dob" value={dob} onChange={(e) => setDob(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="telephone">Telephone</label>
                    <input type="tel" id="telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} required />
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateUser;
