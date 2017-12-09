import React, { Component } from 'react';
import FilmList from './FilmList';
import FilmDetails from './FilmDetails';

class App extends Component {
  render() {
    return (
      <main className="film-library">
          <FilmList/>

          <FilmDetails/>
      </main>
    );
  }
}

export default App;
