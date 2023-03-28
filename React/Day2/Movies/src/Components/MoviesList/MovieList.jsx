import { useState } from "react";
import Movie from "../Movie/Movie";
import { v4 as uuid } from "uuid";

const MovieList = () => {
  const [movies] = useState([
    { id: "1", genre: "Action", title: "The Dark Knight", director: "Christopher Nolan", release_year: "2008" },
    { id: "2", genre: "Drama", title: "Shawshank Redemption", director: "Frank Darabont", release_year: "1994" },
    { id: "3", genre: "Comedy Drama", title: "Forrest Gump", director: "Robert Zemeckis", release_year: "1994" },
    { id: "4", genre: "Romance Drama", title: "Titanic", director: "James Cameron", release_year: "1997" },
    { id: "5", genre: "Crime Drama", title: "Goodfellas", director: "Martin Scorsese", release_year: "1990" },
    { id: "6", genre: "Crime Drama", title: "The Godfather", director: "Francis Ford Coppola", release_year: "1972" },
    { id: "7", genre: "Crime Drama", title: "Pulp Fiction", director: "Quentin Tarantino", release_year: "1994" },
    { id: "8", genre: "Thriller", title: "The Silence of the Lambs", director: "Jonathan Demme", release_year: "1991" },
    { id: "9", genre: "Science Fiction", title: "The Matrix", director: "The Wachowskis", release_year: "1999" },
    { id: "10", genre: "Science Fiction Adventure", title: "Jurassic Park", director: "Steven Spielberg", release_year: "1993" },
  ]);

  return (
    <div className="container">
      <div className="row">
        {movies.map((movie) => {
          return <Movie key={uuid()} {...movie} />;
        })}
      </div>
    </div>
  );
};

export default MovieList;
