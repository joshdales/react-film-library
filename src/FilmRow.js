import React, { Component } from 'react';

class FilmRow extends Component {
  render() {
    console.log(this.props.film);
    return (
          <div className="film-row">
            <figure className="film-poster">
              <img src={`https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`} alt=""/>
            </figure>

            <figcaption className="film-summary">
              <h1>{this.props.film.title}</h1>
              <p>{this.props.film.release_date }</p>
            </figcaption>
          </div>
    );
  }
}

export default FilmRow;
