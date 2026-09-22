import React, { useState, useEffect } from 'react';
import { tmdbApi } from './services/tmdb';
import MovieCard from './components/MovieCard';

function Latestanime() {
  // React Hooks: useState
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);

  // React Hooks: useEffect
  useEffect(() => {
    let isMounted = true;

    const fetchAnime = async () => {
      const data = await tmdbApi.getAnimeMovies(1);
      if (isMounted) {
        if (data && data.results) {
          setAnimeList(data.results.slice(0, 10));
        }
        setLoading(false);
      }
    };

    fetchAnime();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="section">
      <div className="container">
        <div className="section-header">
          Latest Anime
        </div>

        {loading ? (
          <div style={{ color: '#fff', padding: '20px 0' }}>Loading anime titles from TMDB...</div>
        ) : (
          <div className="movies-grid">
            {animeList.map((anime) => (
              <MovieCard key={anime.id} item={anime} mediaType="movie" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Latestanime;
