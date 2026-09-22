import React, { useState, useEffect } from 'react';
import { tmdbApi } from './services/tmdb';
import MovieCard from './components/MovieCard';

function Series() {
  // React Hooks: useState
  const [series, setSeries] = useState([]);
  const [category, setCategory] = useState('popular');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // React Hooks: useEffect
  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const fetchSeries = async () => {
      let data;
      if (category === 'top_rated') {
        data = await tmdbApi.getTopRatedSeries(page);
      } else {
        data = await tmdbApi.getPopularSeries(page);
      }

      if (isMounted) {
        if (data && data.results) {
          setSeries(data.results);
        }
        setLoading(false);
      }
    };

    fetchSeries();

    return () => {
      isMounted = false;
    };
  }, [category, page]);

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
            TV Series Catalog
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => { setCategory('popular'); setPage(1); }}
              className={`btn ${category === 'popular' ? 'primary' : 'outline'}`}
            >
              Popular Series
            </button>
            <button
              onClick={() => { setCategory('top_rated'); setPage(1); }}
              className={`btn ${category === 'top_rated' ? 'primary' : 'outline'}`}
            >
              Top Rated Series
            </button>
          </div>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', color: '#fff', padding: '60px 0' }}>
            <h3>Loading TMDB Series...</h3>
          </div>
        ) : (
          <>
            <div className="movies-grid">
              {series.map((show) => (
                <MovieCard key={show.id} item={show} mediaType="tv" />
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

export default Series;
