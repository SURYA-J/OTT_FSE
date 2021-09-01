import React from 'react';

export default class MovieForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movieName: props.movie ? props.movie.movieName : '',
      synopsis: props.movie ? props.movie.synopsis : '',
      rating: props.movie ? props.movie.rating : '',
      dateAdded: props.movie ? props.movie.dateAdded : '',
      movieStill: props.movie ? props.movie.movieStill : '',
      language: props.movie ? props.movie.language : '',
      runtime: props.movie ? props.movie.runtime : '',
      genres: props.movie ? props.movie.genres : '',
      actor: props.movie ? props.movie.actor : '',
      director: props.movie ? props.movie.director : '',
      trailerLink: props.movie ? props.movie.trailerLink : '',
      availablePlatform: props.movie ? props.movie.availablePlatform : '',
      award: props.movie ? props.movie.award : '',
      error: ''
    };
  }

  onMovieNameChange = (e) => {
    const movieName = e.target.value;
    this.setState(() => ({ movieName }));
  };
  onSynopsisChange = (e) => {
    const synopsis = e.target.value;
    this.setState(() => ({ synopsis }));
  };
  onRatingChange = (e) => {
    const rating = e.target.value;
    if (!rating || rating.match(/^\d{1,1}(\.\d{0,1})?$/)) {
      this.setState(() => ({ rating }));
    }
  };
  onDateChange = (e) => {
    const dateAdded = e.target.value;
    this.setState(() => ({ dateAdded }));

  };
  onGenresChange = (e) => {
    const genres = e.target.value;
    this.setState(() => ({ genres }));
  };
  onRuntimeChange = (e) => {
    const runtime = e.target.value;
    this.setState(() => ({ runtime }));
  };
  onActorChange = (e) => {
    const actor = e.target.value;
    this.setState(() => ({ actor }));
  };
  onDirectorChange = (e) => {
    const director = e.target.value;
    this.setState(() => ({ director }));
  };
  onLanguageChange = (e) => {
    const language = e.target.value;
    this.setState(() => ({ language }));
  };
  onMovieStillChange = (e) => {
    const movieStill = e.target.value;
    this.setState(() => ({ movieStill }));
  };
  onMovieNameChange = (e) => {
    const movieName = e.target.value;
    this.setState(() => ({ movieName }));
  };
  onTrailerLinkChange = (e) => {
    const trailerLink = e.target.value;
    this.setState(() => ({ trailerLink }));
  };
  onAvailablePlatformChange = (e) => {
    const availablePlatform = e.target.value;
    this.setState(() => ({ availablePlatform }));
  };
  onAwardsChange = (e) => {
    const award = e.target.value;
    this.setState(() => ({ award }));
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.movieName || !this.state.rating) {
      this.setState(() => ({ error: 'Please provide movie name and rating.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        movieName: this.state.movieName,
        rating: parseFloat(this.state.rating),
        dateAdded: parseFloat(this.state.dateAdded),
        synopsis: this.state.synopsis,
        actor:this.state.actor,
        director:this.state.director,
        availablePlatform:this.state.availablePlatform,
        movieStill:this.state.movieStill,
        trailerLink:this.state.trailerLink,
        language:this.state.language,
        runtime:this.state.runtime,
        genres:this.state.genres,
        award:this.state.award
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form className="addmoviebox" onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="movieName"
            autoFocus
            value={this.state.movieName}
            onChange={this.onMovieNameChange}
          />
          <input
            type="text"
            placeholder="rating"
            value={this.state.rating}
            onChange={this.onRatingChange}
          />
          <input
            type="number"
            placeholder="Year added"
            value={this.state.dateAdded}
            onChange={this.onDateChange}
          />
          <input
            type="text"
            placeholder="Language"
            value={this.state.language}
            onChange={this.onLanguageChange}
          />
          <input
            type="text"
            placeholder="trialer link"
            value={this.state.trailerLink}
            onChange={this.onTrailerLinkChange}
          />
          <input
            type="text"
            placeholder="actors"
            value={this.state.actor}
            onChange={this.onActorChange}
          />
          <input
            type="text"
            placeholder="directors"
            value={this.state.director}
            onChange={this.onDirectorChange}
          />
          <input
            type="text"
            placeholder="link to the movie poster"
            value={this.state.movieStill}
            onChange={this.onMovieStillChange}
          />
          <input
          type="text"
          placeholder="awards"
          value={this.state.award}
          onChange={this.onAwardsChange}
        />
            <input
              type="text"
              placeholder="genres"
              value={this.state.genres}
              onChange={this.onGenresChange}
            />
            <input
              type="text"
              placeholder="available platforms"
              value={this.state.availablePlatform}
              onChange={this.onAvailablePlatformChange}
            />
            <input
              type="text"
              placeholder="run time"
              value={this.state.runtime}
              onChange={this.onRuntimeChange}
            />
            <textarea
            placeholder="Add a synopsis for the movie ;)"
            value={this.state.synopsis}
            onChange={this.onSynopsisChange}
          >
          </textarea>
          <button className="movieformbutton">Add movie</button>
        </form>
      </div>
    )
  }
}
