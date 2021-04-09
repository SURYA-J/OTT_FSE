import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
let movie = {};
const MovieModal = (props) => {
  movie = props.movie.find(movie => movie != undefined)
  return (
    <div>
      {movie !== undefined &&
        <div className="modal">
          <div className="moviePoster"><img src={movie.movieStill} width="450px" height="700px"/></div>
          <NavLink to="/" className="active-class2">×</NavLink>
          <div className="banner">
              <h1>{movie.movieName}</h1>
              <p>Rating : {movie.rating}</p>
              <p>Year added : {movie.dateAdded}</p>
              <p>Runtime : {movie.runtime}</p>
              <p>Language : {movie.language}</p>
              <p>genres : {movie.genres}</p>
              <p>Actors : {movie.actor}</p>
              <p>Directors : {movie.director}</p>
              <p>Awards : {movie.award}</p>
              <p>Synopsis : {movie.synopsis}</p>
              <p>Available platform:{movie.availablePlatform}</p>
              {console.log(movie.trailerLink)}
              <iframe width="500" height="280" src={movie.trailerLink} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          
          </div>
        </div>
      }

    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    movie: state.movies.map((movie) => {
      if (movie.id == props.match.params.id) {
        return movie
      }
    })
  };
};

export default connect(mapStateToProps)(MovieModal);