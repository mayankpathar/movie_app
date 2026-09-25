import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { tmdbApi, getImageUrl, getBackdropUrl } from './services/tmdb';

function MovieDetail({ defaultType = 'movie' }) {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // React Hooks: useState
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);
  const [inWatchlist, setInWatchlist] = useState(false);

  // Determine if media is tv or movie based on route or prop
  const mediaType = window.location.pathname.includes('/tv/') ? 'tv' : defaultType;

  // React Hooks: useEffect for fetching dynamic API data
  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);
    setShowTrailer(false);

    if (id) {
      const apiPromise = mediaType === 'tv' 
        ? tmdbApi.getTvDetails(id) 
        : tmdbApi.getMovieDetails(id);

      apiPromise
        .then((data) => {
          if (isMounted) {
            if (data) {
              setDetails(data);
              const savedList = JSON.parse(localStorage.getItem('my_watchlist') || '[]');
              setInWatchlist(savedList.some(item => item.id === data.id));
            } else {
              setError('Failed to load details.');
            }
            setLoading(false);
          }
        })
        .catch((err) => {
          if (isMounted) {
            setError('Error loading movie details.');
            setLoading(false);
          }
        });
    }

    // Scroll to top on ID change
    window.scrollTo(0, 0);

    return () => {
      isMounted = false;
    };
  }, [id, mediaType]);

  const toggleWatchlist = () => {
    if (!details) return;
    const savedList = JSON.parse(localStorage.getItem('my_watchlist') || '[]');
    let updatedList;
    if (inWatchlist) {
      updatedList = savedList.filter(item => item.id !== details.id);
      setInWatchlist(false);
    } else {
      const watchItem = {
        id: details.id,
        title: details.title || details.name,
        poster_path: details.poster_path,
        vote_average: details.vote_average,
        media_type: mediaType,
        release_date: details.release_date || details.first_air_date
      };
      updatedList = [...savedList, watchItem];
      setInWatchlist(true);
    }
    localStorage.setItem('my_watchlist', JSON.stringify(updatedList));
  };

  if (loading) {
    return (
      <div className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ color: '#fff' }}>Loading Details from TMDB API...</h2>
      </div>
    );
  }

  if (error || !details) {
    return (
      <div className="section" style={{ minHeight: '80vh', textAlign: 'center', paddingTop: '100px' }}>
        <h2 style={{ color: '#ff4d4d' }}>{error || 'Movie not found.'}</h2>
        <button onClick={() => navigate(-1)} className="btn primary" style={{ marginTop: '20px' }}>
          Go Back
        </button>
      </div>
    );
  }

  const title = details.title || details.name;
  const originalTitle = details.original_title || details.original_name || title;
  const rating = details.vote_average ? details.vote_average.toFixed(1) : 'N/A';
  const releaseYear = (details.release_date || details.first_air_date || '').split('-')[0] || 'N/A';
  const runtime = details.runtime ? `${details.runtime} mins` : details.episode_run_time ? `${details.episode_run_time[0]} mins` : 'N/A';
  const genres = details.genres ? details.genres.map(g => g.name).join(', ') : 'N/A';
  
  // Cast list
  const cast = details.credits?.cast ? details.credits.cast.slice(0, 6) : [];
  
  // Similar / Recommended
  const similarItems = details.recommendations?.results?.length 
    ? details.recommendations.results.slice(0, 5) 
    : details.similar?.results ? details.similar.results.slice(0, 5) : [];

  // Trailer video key
  const trailerVideo = details.videos?.results?.find(
    vid => vid.site === 'YouTube' && (vid.type === 'Trailer' || vid.type === 'Teaser')
  );

  return (
    <div className="movie-details-page">
      <div className="movie-container">
        <main className="movie-main">
          <div className="left-col">
            <div className="poster-wrap">
              <img src={getImageUrl(details.poster_path || details.backdrop_path, 'w500')} alt={title} />
              {trailerVideo && (
                <button className="play-big" onClick={() => setShowTrailer(true)} title="Play Trailer">
                  ▶
                </button>
              )}
              {trailerVideo && (
                <button className="watch-trailer small" onClick={() => setShowTrailer(true)}>
                  Watch Trailer
                </button>
              )}
            </div>

            <div className="title-block">
              <h1>{title}</h1>
              <div className="meta">
                {releaseYear} • {runtime} • <span className="rating">★ {rating}/10</span>
              </div>
              <p className="synopsis">
                {details.overview || 'No overview available for this title.'}
              </p>

              <div className="actions">
                {trailerVideo ? (
                  <button className="btn-split-watch large" onClick={() => setShowTrailer(true)}>
                    <span className="icon-side"><i className="bx bxs-right-arrow"></i></span>
                    <span className="text-side">Watch Trailer</span>
                  </button>
                ) : (
                  <button className="btn-split-watch large" onClick={() => alert('Streaming source loading...')}>
                    <span className="icon-side"><i className="bx bxs-right-arrow"></i></span>
                    <span className="text-side">Watch Now</span>
                  </button>
                )}
                <button className="btn outline" onClick={toggleWatchlist}>
                  {inWatchlist ? '✓ In Watchlist' : '+ Add to Watchlist'}
                </button>
                <button className="btn outline" onClick={() => navigate(-1)}>
                  ← Back
                </button>
              </div>

              <div className="info-grid">
                <div>
                  <strong>Genres</strong>
                  <div>{genres}</div>
                </div>
                <div>
                  <strong>Status</strong>
                  <div>{details.status || 'Released'}</div>
                </div>
                <div>
                  <strong>Original Language</strong>
                  <div>{(details.original_language || 'en').toUpperCase()}</div>
                </div>
                <div>
                  <strong>Vote Count</strong>
                  <div>{details.vote_count || 0} votes</div>
                </div>
                {details.budget > 0 && (
                  <div>
                    <strong>Budget</strong>
                    <div>${(details.budget / 1000000).toFixed(1)} million</div>
                  </div>
                )}
                {details.revenue > 0 && (
                  <div>
                    <strong>Box Office</strong>
                    <div>${(details.revenue / 1000000).toFixed(1)} million</div>
                  </div>
                )}
              </div>

              {cast.length > 0 && (
                <section className="cast-section">
                  <h3>Top Cast</h3>
                  <div className="cast-list">
                    {cast.map((c) => (
                      <div className="cast-item" key={c.id || c.name}>
                        <img 
                          src={getImageUrl(c.profile_path, 'w185')} 
                          alt={c.name}
                          onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=Actor'; }} 
                        />
                        <div className="cast-name">{c.name}</div>
                        <div className="cast-role">{c.character}</div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {similarItems.length > 0 && (
                <section className="similar-section">
                  <h3>Similar Recommendations</h3>
                  <div className="similar-list">
                    {similarItems.map((s) => (
                      <div 
                        className="similar-item" 
                        key={s.id}
                        onClick={() => navigate(`/${mediaType}/${s.id}`)}
                        style={{ cursor: 'pointer' }}
                      >
                        <img 
                          src={getImageUrl(s.poster_path, 'w500')} 
                          alt={s.title || s.name} 
                        />
                        <div className="sim-info">
                          <div className="sim-title">{s.title || s.name}</div>
                          <div className="sim-sub">
                            {(s.release_date || s.first_air_date || '').split('-')[0]} • ★ {s.vote_average ? s.vote_average.toFixed(1) : 'N/A'}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </main>

        <aside className="movie-sidebar">
          <div className="details-card">
            <h4>TMDB Information</h4>
            <ul>
              <li><span className="label">Release Date</span><span className="value">{details.release_date || details.first_air_date || 'N/A'}</span></li>
              <li><span className="label">Original Title</span><span className="value">{originalTitle}</span></li>
              <li><span className="label">Popularity</span><span className="value">{details.popularity ? details.popularity.toFixed(0) : 'N/A'}</span></li>
              <li><span className="label">Tagline</span><span className="value">{details.tagline || 'N/A'}</span></li>
              <li><span className="label">Runtime</span><span className="value">{runtime}</span></li>
              <li><span className="label">Rating</span><span className="value">★ {rating}</span></li>
            </ul>
          </div>

          <div className="overview-card" style={{ marginTop: '20px' }}>
            <h4>Overview</h4>
            <p>{details.overview || 'No additional summary available.'}</p>
          </div>
        </aside>
      </div>

      {/* Trailer Modal */}
      {showTrailer && trailerVideo && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.85)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setShowTrailer(false)}
        >
          <div 
            style={{ width: '100%', maxWidth: '900px', height: '500px', position: 'relative' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowTrailer(false)}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                color: '#fff',
                background: 'none',
                border: 'none',
                fontSize: '28px',
                cursor: 'pointer'
              }}
            >
              ✕ Close
            </button>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1`}
              title={`${title} Trailer`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetail;
