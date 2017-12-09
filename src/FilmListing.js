import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmList extends Component {
  constructor(props){
    super(props)
  }

  handleFaveClick(filter){
    console.log(`Setting filter to [${filter}]`);
  }
  
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
