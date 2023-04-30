import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADDMOVIE } from "../../redux/actions/types";
import { addMovieAction } from "../../redux/actions/actions";

import { TextField, FormControl, Button, Grid, Stack } from "@mui/material";

const Add = () => {
  const [title, setTitle] = useState("");
  const [dir, setDir] = useState("");
  const [desc, setDesc] = useState("");
  const [release_date, setDate] = useState("");

  const navigate = useNavigate();

  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/movies", {
        title,
        director: dir,
        description: desc,
        release_date,
      })
      .then((res) => {
        // console.log(res.data);
        dispatch(addMovieAction([...movies, res.data]));
      });
    navigate("/movies");
  };

  return (
    <>
      <form autoComplete="off" onSubmit={submitHandler}>
        <Stack flexWrap="wrap" direction="column" padding={5} alignItems={"center"}>
          <h2>Add Movie</h2>
          <TextField
            label="Title"
            onChange={(e) => setTitle(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="text"
            sx={{ mb: 3, width: "500px" }}
            value={title}
          />
          <TextField
            label="Director"
            onChange={(e) => setDir(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="text"
            sx={{ mb: 3, width: "500px" }}
            value={dir}
          />
          <TextField
            label="Description"
            onChange={(e) => setDesc(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="text"
            sx={{ mb: 3, width: "500px" }}
            value={desc}
          />
          <TextField
            label="Release Date"
            onChange={(e) => setDate(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="text"
            sx={{ mb: 3, width: "500px" }}
            value={release_date}
          />
          <Button variant="contained" color="primary" type="submit" sx={{ width: "250px" }}>
            Add
          </Button>
        </Stack>
      </form>
    </>
  );

  // return (
  //   <div className="col-4 m-5 m-auto">
  //     <form className="mt-5" onSubmit={submitHandler}>
  //       <div className="mb-3">
  //         <label htmlFor="title" className="form-label">
  //           Title
  //         </label>
  //         <input type="text" className="form-control" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
  //       </div>
  //       <div className="mb-3">
  //         <label htmlFor="director" className="form-label">
  //           Director
  //         </label>
  //         <input type="text" className="form-control" name="director" id="director" value={dir} onChange={(e) => setDir(e.target.value)} />
  //       </div>
  //       <div className="mb-3">
  //         <label htmlFor="desc" className="form-label">
  //           Description
  //         </label>
  //         <input type="text" className="form-control" name="description" id="desc" value={desc} onChange={(e) => setDesc(e.target.value)} />
  //       </div>
  //       <div className="mb-3">
  //         <label htmlFor="release" className="form-label">
  //           Release Date
  //         </label>
  //         <input
  //           type="date"
  //           className="form-control"
  //           name="release_date"
  //           id="release"
  //           value={release_date}
  //           onChange={(e) => setDate(e.target.value)}
  //         />
  //       </div>
  //       <button type="submit" className="btn btn-dark mt-2">
  //         Submit
  //       </button>
  //     </form>
  //   </div>
  // );
};

export default Add;
