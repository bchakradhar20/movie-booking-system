import React from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css';

// Import images from the src/assets folder
import inceptionImage from 'D:/hashedin/src/assets/image1.jpg';
import interstellarImage from 'D:/hashedin/src/assets/image2.jpg';
import darkKnightImage from 'D:/hashedin/src/assets/image3.jpg';
import darkKnightRisesImage from 'D:/hashedin/src/assets/image4.jpg';
import mementoImage from 'D:/hashedin/src/assets/image5.jpg';
import dunkirkImage from 'D:/hashedin/src/assets/image6.jpg';
import tenetImage from 'D:/hashedin/src/assets/image7.jpg';
import prestigeImage from 'D:/hashedin/src/assets/image8.jpg';
import insomniaImage from 'D:/hashedin/src/assets/image9.jpg';

const movies = [
  { id: 1, title: 'Inception', image: inceptionImage },
  { id: 2, title: 'Interstellar', image: interstellarImage },
  { id: 3, title: 'The Dark Knight', image: darkKnightImage },
  { id: 4, title: 'The Dark Knight Rises', image: darkKnightRisesImage },
  { id: 5, title: 'Memento', image: mementoImage },
  { id: 6, title: 'Dunkirk', image: dunkirkImage },
  { id: 7, title: 'Tenet', image: tenetImage },
  { id: 8, title: 'The Prestige', image: prestigeImage },
  { id: 9, title: 'Insomnia', image: insomniaImage },
];

const MovieList = () => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div className="movie-item" key={movie.id}>
          <img src={movie.image} alt={movie.title} className="movie-image" />
          <h3>{movie.title}</h3>
          <Link to={`/movie/${movie.id}`} className="movie-link">See Details</Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
