import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h3>Name: {movie.title}</h3>
              <p>Time: {movie.time}</p>
              <p>Genres:</p>
              <ul>
                  {movie.genres.map((genre, index) => (
                      <li key={index}>{genre}</li>
                  ))}
           </ul>
    </div>
  );
};

export default Movies;
