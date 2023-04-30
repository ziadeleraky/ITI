import axios from "axios";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Details from "../Details/Details";
import { MoviesContext } from "../../Context/movies.context";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesAction } from "../../redux/actions/actions";
import { Stack } from "@mui/material";

const Home = () => {
  // const { movies, setMovies } = useContext(MoviesContext);

  const movies = useSelector((state) => {
    return state.movies;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviesAction());
  }, [dispatch]);

  return (
    <div>
      {/* {console.log(movies)} */}
      <Stack direction="row" flexWrap={"wrap"} justifyContent={"center"} gap={3} padding={5}>
        {movies.map((movie) => {
          return (
            <div key={movie.id}>
              <Details {...movie} movies={movies} />
            </div>
          );
        })}
      </Stack>
    </div>
  );
};

export default Home;
