import React from 'react';
import LoginSignup from './Components/LoginSignup/LoginSignup.jsx';
import { HomePage } from './Components/HomePage/HomePage.jsx';
import AdminHome from './Components/AdminHome/AdminHome.jsx';
import BookingDash from './Components/BookingDash/BookingDash.jsx';
import UserDash from './Components/UserDash/UserDash.jsx';
import { Home } from './Components/NewHome/Home.jsx';
import Book from './Components/Book/Book.jsx';
import AddLocation from './Components/AddLocation/AddLocation.jsx';
import Profile from './Components/Profile/Profile.jsx';
import ConfirmBook from './Components/ConfirmBook/ConfirmBook.jsx';
import Payment from './Components/Payment/Payment.jsx';
import Location from './Components/NewLocation/Location.jsx';
import About from './Components/About/About.jsx';
import UpdateUser from './Components/UpdateUser/UpdateUser.jsx';
import UserBooking from './Components/UserBooking/UserBooking.jsx';
import Contact from './Components/Contact/Contact.jsx';
import NewContact from './Components/New Contact/NewContact.jsx';
import NewAbout from './Components/AboutNew/NAbout.jsx';
import { LocationPage } from './Components/LocationPage/LocationPage.jsx';
import { LocationView } from './Components/LocationView/LocationView.jsx';
import LocationDash from './Components/LocationDash/LocationDash.jsx';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FinalBookingUpdate } from './Components/BookingDash/FinalBookingUpdate.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/LoginSignup" element={<LoginSignup />} />
        <Route path="/" element={<Home />} />
        <Route path="/HomePage/:fetchedUserId" element={<HomePage />} />
        <Route path="/LocationPage" element={<LocationPage />} />
        <Route path="/LocationPage/LocationView" element={<LocationView />} />
        <Route path="/Book/:fetchedUserId" element={<Book />} />
        <Route path="/ConfirmBook" element={<ConfirmBook />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/UserDash" element={<UserDash />} />
        <Route path="/AdminHome" element={<AdminHome />} />
        <Route path="/BookingDash" element={<BookingDash />} />
        <Route path="/Profile/:userId" element={<Profile/>}/>
        <Route path="/Location" element={<Location/>}/>
        <Route path="/LocationDash" element={<LocationDash/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/NewAbout" element={<NewAbout/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/AddLocation" element={<AddLocation/>}/>
        <Route path="/UserBooking" element={<UserBooking/>}/>
        <Route path="/UserDash/UpdateUser" element={<UpdateUser/>}/>
        <Route path="/NewContact" element={<NewContact/>}/>
        <Route path='/FinalBookingUpdate/:booking_id' element={<FinalBookingUpdate/>}/>

      </Routes>
    </Router>
  );
}

export default App;
