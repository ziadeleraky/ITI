import { PureComponent } from "react";
import axios from "axios";
import "./MoviesClass.css";

class Movies extends PureComponent {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=7318267e0930fb1578053cb357c3b2cd").then((res) => {
      this.setState({ movies: res.data.results });
    });
  }

  render() {
    return (
      <div class="row">
        {this.state.movies.map((movie) => {
          return (
            <div class="card movie_card col-3 m-auto">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} class="card-img-top" alt="..." />
              <div class="card-body">
                <i class="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer"></i>
                <h5 class="card-title">{movie.title}</h5>
                <span class="movie_info">Release Date: {movie.release_date}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Movies;
