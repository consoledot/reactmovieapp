import React from "react";
import "./Fullmovie.css";
const Fullmovie = ({ movie, close }) => (
  <div>
    <p onClick={close}>Back</p>

    <div className='grid'>
      <figure>
        <img src={movie.Poster} alt={movie.Title} />
        <figcaption>{movie.Title}</figcaption>
      </figure>

      <div>
        <div>
          <h2>Actors: </h2>
          <p>{movie.Actors}</p>
        </div>
        <div className='flex'>
          <div>
            <h2>Year</h2>
            <p>{movie.Year}</p>
          </div>
          <div>
            <h2>Rated</h2>
            <p>{movie.Rated}</p>
          </div>
          <div>
            <h2>Runtime</h2>
            <p>{movie.Runtime}</p>
          </div>
        </div>


        <div>
          <h2>Plot</h2>
          <p>{movie.Plot}</p>
        </div>
        <div className="flex">
          <div>
            <h2>Director</h2>
            <p>{movie.Director}</p>
          </div>
          <div>
            <h2>Country</h2>
            <p>{movie.Country}</p>
          </div>
          <div>
            <h2>Box Office</h2>
            <p>{movie.BoxOffice}</p>
          </div>
        </div>
        <div>
          <h2>Awards</h2>
          <p>{movie.Awards}</p>
        </div>




      </div>
    </div>

  </div>
);

export default Fullmovie;
