import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { tmdbApi } from './services/tmdb';
import MovieCard from './components/MovieCard';

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const navigate = useNavigate();

  // React Hooks: useState
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // React Hooks: useEffect
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    let isMounted = true;
    setLoading(true);

    const performSearch = async () => {
      const data = await tmdbApi.searchMulti(query);
      if (isMounted) {
        if (data && data.results) {
          // Filter out people/items without poster or backdrop
          const filtered = data.results.filter(
            item => item.media_type === 'movie' || item.media_type === 'tv'
          );
          setResults(filtered);
        }
        setLoading(false);
      }
    };

    performSearch();

    return () => {
      isMounted = false;
    };
  }, [query]);

  return (
    <div className="section" style={{ minHeight: '80vh', paddingTop: '40px' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '30px' }}>
          Search Results for: <span style={{ color: '#1f83ed' }}>"{query}"</span>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', color: '#fff', margin: '40px 0' }}>
            <h3>Searching TMDB API...</h3>
          </div>
        ) : results.length > 0 ? (
          <div className="movies-grid">
            {results.map((item) => (
              <MovieCard key={`${item.media_type}-${item.id}`} item={item} mediaType={item.media_type} />
            ))}
          </div>
        ) : query ? (
          <div style={{ textAlign: 'center', color: '#a0a0a0', margin: '60px 0' }}>
            <h3>No results found for "{query}".</h3>
            <p style={{ marginTop: '10px' }}>Try searching for a different movie or TV show title.</p>
          </div>
        ) : (
          <div style={{ textAlign: 'center', color: '#a0a0a0', margin: '60px 0' }}>
            <h3>Please enter a search query in the header search box above.</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
