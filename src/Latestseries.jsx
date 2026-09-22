import React, { useState, useEffect } from 'react';
import { tmdbApi } from './services/tmdb';
import MovieCard from './components/MovieCard';

function Latestseries() {
  // React Hooks: useState
  const [seriesList, setSeriesList] = useState([]);
  const [loading, setLoading] = useState(true);

  // React Hooks: useEffect
  useEffect(() => {
    let isMounted = true;

    const fetchSeries = async () => {
      const data = await tmdbApi.getPopularSeries(1);
      if (isMounted) {
        if (data && data.results) {
          setSeriesList(data.results.slice(0, 10));
        }
        setLoading(false);
      }
    };

    fetchSeries();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="section">
      <div className="container">
        <div className="section-header">
          Trending Series
        </div>

        {loading ? (
          <div style={{ color: '#fff', padding: '20px 0' }}>Loading TV series from TMDB...</div>
        ) : (
          <div className="movies-grid">
            {seriesList.map((series) => (
              <MovieCard key={series.id} item={series} mediaType="tv" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Latestseries;
