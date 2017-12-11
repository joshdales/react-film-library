import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

class FilmRow extends Component {

  handleDetailsClick(film){
    console.log(`Fetching details for ${film.title}`);
  }
  render() {
    const {onFaveToggle, isFave, film} = this.props
    return (
          <div className="film-row" onClick={() => this.handleDetailsClick(film)}>
            <FilmPoster film={film}/>

            <figcaption className="film-summary">
              <h1>{film.title}</h1>
              <p>{film.release_date }</p>
              <Fave onFaveToggle={onFaveToggle} isFave={isFave}/>
            </figcaption>
          </div>
    );
  }
}

export default FilmRow;
