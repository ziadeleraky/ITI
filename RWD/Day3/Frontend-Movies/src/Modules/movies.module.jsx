import { Outlet } from "react-router-dom";
import MoviesContextProvider from "../Context/movies.context";

const MovieModule = () => {
  return (
    <MoviesContextProvider>
      <div>
        <Outlet></Outlet>
      </div>
    </MoviesContextProvider>
  );
};

export default MovieModule;
