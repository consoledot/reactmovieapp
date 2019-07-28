import React from "react";
import "./Movies.css";

import Movie from "../Movie/Movie";

const Movies = (props) => {
  let moviesList = <h1>Loading</h1>;
  if (props.movies) {
    moviesList = props.movies.map(movie => {
      return (
        <Movie
          key={movie.imdbID}
          title={movie.Title}
          image={movie.Poster}
          Year={movie.Year}
          id={movie.imdbID}
          movieInfo={props.movieInfo}

        />
      );
    });

    return <div className="movies">{moviesList}</div>;
  }
}

export default Movies;
