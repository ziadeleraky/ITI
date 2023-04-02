import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [title, setTitle] = useState("");
  const [dir, setDir] = useState("");
  const [desc, setDesc] = useState("");
  const [release_date, setDate] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/movies", { title, director: dir, description: desc, release_date });
    navigate("/movies");
  };

  return (
    <div className="col-4 m-5 m-auto">
      <form className="mt-5" onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input type="text" className="form-control" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="director" className="form-label">
            Director
          </label>
          <input type="text" className="form-control" name="director" id="director" value={dir} onChange={(e) => setDir(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input type="text" className="form-control" name="description" id="desc" value={desc} onChange={(e) => setDesc(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="release" className="form-label">
            Release Date
          </label>
          <input
            type="date"
            className="form-control"
            name="release_date"
            id="release"
            value={release_date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-dark mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Add;
