import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { tmdbApi, getBackdropUrl } from './services/tmdb';
import MovieCard from './components/MovieCard';

function Herosection() {
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  // React Hooks: useState
  const [heroItems, setHeroItems] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // React Hooks: useEffect
  useEffect(() => {
    let isMounted = true;
    const fetchHeroData = async () => {
      try {
        const [trendingData, topData] = await Promise.all([
          tmdbApi.getTrending('movie', 'week'),
          tmdbApi.getTopRatedMovies(1)
        ]);

        if (isMounted) {
          if (trendingData && trendingData.results) {
            setHeroItems(trendingData.results.slice(0, 6));
          }
          if (topData && topData.results) {
            setTopMovies(topData.results);
          }
          setLoading(false);
        }
      } catch (err) {
        console.error('Error fetching hero section items:', err);
        if (isMounted) setLoading(false);
      }
    };

    fetchHeroData();

    return () => {
      isMounted = false;
    };
  }, []);

  // Carousel slide timer
  useEffect(() => {
    if (heroItems.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroItems.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [heroItems]);

  const handleScrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <div className="hero-section" style={{ minHeight: '520px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h3 style={{ color: '#fff' }}>Loading Featured Spotlight from TMDB...</h3>
      </div>
    );
  }

  const currentItem = heroItems[currentIndex] || heroItems[0];
  if (!currentItem) return null;

  const title = currentItem.title || currentItem.name;
  const overview = currentItem.overview || 'Experience this featured title on TMDB.';
  const rating = currentItem.vote_average ? currentItem.vote_average.toFixed(1) : '9.0';
  const releaseYear = (currentItem.release_date || currentItem.first_air_date || '').split('-')[0] || '2024';

  return (
    <div className="hero-section">
      {/* Dynamic Main Hero Slide */}
      <div className="hero-slide" style={{ position: 'relative', overflow: 'hidden' }}>
        <div 
          className="hero-slide-item active" 
          onClick={() => navigate(`/movie/${currentItem.id}`)}
          style={{ display: 'block', position: 'relative', minHeight: '520px', cursor: 'pointer' }}
        >
          <img 
            src={getBackdropUrl(currentItem.backdrop_path || currentItem.poster_path, 'original')} 
            alt={title}
            style={{ width: '100%', height: '520px', objectFit: 'cover', display: 'block' }}
          />

          {/* Smooth left-to-right backdrop gradient */}
          <div 
            style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0.1) 85%, rgba(0,0,0,0.4) 100%)',
              zIndex: 2,
              pointerEvents: 'none'
            }}
          ></div>

          <div 
            className="hero-slide-item-content" 
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              zIndex: 5, 
              display: 'flex', 
              alignItems: 'center' 
            }}
          >
            <div 
              style={{ 
                zIndex: 10, 
                paddingLeft: '4rem', 
                width: '50%', 
                maxWidth: '650px'
              }}
            >
              <h1 
                style={{ 
                  color: '#ffffff', 
                  fontSize: '2.4rem', 
                  fontWeight: 900, 
                  lineHeight: 1.2,
                  marginBottom: '12px'
                }}
              >
                {title}
              </h1>

              <div className="movie-infos" style={{ display: 'flex', alignItems: 'center', gap: '14px', margin: '12px 0' }}>
                <div className="movie-info" style={{ color: '#ffd200', fontWeight: 'bold', fontSize: '0.95rem' }}>
                  <i className="bx bxs-star" style={{ color: '#ffd200', marginRight: '4px' }}></i>
                  <span>★ {rating}</span>
                </div>
                <div className="movie-info" style={{ color: '#ffffff', fontSize: '0.9rem' }}>
                  <i className="bx bxs-calendar" style={{ marginRight: '4px' }}></i>
                  <span>{releaseYear}</span>
                </div>
                <div className="movie-info">
                  <span style={{ background: '#1f83ed', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>HD</span>
                </div>
                <div className="movie-info">
                  <span style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem' }}>TMDB</span>
                </div>
              </div>

              <p 
                style={{ 
                  color: '#d0d0d0', 
                  fontSize: '0.95rem', 
                  lineHeight: '1.5', 
                  margin: '14px 0 24px 0',
                  maxHeight: '4.5em',
                  overflow: 'hidden'
                }}
              >
                {overview.length > 200 ? overview.substring(0, 200) + '...' : overview}
              </p>

              <div className="item-action">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/movie/${currentItem.id}`);
                  }} 
                  className="btn-split-watch large"
                >
                  <span className="icon-side"><i className="bx bxs-right-arrow"></i></span>
                  <span className="text-side">Watch Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel controls indicator */}
        {heroItems.length > 1 && (
          <div style={{
            position: 'absolute',
            bottom: '25px',
            right: '40px',
            zIndex: 20,
            display: 'flex',
            gap: '8px'
          }}>
            {heroItems.map((_, idx) => (
              <span
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                style={{
                  width: idx === currentIndex ? '24px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  backgroundColor: idx === currentIndex ? '#1f83ed' : 'rgba(255,255,255,0.5)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Bottom Horizontal Movie Slider */}
      {topMovies.length > 0 && (
        <div className="section" style={{ paddingTop: '30px', paddingBottom: '10px' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div className="section-header" style={{ margin: 0 }}>
                Trending Spotlight Movies
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button 
                  onClick={handleScrollLeft} 
                  className="btn outline"
                  style={{ borderRadius: '50%', width: '40px', height: '40px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}
                >
                  ◄
                </button>
                <button 
                  onClick={handleScrollRight} 
                  className="btn outline"
                  style={{ borderRadius: '50%', width: '40px', height: '40px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}
                >
                  ►
                </button>
              </div>
            </div>

            <div 
              ref={sliderRef}
              style={{
                display: 'flex',
                gap: '20px',
                overflowX: 'auto',
                paddingBottom: '15px',
                scrollbarWidth: 'thin',
                scrollBehavior: 'smooth'
              }}
            >
              {topMovies.map((item) => (
                <div key={item.id} style={{ minWidth: '190px', width: '190px', flexShrink: 0 }}>
                  <MovieCard item={item} mediaType="movie" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Herosection;
