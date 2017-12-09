import React, { Component } from 'react';

class FilmList extends Component {
  render() {
    console.log(this.props.films);
    return (
      <section className="film-list">
        <h1 className="section-title">FILMS</h1>
        {this.props.films.map(film =>
          <div key={film.id} className="film-row">
            <figure className="film-poster">
              <img src={`https://image.tmdb.org/t/p/w780/${film.poster_path}`} alt=""/>
            </figure>

            <figcaption className="film-summary">
              <h1>{film.title}</h1>
              <p>{film.release_date }</p>
            </figcaption>
          </div>

        )}

      </section>
    );
  }
}

export default FilmList;
