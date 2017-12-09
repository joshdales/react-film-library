import React, { Component } from 'react';
import FilmList from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

class App extends Component {
  render() {
    this.props = TMDB.films
    return (
      <main className="film-library">
          <FilmList films={this.props}/>

          <FilmDetails/>
      </main>
    );
  }
}

export default App;
