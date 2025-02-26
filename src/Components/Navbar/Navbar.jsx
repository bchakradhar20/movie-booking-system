import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google';
import logo from "D:/Downloads/pngwing.com (1).png";
import './navbar.css';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Load user from localStorage on mount
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    // Listen for storage changes (for login/logout updates)
    const handleStorageChange = () => {
      const updatedUser = localStorage.getItem('user');
      setUser(updatedUser ? JSON.parse(updatedUser) : null);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    googleLogout();
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src={logo} alt='logo' />
        <h1>Movie Ticket Booking</h1>
      </div>
      <div className='navbar-links'>
        <ul>
          <li><Link to="/" className="navbar-link">Home</Link></li>
          <li><Link to="#" className="navbar-link">Bookings</Link></li>
          <li><Link to="#" className="navbar-link">Contact</Link></li>
        </ul>
        {user ? (
          <div className="user-info">
            <img src={user.picture} alt={user.name} className="user-avatar" />
            <button className='btn' onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <button className='btn' onClick={() => navigate('/login')}>Log In</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
