import React, { Component } from 'react';

class FilmList extends Component {
  render() {
    console.log(this.props.films);
    return (
      <section className="film-list">
        <h1 className="section-title">FILMS</h1>
        <h1>{this.props.films[0].title}</h1>
      </section>
    );
  }
}

export default FilmList;
