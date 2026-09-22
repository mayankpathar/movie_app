import React, { useState, useEffect } from 'react';
import { tmdbApi } from './services/tmdb';
import MovieCard from './components/MovieCard';

function Latestmovies() {
  // React Hooks: useState
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // React Hooks: useEffect
  useEffect(() => {
    let isMounted = true;

    const fetchPopularMovies = async () => {
      const data = await tmdbApi.getPopularMovies(1);
      if (isMounted) {
        if (data && data.results) {
          setMovies(data.results.slice(0, 10));
        }
        setLoading(false);
      }
    };

    fetchPopularMovies();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="section">
      <div className="container">
        <div className="section-header">
          Popular Movies
        </div>

        {loading ? (
          <div style={{ color: '#fff', padding: '20px 0' }}>Loading popular movies from TMDB...</div>
        ) : (
          <div className="movies-grid">
            {movies.map((movie) => (
              <MovieCard key={movie.id} item={movie} mediaType="movie" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Latestmovies;
