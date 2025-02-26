import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieDetail from './Components/Movie/Movie';
import BookingForm from './Components/Bookingform/Bookingform';
import MovieList from './Components/Movielisting/Movielisting';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/login';
import ProtectedRoute from './ProtectedRoute'; // Import this

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute><MovieList /></ProtectedRoute>} />
        <Route path="/movie/:id" element={<ProtectedRoute><MovieDetail /></ProtectedRoute>} />
        <Route path="/booking/:id" element={<ProtectedRoute><BookingForm /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
