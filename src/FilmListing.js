import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmList extends Component {
  render() {
    return (
      <section className="film-list">
        <h1 className="section-title">FILMS</h1>
        {this.props.films.map(film =>
          <FilmRow key={film.id} film={film}/>
        )}
      </section>
    );
  }
}

export default FilmList;
