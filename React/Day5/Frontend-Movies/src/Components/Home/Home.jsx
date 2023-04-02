import axios from "axios";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Details from "../Details/Details";
import {MoviesContext} from "../../Context/movies.context";

const Home = () => {
  const { movies, setMovies } = useContext(MoviesContext);

  return (
    <div>
      {movies.map((movie) => {
        return (
          <div key={movie.id}>
            <Details {...movie} movies={movies} setMovies={setMovies} />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
