import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Movie.css';

// Import images
import inceptionImage from '../../assets/image1.jpg'; 
import interstellarImage from '../../assets/image2.jpg'; 
import darkKnightImage from '../../assets/image3.jpg'; 
import darkKnightRisesImage from '../../assets/image4.jpg'; 
import mementoImage from '../../assets/image5.jpg'; 
import dunkirkImage from '../../assets/image6.jpg'; 
import tenetImage from '../../assets/image7.jpg'; 
import prestigeImage from '../../assets/image8.jpg'; 
import insomniaImage from '../../assets/image9.jpg'; 

// Movie Data
const movies = [
  { id: 1, title: 'Inception', description: 'A mind-bending thriller...', duration: '148 minutes', releaseDate: 'July 16, 2010', director: 'Christopher Nolan', genre: 'Sci-Fi, Thriller', image: inceptionImage },
  { id: 2, title: 'Interstellar', description: 'A journey through space and time...', duration: '169 minutes', releaseDate: 'November 7, 2014', director: 'Christopher Nolan', genre: 'Sci-Fi, Drama', image: interstellarImage },
  { id: 3, title: 'The Dark Knight', description: 'A Batman crime drama...', duration: '152 minutes', releaseDate: 'July 18, 2008', director: 'Christopher Nolan', genre: 'Action, Crime', image: darkKnightImage },
  { id: 4, title: 'The Dark Knight Rises', description: 'The epic conclusion...', duration: '164 minutes', releaseDate: 'July 20, 2012', director: 'Christopher Nolan', genre: 'Action, Thriller', image: darkKnightRisesImage },
  { id: 5, title: 'Memento', description: 'A man suffers from short-term memory loss...', duration: '113 minutes', releaseDate: 'October 11, 2000', director: 'Christopher Nolan', genre: 'Mystery, Thriller', image: mementoImage },
  { id: 6, title: 'Dunkirk', description: 'The story of the Dunkirk evacuation...', duration: '106 minutes', releaseDate: 'July 21, 2017', director: 'Christopher Nolan', genre: 'War, Action', image: dunkirkImage },
  { id: 7, title: 'Tenet', description: 'A secret agent embarks on a time-bending mission...', duration: '150 minutes', releaseDate: 'August 26, 2020', director: 'Christopher Nolan', genre: 'Sci-Fi, Action', image: tenetImage },
  { id: 8, title: 'The Prestige', description: 'Two magicians engage in a bitter rivalry...', duration: '130 minutes', releaseDate: 'October 20, 2006', director: 'Christopher Nolan', genre: 'Drama, Mystery', image: prestigeImage },
  { id: 9, title: 'Insomnia', description: 'A detective investigates the murder of a teen girl...', duration: '118 minutes', releaseDate: 'May 24, 2002', director: 'Christopher Nolan', genre: 'Crime, Thriller', image: insomniaImage }
];

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the movie
  const movie = movies.find((movie) => movie.id === parseInt(id));

  // Load booking count from localStorage
  const [bookingCount, setBookingCount] = useState(() => {
    return parseInt(localStorage.getItem(`bookingCount-${id}`)) || 0;
  });

  // Update localStorage whenever bookingCount changes
  useEffect(() => {
    localStorage.setItem(`bookingCount-${id}`, bookingCount);
  }, [bookingCount, id]);

  // Handle navigation to booking page
  const handleBookNowClick = () => {
    navigate(`/booking/${id}`);
  };

  if (!movie) {
    return <p>Movie not found.</p>;
  }

  return (
    <div className="movie-detail-page">
      <div className="movie-poster">
        <img src={movie.image} alt={movie.title} className="movie-image" />
      </div>
      <div className="movie-details">
        <h1>{movie.title}</h1>
        <p><strong>Release Date:</strong> {movie.releaseDate}</p>
        <p><strong>Director:</strong> {movie.director}</p>
        <p><strong>Genre:</strong> {movie.genre}</p>
        <p><strong>Duration:</strong> {movie.duration}</p>
        <p>{movie.description}</p>
        <p><strong>Booking Count:</strong> {bookingCount}</p>
        <button className="book-now-btn" onClick={handleBookNowClick}>Book Now</button>
      </div>
    </div>
  );
};

export default MovieDetail;
