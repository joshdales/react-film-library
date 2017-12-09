import React, { Component } from 'react';
import FilmList from './FilmList';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

class App extends Component {
  render() {
    this.props = TMDB.films
    return (
      <main className="film-library">
          <FilmList/>

          <FilmDetails/>
      </main>
    );
  }
}

export default App;
