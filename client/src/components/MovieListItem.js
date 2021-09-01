import React from 'react';
import { NavLink } from 'react-router-dom';

const MovieListItem = ({ id, movieName, rating, dateAdded, movieStill, availablePlatform }) => (
  <div className="collage">
  <div className="card">
    <NavLink to={`/modal/${id}`}><img src={movieStill} height="300px" width="300" /></NavLink>
    <div className="container">
      <h3>{movieName}</h3>
      <p>rating: {rating} </p>
      <p>Year Added: {dateAdded}</p>
      <p>Available Platforms: {availablePlatform}</p>
    </div>
</div>
  </div>
);
export default MovieListItem;
