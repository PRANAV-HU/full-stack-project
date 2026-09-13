function MovieCard({ movie, onToggleWatched, onRateMovie, onDeleteMovie }) {
  return (
    <article className="movie-card">
      <div className="poster-placeholder">🎬</div>
      <div className="movie-content">
        <div className="movie-title-row">
          <h3>{movie.title}</h3>
          <span className={movie.status === "Watched" ? "status watched" : "status"}>{movie.status}</span>
        </div>
        <p className="movie-meta">{movie.type} • {movie.genre} • {movie.year}</p>
        <div className="rating" aria-label={`Rating ${movie.rating} out of 5`}>
          {[1, 2, 3, 4, 5].map((star) => (
            <button key={star} className={star <= movie.rating ? "star active" : "star"} onClick={() => onRateMovie(movie.id, star)}>{star <= movie.rating ? "★" : "☆"}</button>
          ))}
        </div>
        <div className="card-actions">
          <button onClick={() => onToggleWatched(movie.id)}>{movie.status === "Watched" ? "Mark unwatched" : "Mark watched"}</button>
          <button className="delete-btn" onClick={() => onDeleteMovie(movie.id)}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default MovieCard;
