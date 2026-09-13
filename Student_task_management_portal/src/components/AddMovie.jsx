import { useState } from "react";

const emptyMovie = {
  title: "",
  genre: "Action",
  type: "Movie",
  year: new Date().getFullYear(),
  status: "Want to Watch",
  rating: 0,
};

function AddMovie({ onAddMovie }) {
  const [movie, setMovie] = useState(emptyMovie);

  function handleChange(event) {
    const { name, value } = event.target;
    setMovie((current) => ({ ...current, [name]: name === "year" ? Number(value) : value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!movie.title.trim()) return;
    onAddMovie(movie);
    setMovie(emptyMovie);
  }

  return (
    <form className="add-movie-form" onSubmit={handleSubmit}>
      <h2>Add to your watchlist</h2>
      <div className="form-grid">
        <label>Title<input name="title" value={movie.title} onChange={handleChange} placeholder="e.g. The Dark Knight" required /></label>
        <label>Genre<select name="genre" value={movie.genre} onChange={handleChange}><option>Action</option><option>Comedy</option><option>Drama</option><option>Sci-Fi</option><option>Thriller</option><option>Horror</option><option>Romance</option></select></label>
        <label>Type<select name="type" value={movie.type} onChange={handleChange}><option>Movie</option><option>TV Show</option></select></label>
        <label>Release Year<input type="number" name="year" min="1900" max="2100" value={movie.year} onChange={handleChange} /></label>
        <label>Status<select name="status" value={movie.status} onChange={handleChange}><option>Want to Watch</option><option>Watched</option></select></label>
      </div>
      <button className="primary-btn" type="submit">Add to Watchlist</button>
    </form>
  );
}

export default AddMovie;
