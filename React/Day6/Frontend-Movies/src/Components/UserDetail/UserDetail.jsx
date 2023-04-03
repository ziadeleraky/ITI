import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserDetail = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/movies").then((res) => {
      setMovies(res.data);
    });
  }, []);

  return (
    <div>
      {movies ? (
        <div className="card m-5">
          <div className="card-header">{movies[id - 1].title}</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Release: {movies[id - 1].release_date}</li>
            <li className="list-group-item">Director: {movies[id - 1].director}</li>
            <li className="list-group-item">Details: {movies[id - 1].description}</li>
          </ul>
        </div>
      ) : (
        <p className="m-5 text-center">Loading</p>
      )}
    </div>
  );
};

export default UserDetail;
