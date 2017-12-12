import React from 'react';

function FilmDetails(props) {
  // const posterUrl = `https://image.tmdb.org/t/p/w780/${props.current.poster_path}`;
  let detail;

  if (props.current.id) { detail = (
    <div className="is-hydrated">
      <figure className="film-backdrop">
        <img src={`https://image.tmdb.org/t/p/w1280/${props.current.backdrop_path}`} alt=""/>
        <figcaption className="film-title">{props.current.title}</figcaption>
      </figure>
    </div>
  )} else { detail =(
    <div className="film-detail">
      <p>
        <i className='material-icons'>subscriptions</i>
        <span>No film selected</span>
      </p>
    </div>
  )}

  return (
    <section className="film-details">
      <h1 className="section-title">DETAILS</h1>
      {detail}
    </section>
  );
};

export default FilmDetails;
