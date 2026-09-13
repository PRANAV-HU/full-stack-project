import "./App.css";
import { useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

const initialMovies = [
  {
    id: 1,
    title: "Interstellar",
    genre: "Sci-Fi",
    type: "Movie",
    year: 2014,
    status: "Want to Watch",
    rating: 0,
  },
  {
    id: 2,
    title: "Stranger Things",
    genre: "Drama",
    type: "TV Show",
    year: 2016,
    status: "Watched",
    rating: 5,
  },
  {
    id: 3,
    title: "Inception",
    genre: "Thriller",
    type: "Movie",
    year: 2010,
    status: "Watched",
    rating: 4,
  },
];

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [status, setStatus] = useState("All");

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const matchesSearch = movie.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesGenre = genre === "All" || movie.genre === genre;
      const matchesStatus = status === "All" || movie.status === status;
      return matchesSearch && matchesGenre && matchesStatus;
    });
  }, [movies, search, genre, status]);

  function addMovie(movie) {
    setMovies((current) => [...current, { ...movie, id: Date.now() }]);
  }

  function toggleWatched(id) {
    setMovies((current) =>
      current.map((movie) =>
        movie.id === id
          ? {
              ...movie,
              status:
                movie.status === "Watched" ? "Want to Watch" : "Watched",
            }
          : movie
      )
    );
  }

  function rateMovie(id, rating) {
    setMovies((current) =>
      current.map((movie) =>
        movie.id === id ? { ...movie, rating } : movie
      )
    );
  }

  function deleteMovie(id) {
    setMovies((current) => current.filter((movie) => movie.id !== id));
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              movies={filteredMovies}
              totalMovies={movies.length}
              watchedCount={movies.filter((movie) => movie.status === "Watched").length}
              watchCount={movies.filter((movie) => movie.status === "Want to Watch").length}
              search={search}
              setSearch={setSearch}
              genre={genre}
              setGenre={setGenre}
              status={status}
              setStatus={setStatus}
              onAddMovie={addMovie}
              onToggleWatched={toggleWatched}
              onRateMovie={rateMovie}
              onDeleteMovie={deleteMovie}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
