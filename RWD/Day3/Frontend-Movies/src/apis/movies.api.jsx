import axios from "axios";

export const getMovies = () => axios.get("http://localhost:3000/movies");
