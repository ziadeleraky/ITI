const Movie = ({ title, genre, director, release_year }) => {
  return (
    <div className="col-3">
      <div class="card border-light mb-3 card-header" style={{ maxWidth: "18rem" }}>
        <div class="card-header">Title: {title}</div>
        <div class="card-body">
          <h5 class="card-title">Genre: {genre}</h5>
          <p class="card-text">Director: {director}</p>
          <p className="card-text">Release Year: {release_year}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
