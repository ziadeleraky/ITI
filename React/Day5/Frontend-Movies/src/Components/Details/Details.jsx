import axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MoviesContext } from "../../Context/movies.context";

const Details = ({ id, title, release_date, director, description, movies, setMovies }) => {
  // const deleteHandler = () => {
  //   axios.delete(`http://localhost:3000/movies/${id}`);
  //   setMovies(movies.filter((movie) => movie.id !== id));
  // };
  const { deleteMovie } = useContext(MoviesContext);
  const deleteHandler = () => {
    deleteMovie(id);
  };

  return (
    <div>
      <div className="card m-5">
        <div className="card-header">{title}</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Release: {release_date}</li>
          <li className="list-group-item">Director: {director}</li>
          <li className="list-group-item">Details: {description}</li>
          <li className="list-group-item">
            <Link to={`/movies/${id}`}>
              <button className="d-block m-auto btn btn-dark col-2">Details</button>
            </Link>
          </li>
          <li className="list-group-item">
            <button className="d-block m-auto btn btn-danger col-2" onClick={deleteHandler}>
              Delete
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Details;
