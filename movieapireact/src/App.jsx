import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieModal from "./components/MovieModal";
import Pagination from "./components/Pagination";
import LogoButton from "./components/LogoButton";
import "./styles/movie.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const apiKey = "d1d69919";

  useEffect(() => { fetchRandomMovies(); }, []);

  const fetchRandomMovies = () => {
    setSearchQuery("");
    const randomTitles = [
      "Joker", "Batman", "Inception", "Avengers", "Spiderman",
      "Titanic", "Gladiator", "Toy Story", "Interstellar",
      "Lion King", "Frozen", "The Godfather", "Lord of the Rings", "Harry Pötter",
      "Terminator", "Shrek", "Finding Nemo", "Iron Man", "Deadpool",
      "Black Panther", "Django", "Pulp Fiction", "Pirates of the Caribbean", "Thor",
      "Mad Max", "John Wick", "The Dark Knight", "Guardians of the Galaxy", "Star Wars",
      "Fast and Furious", "Back to the Future", "Wonder Woman", "The Hangover",
      "Avatar", "The Wolf of Wall Street", "Sherlock Holmes", "Aquaman", "Doctor Strange", "The Revenant", "The Martian"
    ];

    const shuffledTitles = shuffleArray(randomTitles);
    const promises = shuffledTitles.map(title =>
      fetch(`http://www.omdbapi.com/?s=${title}&apikey=${apiKey}`)
        .then(response => response.json())
        .then(data => data.Search || [])
    );

    Promise.all(promises).then(results => {
      const allMovies = results.flat();
      setMovies(allMovies);
      setTotalPages(Math.ceil(allMovies.length / 26));
      setCurrentPage(1);
    });
  };

  const searchMovies = (query, page = 1) => {
    fetch(`http://www.omdbapi.com/?s=${query}&page=${page}&apikey=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        if (data.Search) {
          setMovies(data.Search);
          setTotalPages(Math.ceil(data.totalResults / 10));
        } else {
          setMovies([]);
          setTotalPages(1);
        }
      });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
    if (query) searchMovies(query);
    else fetchRandomMovies();
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (searchQuery) searchMovies(searchQuery, page);
    window.scrollTo(0, 0);
  };

  const handleMovieClick = (imdbID) => {
    fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`)
      .then(response => response.json())
      .then(data => setSelectedMovie(data));
  };

  const closeModal = () => setSelectedMovie(null);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const getCurrentMovies = () => {
    if (searchQuery) return movies;
    const startIndex = (currentPage - 1) * 26;
    const endIndex = startIndex + 26;
    return movies.slice(startIndex, endIndex);
  };

  return (
    <div className="background">
      <LogoButton onClick={fetchRandomMovies} />
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={getCurrentMovies()} onMovieClick={handleMovieClick} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      {selectedMovie && <MovieModal movie={selectedMovie} onClose={closeModal} />}
    </div>
  );
}

export default App;