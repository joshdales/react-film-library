import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmList extends Component {
  constructor(props){
    super(props);
    this.handleFilterClick = this.handleFilterClick.bind(this);
    this.state = {
      filter: 'all'
    }
  }

  handleFilterClick(filter){
    console.log(`Setting filter to [${filter}]`);
    this.setState({filter: filter});
  }

  render() {
    const {filter} = this.state
    const {faves, onFaveToggle, onDetailsToggle} = this.props
    const films = (this.state.filter === 'all') ? this.props.films : this.props.faves;
    const filmRows = films.map(film =>
      <FilmRow
        key={film.id}
        film={film}
        onFaveToggle={() => onFaveToggle(film)}
        isFave={faves.includes(film)}
        onDetailsToggle={() => onDetailsToggle(film)}/>
    )
    return (
      <section className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div className={`film-list-filter ${ filter === 'all' ? 'is-active' : '' }`} onClick={() => this.handleFilterClick('all')}>
            ALL
            <span className="section-count">{films.length}</span>
          </div>
          <div className={`film-list-filter ${ filter === 'fave' ? 'is-active' : '' }`} onClick={() => this.handleFilterClick('fave')}>
            FAVES
            <span className="section-count">{faves.length}</span>
          </div>
        </div>

        {filmRows}

      </section>
    );
  }
}

export default FilmList;
