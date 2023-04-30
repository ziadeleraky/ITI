import { GETMOVIES, DELETEMOVIE, ADDMOVIE } from "../actions/types";
import { getMovies } from "../../apis/movies.api";

export const getMoviesAction = () => (dispatch) => {
  getMovies().then((res) => {
    return dispatch({ type: GETMOVIES, payload: res.data });
  });
};

export const deleteMovieAction = (data) => {
  return { type: DELETEMOVIE, payload: data };
};
export const addMovieAction = (data) => {
  return { type: ADDMOVIE, payload: data };
};
