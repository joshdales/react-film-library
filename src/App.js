import React, { Component } from 'react';
import FilmList from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

class App extends Component {
  constructor(props){
    super(props);
  }
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
