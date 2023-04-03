import { GETMOVIES, DELETEMOVIE, ADDMOVIE } from "../actions/types";

const initialState = { movies: [] };

export const MovieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GETMOVIES:
      return { movies: [...payload] };
    case DELETEMOVIE:
      return { movies: [...payload] };
    case ADDMOVIE:
      return { movies: [...payload] };
    default:
      return { ...state };
  }
};
