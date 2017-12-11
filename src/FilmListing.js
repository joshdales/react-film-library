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
    this.setState({filter: filter})
  }

  render() {
    const {filter} = this.state
    const {onFaveToggle} = this.props
    const filmRows = this.props.films.map(film =>
      <FilmRow
        key={film.id}
        film={film}
        onFaveToggle={() => onFaveToggle(film)}
        isFave={this.props.faves.includes(film)}/>
    )
    return (
      <section className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div className={`film-list-filter ${ filter === 'all' ? 'is-active' : '' }`} onClick={() => this.handleFilterClick('all')}>
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div className={`film-list-filter ${ filter === 'fave' ? 'is-active' : '' }`} onClick={() => this.handleFilterClick('fave')}>
            FAVES
            <span className="section-count">{this.props.faves.length}</span>
          </div>
        </div>

        {filmRows}

      </section>
    );
  }
}

export default FilmList;
