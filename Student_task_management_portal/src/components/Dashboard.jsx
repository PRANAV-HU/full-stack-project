import { useState } from "react";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";

function Dashboard({
  movies,
  totalMovies,
  watchedCount,
  watchCount,
  search,
  setSearch,
  genre,
  setGenre,
  status,
  setStatus,
  onAddMovie,
  onToggleWatched,
  onRateMovie,
  onDeleteMovie,
}) {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <main className="page">
      <section className="hero">
        <div>
          <p className="eyebrow">MOVIE & SHOW WATCHLIST</p>
          <h1>Keep track of what you want to watch.</h1>
          <p className="hero-text">
            Add movies and shows, mark them watched, rate them, and quickly
            find your favourites.
          </p>
        </div>
        <button className="primary-btn" onClick={() => setShowAddForm((value) => !value)}>
          {showAddForm ? "Close" : "+ Add Movie"}
        </button>
      </section>

      {showAddForm && (
        <AddMovie
          onAddMovie={(movie) => {
            onAddMovie(movie);
            setShowAddForm(false);
          }}
        />
      )}

      <section className="stats-container">
        <div className="stat-card"><span>Total</span><strong>{totalMovies}</strong></div>
        <div className="stat-card"><span>Watched</span><strong>{watchedCount}</strong></div>
        <div className="stat-card"><span>Want to Watch</span><strong>{watchCount}</strong></div>
      </section>

      <section className="filters">
        <input
          className="search-input"
          placeholder="Search movies or shows..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <select value={genre} onChange={(event) => setGenre(event.target.value)}>
          <option value="All">All genres</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Thriller">Thriller</option>
          <option value="Horror">Horror</option>
          <option value="Romance">Romance</option>
        </select>
        <select value={status} onChange={(event) => setStatus(event.target.value)}>
          <option value="All">All status</option>
          <option value="Want to Watch">Want to Watch</option>
          <option value="Watched">Watched</option>
        </select>
      </section>

      <section>
        <div className="section-heading">
          <h2>My Watchlist</h2>
          <span>{movies.length} result{movies.length === 1 ? "" : "s"}</span>
        </div>
        <div className="movie-grid">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onToggleWatched={onToggleWatched}
                onRateMovie={onRateMovie}
                onDeleteMovie={onDeleteMovie}
              />
            ))
          ) : (
            <div className="empty-state">No movies match your search or filters.</div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
