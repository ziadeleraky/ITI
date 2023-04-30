import axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MoviesContext } from "../../Context/movies.context";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovieAction } from "../../redux/actions/actions";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import CustomButton from "../Button/Button";

const Details = ({ id, title, release_date, director, description }) => {
  // const deleteHandler = () => {
  //   axios.delete(`http://localhost:3000/movies/${id}`);
  //   setMovies(movies.filter((movie) => movie.id !== id));
  // };
  // const { deleteMovie } = useContext(MoviesContext);

  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const deleteHandler = () => {
    axios.delete(`http://localhost:3000/movies/${id}`).then((res) => {
      const moviesAfterDelete = movies.filter((movie) => movie.id !== id);
      console.log(moviesAfterDelete);
      dispatch(deleteMovieAction(moviesAfterDelete));
    });
  };

  return (
    // <Stack alignItems={"center"} marginTop={2}>
    <Card sx={{ width: "400px" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {release_date}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {director}
        </Typography>
        {/* <Typography variant="body2">{description}</Typography> */}
      </CardContent>
      <CardActions>
        <Link to={`/movies/${id}`}>
          <Button variant="contained" color="primary">
            Details
          </Button>
        </Link>
        {/* <Button
            variant="contained"
            color="error"
            onClick={deleteHandler}
            sx={{ marginLeft: "10px" }}
          >
            Delete
          </Button> */}
        <CustomButton text="DELETE" onClick={deleteHandler} />
      </CardActions>
    </Card>
    // </Stack>
  );

  // return (
  //   <div>
  //     <div className="card m-5">
  //       <div className="card-header">{title}</div>
  //       <ul className="list-group list-group-flush">
  //         <li className="list-group-item">Release: {release_date}</li>
  //         <li className="list-group-item">Director: {director}</li>
  //         <li className="list-group-item">Details: {description}</li>
  //         <li className="list-group-item">
  //           <Link to={`/movies/${id}`}>
  //             <button className="d-block m-auto btn btn-dark col-2">Details</button>
  //           </Link>
  //         </li>
  //         <li className="list-group-item">
  //           <button className="d-block m-auto btn btn-danger col-2" onClick={deleteHandler}>
  //             Delete
  //           </button>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // );
};

export default Details;
