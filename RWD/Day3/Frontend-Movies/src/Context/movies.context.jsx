import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MoviesContext = createContext();

const MoviesContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const deleteMovie = (id) => {
    axios.delete(`http://localhost:3000/movies/${id}`);
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  useEffect(() => {
    axios.get("http://localhost:3000/movies").then((res) => {
      setMovies(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <MoviesContext.Provider value={{ movies, setMovies, deleteMovie }}>{children}</MoviesContext.Provider>
    </>
  );
};

export default MoviesContextProvider;
