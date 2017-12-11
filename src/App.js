import React, { Component } from 'react';
import FilmList from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

class App extends Component {
  constructor(props){
    super(props);
    this.handleFaveToggle = this.handleFaveToggle.bind(this);
    this.handleDetailsToggle = this.handleDetailsToggle.bind(this);
    this.state = {
      films: TMDB.films,
      faves: [],
      current: {}
    }
  }

  handleFaveToggle(film) {
    const faves = this.state.faves.slice();
    const filmIndex = faves.indexOf(film);

    if (filmIndex > -1) {
      console.log(`Removing ${film.title} from FAVES`);
      faves.splice(filmIndex, 1);
    } else {
      console.log(`Adding ${film.title} to FAVES`);
      faves.push(film);
    }

    this.setState({faves});
  }

  handleDetailsToggle(film){
    console.log(`Fetching details for ${film.title}`);
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
    fetch(url).then(response => {
      response.json().then(data => {
        console.log(data);
        this.setState({current: data})
      })
    })
  }

  render() {
    const {films, faves, current} = this.state
    return (
      <main className="film-library">
          <FilmList films={films} faves={faves} onFaveToggle={this.handleFaveToggle} onDetailsToggle={this.handleDetailsToggle}/>

          <FilmDetails details={current}/>
      </main>
    );
  }
}

export default App;
