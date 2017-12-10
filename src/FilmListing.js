import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmList extends Component {
  constructor(props){
    super(props);
    this.handleFilterClick = this.handleFilterClick.bind(this);
  }

  handleFilterClick(filter){
    console.log(`Setting filter to [${filter}]`);
  }

  render() {
    return (
      <section className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div className="film-list-filter" onClick={() => this.handleFilterClick('all')}>
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div className="film-list-filter" onClick={() => this.handleFilterClick('fave')}>
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
