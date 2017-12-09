import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

class FilmRow extends Component {
  render() {
    return (
          <div className="film-row">
            <FilmPoster film={this.props.film}/>

            <figcaption className="film-summary">
              <h1>{this.props.film.title}</h1>
              <p>{this.props.film.release_date }</p>
              <Fave/>
            </figcaption>
          </div>
    );
  }
}

export default FilmRow;
