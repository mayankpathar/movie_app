import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieCard from './components/MovieCard';

function My_list() {
  const navigate = useNavigate();

  // React Hooks: useState
  const [watchlist, setWatchlist] = useState([]);

  // React Hooks: useEffect
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('my_watchlist') || '[]');
    setWatchlist(saved);
  }, []);

  const handleClearAll = () => {
    localStorage.removeItem('my_watchlist');
    setWatchlist([]);
  };

  return (
    <div className="section" style={{ minHeight: '80vh', paddingTop: '30px' }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px'
        }}>
          <div className="section-header" style={{ margin: 0 }}>
            My Watchlist ({watchlist.length})
          </div>

          {watchlist.length > 0 && (
            <button onClick={handleClearAll} className="btn outline" style={{ borderColor: '#ff4d4d', color: '#ff4d4d' }}>
              Clear All
            </button>
          )}
        </div>

        {watchlist.length === 0 ? (
          <div style={{ textAlign: 'center', color: '#a0a0a0', margin: '80px 0' }}>
            <i className="bx bx-bookmark-plus" style={{ fontSize: '64px', marginBottom: '15px' }}></i>
            <h3>Your Watchlist is empty</h3>
            <p style={{ marginTop: '10px' }}>
              Explore movies and TV shows and click <strong>"+ Add to Watchlist"</strong> to save them here!
            </p>
            <button onClick={() => navigate('/movies')} className="btn primary" style={{ marginTop: '20px' }}>
              Browse Movies
            </button>
          </div>
        ) : (
          <div className="movies-grid">
            {watchlist.map((item) => (
              <MovieCard key={`${item.media_type || 'movie'}-${item.id}`} item={item} mediaType={item.media_type || 'movie'} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default My_list;
