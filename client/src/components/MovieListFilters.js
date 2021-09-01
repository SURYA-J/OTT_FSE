import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByRating, setStartDate, setEndDate } from '../actions/filters';

class MovieListFilters extends React.Component {
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  render() {
    return (
      <div className="searchbox">
        <input
          type="text"
          className="searchbox__input"
          placeholder="search by movie name, actor or director"
          value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
        className="selectbox"
          value={this.props.filters.sortBy}
          onChange={(e) => {
            if (e.target.value === 'dateAdded') {
              this.props.dispatch(sortByDate());
            } else if (e.target.value === 'rating') {
              this.props.dispatch(sortByRating());
            }
          }}
        >
          <option value="rating">rating</option>
          <option value="dateAdded">Date added</option>
        </select>

      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(MovieListFilters);
