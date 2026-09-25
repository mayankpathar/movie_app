import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getImageUrl } from '../services/tmdb';

function MovieCard({ item, mediaType = 'movie' }) {
  const navigate = useNavigate();

  if (!item) return null;

  const title = item.title || item.name || item.original_title || 'Untitled';
  const posterPath = item.poster_path || item.backdrop_path;
  const rating = item.vote_average ? item.vote_average.toFixed(1) : 'N/A';
  const releaseYear = (item.release_date || item.first_air_date || '').split('-')[0] || '2024';
  const type = mediaType || (item.first_air_date ? 'tv' : 'movie');

  const handleCardClick = () => {
    navigate(`/${type}/${item.id}`);
  };

  return (
    <div className="movie-card-container" onClick={handleCardClick}>
      <div className="movie-poster-wrap">
        <img 
          src={getImageUrl(posterPath, 'w500')} 
          alt={title} 
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/500x750?text=No+Poster';
          }}
        />
      </div>
      <div className="movie-card-details">
        <h4 className="movie-card-title" title={title}>{title}</h4>
        <div className="movie-card-info">
          <span className="rating"><i className="bx bxs-star"></i> {rating}</span>
          <span className="year">• {releaseYear}</span>
          <span className="quality-badge">HD</span>
        </div>
        <button onClick={handleCardClick} className="card-primary-btn">
          <i className="bx bxs-right-arrow" style={{ fontSize: '0.75rem' }}></i>
          <span>Watch Now</span>
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
