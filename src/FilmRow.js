import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

class FilmRow extends Component {

  handleDetailsClick(film){
    console.log(`Fetching details for ${film.title}`);
  }
  render() {
    const {onFaveToggle} = this.props
    return (
          <div className="film-row" onClick={() => this.handleDetailsClick(this.props.film)}>
            <FilmPoster film={this.props.film}/>

            <figcaption className="film-summary">
              <h1>{this.props.film.title}</h1>
              <p>{this.props.film.release_date }</p>
              <Fave onFaveToggle={onFaveToggle}/>
            </figcaption>
          </div>
    );
  }
}

export default FilmRow;
