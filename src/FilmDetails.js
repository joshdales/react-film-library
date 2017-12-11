import React, { Component } from 'react';

class FilmDetails extends Component {
  render() {
    // const backdropUrl = `https://image.tmdb.org/t/p/w1280/${props.film.current.backdrop_path}`
    // const posterUrl = `https://image.tmdb.org/t/p/w780/${props.film.current.poster_path}`

    return (
      <section className="film-details">
        <h1 className="section-title">DETAILS</h1>

        <div className="film-detail">
          <p>
            <i className='material-icons'>subscriptions</i>
            <span>No film selected</span>
          </p>

        </div>
      </section>
    );
  }
}

export default FilmDetails;
