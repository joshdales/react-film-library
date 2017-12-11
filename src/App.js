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

  handleFaveToggle(film) {
    console.log(film);
    const faves = this.setState.faves.slice();
    console.log(faves);
    const filmIndex = faves.indexOf(film);
    console.log(filmIndex);

    if (filmIndex > -1) {
      console.log(`Removing ${film.title} from FAVES`);
      faves.splice(filmIndex, 1);
    } else {
      console.log(`Adding ${film.title} to FAVES`);
      faves.push(film);
    }

    this.setState({faves});
  }

  render() {
    const {films, faves, current} = this.state
    return (
      <main className="film-library">
          <FilmList films={films} faves={faves} onFaveToggle={handleFaveToggle}/>

          <FilmDetails film={current}/>
      </main>
    );
  }
}

export default App;
