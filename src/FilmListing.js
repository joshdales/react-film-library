import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmList extends Component {

  handleFaveClick(filter){
    console.log(`Setting filter to [${filter}]`);
  }

  render() {
    return (
      <section className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div className="film-list-filter">
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div className="film-list-filter">
            FAVES
            <span className="section-count">0</span>
          </div>
        </div>

        {this.props.films.map(film =>
          <FilmRow key={film.id} film={film}/>
        )}
      </section>
    );
  }
}

export default FilmList;
