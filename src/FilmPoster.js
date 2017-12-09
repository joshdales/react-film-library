import React, { Component } from 'react';

class FilmPoster extends Component {
  render() {
    return (
      <figure className="film-poster">
        <img src={`https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`} alt=""/>
      </figure>
    );
  }
}

export default FilmPoster;
