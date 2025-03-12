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
  const MOVIES_PER_PAGE = 26;
  const API_KEY = "d1d69919";

  const randomTitles = [
    "Joker", "Batman", "Inception", "Avengers", "Spiderman",
    "Titanic", "Gladiator", "Toy Story", "Interstellar",
    "Lion King", "Frozen", "The Godfather", "Lord of the Rings", "Harry Potter",
    "Terminator", "Shrek", "Finding Nemo", "Iron Man", "Deadpool",
    "Black Panther", "Django", "Pulp Fiction", "Pirates of the Caribbean", "Thor",
    "Mad Max", "John Wick", "The Dark Knight", "Guardians of the Galaxy", "Star Wars",
    "Fast and Furious", "Back to the Future", "Wonder Woman", "The Hangover",
    "Avatar", "The Wolf of Wall Street", "Sherlock Holmes", "Aquaman", "Doctor Strange",
    "The Revenant", "The Martian"
  ];

  useEffect(() => { 
    fetchRandomMovies(); 
  }, []);

  const fetchRandomMovies = async () => {
    setSearchQuery("");
    const shuffledTitles = shuffleArray([...randomTitles]);
    
    try {
      const promises = shuffledTitles.map(title =>
        fetch(`http://www.omdbapi.com/?s=${title}&apikey=${API_KEY}`)
          .then(response => response.json())
          .then(data => data.Search || [])
      );

      const results = await Promise.all(promises);
      const allMovies = results.flat();
      setMovies(allMovies);
      setTotalPages(Math.ceil(allMovies.length / MOVIES_PER_PAGE));
      setCurrentPage(1);
    } catch (error) {
      console.error("Error fetching random movies:", error);
      setMovies([]);
    }
  };

  const searchMovies = async (query, page = 1) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${query}&page=${page}&apikey=${API_KEY}`
      );
      const data = await response.json();
      
      if (data.Search) {
        setMovies(data.Search);
        setTotalPages(Math.ceil(data.totalResults / 10));
      } else {
        setMovies([]);
        setTotalPages(1);
      }
    } catch (error) {
      console.error("Error searching movies:", error);
      setMovies([]);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
    query ? searchMovies(query) : fetchRandomMovies();
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (searchQuery) {
      searchMovies(searchQuery, page);
    }
    window.scrollTo(0, 0);
  };

  const handleMovieClick = async (imdbID) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`
      );
      const data = await response.json();
      setSelectedMovie(data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const getCurrentMovies = () => {
    if (searchQuery) return movies;
    const startIndex = (currentPage - 1) * MOVIES_PER_PAGE;
    return movies.slice(startIndex, startIndex + MOVIES_PER_PAGE);
  };

  return (
    <div className="background">
      <LogoButton onClick={fetchRandomMovies} />
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={getCurrentMovies()} onMovieClick={handleMovieClick} />
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={handlePageChange} 
      />
      {selectedMovie && (
        <MovieModal 
          movie={selectedMovie} 
          onClose={() => setSelectedMovie(null)} 
        />
      )}
    </div>
  );
}

export default App;