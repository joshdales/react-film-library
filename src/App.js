import React, { Component } from 'react';
import FilmList from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

class App extends Component {
  constructor(props){
    super(props);
    this.handleFaveClick = this.handleFaveClick.bind(this);
    this.state = {
      films: TMDB.films,
      faves: [],
      current: {}
    }
  }

  handleFaveClick(film) {
    console.log(film);
    const faves = this.setState.films.slice(film);
    console.log(faves);
    const filmIndex = this.state.films.indexOf(film);
    console.log(filmIndex);
  }

  render() {
    const {films, faves, current} = this.state
    return (
      <main className="film-library">
          <FilmList films={films} faves={faves}/>

          <FilmDetails film={current}/>
      </main>
    );
  }
}

export default App;
