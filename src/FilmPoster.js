import React from 'react';

function FilmPoster(props) {
  return (
  <figure className="film-poster">
    <img src={`https://image.tmdb.org/t/p/w780/${props.film.poster_path}`} alt=""/>
  </figure>
  )};

export default FilmPoster;
