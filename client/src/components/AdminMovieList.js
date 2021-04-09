import React from 'react';
import { connect } from 'react-redux';
import AdminMovieListItem from './AdminMovieListItem';
import selectMovies from '../selectors/movies';

const AdminMovieList = (props) => (  
  <div className='list'>
  <br></br>
    <h1><pre className='searchResults'>   Search results:</pre></h1>
    {props.movies.map((movie) => {
      return <AdminMovieListItem key={movie.id} {...movie} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    movies: selectMovies(state.movies, state.filters)
  };
};

export default connect(mapStateToProps)(AdminMovieList);
