import React, { useState, useEffect } from 'react';
import { tmdbApi } from './services/tmdb';
import MovieCard from './components/MovieCard';

function Animes() {
  // React Hooks: useState
  const [animes, setAnimes] = useState([]);
  const [type, setType] = useState('movie'); // 'movie' or 'tv'
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // React Hooks: useEffect
  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const fetchAnime = async () => {
      const data = type === 'tv' 
        ? await tmdbApi.getAnimeSeries(page)
        : await tmdbApi.getAnimeMovies(page);

      if (isMounted) {
        if (data && data.results) {
          setAnimes(data.results);
        }
        setLoading(false);
      }
    };

    fetchAnime();

    return () => {
      isMounted = false;
    };
  }, [type, page]);

  return (
    <div className="section" style={{ minHeight: '80vh', paddingTop: '30px' }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginBottom: '30px',
          gap: '15px'
        }}>
          <div className="section-header" style={{ margin: 0 }}>
            Anime Collection
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => { setType('movie'); setPage(1); }}
              className={`btn ${type === 'movie' ? 'primary' : 'outline'}`}
            >
              Anime Movies
            </button>
            <button
              onClick={() => { setType('tv'); setPage(1); }}
              className={`btn ${type === 'tv' ? 'primary' : 'outline'}`}
            >
              Anime Shows
            </button>
          </div>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', color: '#fff', padding: '60px 0' }}>
            <h3>Loading Anime Titles...</h3>
          </div>
        ) : (
          <>
            <div className="movies-grid">
              {animes.map((anime) => (
                <MovieCard key={anime.id} item={anime} mediaType={type} />
              ))}
            </div>

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

export default Animes;
