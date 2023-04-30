import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

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
        <Stack alignItems={"center"} marginTop={2}>
          <Card sx={{ width: "600px" }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {movies[id - 1].release_date}
              </Typography>
              <Typography variant="h5" component="div">
                {movies[id - 1].title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {movies[id - 1].director}
              </Typography>
              <Typography variant="body2">{movies[id - 1].description}</Typography>
            </CardContent>
          </Card>
        </Stack>
      ) : (
        <p className="m-5 text-center">Loading</p>
      )}
    </div>
  );
};

/**
 * <div className="card m-5">
          <div className="card-header">{movies[id - 1].title}</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Release: {movies[id - 1].release_date}</li>
            <li className="list-group-item">Director: {movies[id - 1].director}</li>
            <li className="list-group-item">Details: {movies[id - 1].description}</li>
          </ul>
        </div>
 */

export default UserDetail;
