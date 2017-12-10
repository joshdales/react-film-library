import React, { Component } from 'react';
import FilmList from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      films: TMDB.films,
      faves: [],
      current: {}
    }
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
