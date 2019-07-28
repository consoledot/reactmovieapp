import React from "react";
import "./Movie.css";

const Movie = ({ title, image, year, id, movieInfo }) => (

  <div className="movie" onClick={() => movieInfo(id)}>
    <figure>
      <img src={image} alt={title} />
      <figcaption>{title}</figcaption>
    </figure>

  </div>

);
export default Movie;
