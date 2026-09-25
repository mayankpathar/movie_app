import React, { useState, useEffect } from 'react';
import { tmdbApi } from './services/tmdb';
import MovieCard from './components/MovieCard';
import './css/Movies.css';

function Movies() {
  // React Hooks: useState
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState('popular'); // 'popular', 'top_rated', 'upcoming'
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // React Hooks: useEffect
  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const getApiPromise = () => {
      if (category === 'top_rated') return tmdbApi.getTopRatedMovies(page);
      if (category === 'upcoming') return tmdbApi.getUpcomingMovies(page);
      return tmdbApi.getPopularMovies(page);
    };

    getApiPromise()
      .then((data) => {
        if (isMounted) {
          if (data && data.results) {
            setMovies(data.results);
          }
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error('Error loading movies:', err);
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [category, page]);

  return (
    <div className="section" style={{ minHeight: '80vh', paddingTop: '30px' }}>
      <div className="container">
        {/* Category Header & Filter Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginBottom: '30px',
          gap: '15px'
        }}>
          <div className="section-header" style={{ margin: 0 }}>
            Movies Catalog
          </div>

          {/* Tab Filter Buttons using useState */}
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => { setCategory('popular'); setPage(1); }}
              className={`btn ${category === 'popular' ? 'primary' : 'outline'}`}
            >
              Popular
            </button>
            <button
              onClick={() => { setCategory('top_rated'); setPage(1); }}
              className={`btn ${category === 'top_rated' ? 'primary' : 'outline'}`}
            >
              Top Rated
            </button>
            <button
              onClick={() => { setCategory('upcoming'); setPage(1); }}
              className={`btn ${category === 'upcoming' ? 'primary' : 'outline'}`}
            >
              Upcoming
            </button>
          </div>
        </div>

        {/* Content Grid */}
        {loading ? (
          <div style={{ textAlign: 'center', color: '#fff', padding: '60px 0' }}>
            <h3>Loading TMDB Movies...</h3>
          </div>
        ) : (
          <>
            <div className="movies-grid">
              {movies.map((movie) => (
                <MovieCard key={movie.id} item={movie} mediaType="movie" />
              ))}
            </div>

            {/* Pagination Controls */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '40px' }}>
              <button
                disabled={page <= 1}
                onClick={() => setPage(p => Math.max(1, p - 1))}
                className="btn outline"
                style={{ opacity: page <= 1 ? 0.5 : 1, cursor: page <= 1 ? 'not-allowed' : 'pointer' }}
              >
                ← Previous Page
              </button>
              <span style={{ display: 'flex', alignItems: 'center', color: '#fff', fontWeight: 'bold' }}>
                Page {page}
              </span>
              <button
                onClick={() => setPage(p => p + 1)}
                className="btn primary"
              >
                Next Page →
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Movies;
