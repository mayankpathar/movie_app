import React, { useState, useEffect } from 'react';
import { tmdbApi } from './services/tmdb';
import MovieCard from './components/MovieCard';

function Toprated() {
  // React Hooks: useState
  const [topItems, setTopItems] = useState([]);
  const [mediaType, setMediaType] = useState('movie'); // 'movie' or 'tv'
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // React Hooks: useEffect
  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const fetchTopRated = async () => {
      const data = mediaType === 'tv'
        ? await tmdbApi.getTopRatedSeries(page)
        : await tmdbApi.getTopRatedMovies(page);

      if (isMounted) {
        if (data && data.results) {
          setTopItems(data.results);
        }
        setLoading(false);
      }
    };

    fetchTopRated();

    return () => {
      isMounted = false;
    };
  }, [mediaType, page]);

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
            Top Rated Selection
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => { setMediaType('movie'); setPage(1); }}
              className={`btn ${mediaType === 'movie' ? 'primary' : 'outline'}`}
            >
              Top Rated Movies
            </button>
            <button
              onClick={() => { setMediaType('tv'); setPage(1); }}
              className={`btn ${mediaType === 'tv' ? 'primary' : 'outline'}`}
            >
              Top Rated Series
            </button>
          </div>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', color: '#fff', padding: '60px 0' }}>
            <h3>Loading Top Rated Items from TMDB...</h3>
          </div>
        ) : (
          <>
            <div className="movies-grid">
              {topItems.map((item) => (
                <MovieCard key={item.id} item={item} mediaType={mediaType} />
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

export default Toprated;
