import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { tmdbApi, getBackdropUrl } from './services/tmdb';

function Specialmovie() {
  const navigate = useNavigate();

  // React Hooks: useState
  const [specialMovie, setSpecialMovie] = useState(null);

  // React Hooks: useEffect
  useEffect(() => {
    let isMounted = true;

    const fetchSpecial = async () => {
      const data = await tmdbApi.getTopRatedMovies(1);
      if (isMounted && data && data.results && data.results.length > 0) {
        // Pick top movie
        setSpecialMovie(data.results[0]);
      }
    };

    fetchSpecial();

    return () => {
      isMounted = false;
    };
  }, []);

  if (!specialMovie) return null;

  const title = specialMovie.title;
  const overview = specialMovie.overview || 'Featured spotlight title on TMDB.';
  const rating = specialMovie.vote_average ? specialMovie.vote_average.toFixed(1) : '9.5';
  const releaseYear = (specialMovie.release_date || '').split('-')[0] || '2024';

  return (
    <div className="section">
      <div className="container">
        <div 
          className="special-movie" 
          style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            minHeight: '400px',
            background: `url(${getBackdropUrl(specialMovie.backdrop_path, 'original')}) center/cover no-repeat`
          }}
        >
          <div className="overlay" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.4))' }}></div>
          <div className="special-movie-content" style={{ position: 'relative', zIndex: 2, padding: '50px', maxWidth: '650px' }}>
            <div className="item-content-title" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff' }}>
              {title}
            </div>
            <div className="movie-infos" style={{ display: 'flex', gap: '15px', margin: '15px 0', color: '#ffd200' }}>
              <div className="movie-info">
                <i className="bx bxs-star"></i> <span>{rating}</span>
              </div>
              <div className="movie-info" style={{ color: '#fff' }}>
                <i className="bx bxs-calendar"></i> <span>{releaseYear}</span>
              </div>
              <div className="movie-info" style={{ color: '#fff' }}>
                <span>Spotlight</span>
              </div>
            </div>
            <div className="item-content-description" style={{ color: '#ddd', lineHeight: '1.6', marginBottom: '25px' }}>
              {overview}
            </div>
            <div className="item-action">
              <button 
                onClick={() => navigate(`/movie/${specialMovie.id}`)} 
                className="btn-split-watch large"
              >
                <span className="icon-side"><i className="bx bxs-right-arrow"></i></span>
                <span className="text-side">Watch Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specialmovie;
