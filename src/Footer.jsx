import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="section" style={{ backgroundColor: '#0c0c0c', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '50px', paddingBottom: '40px' }}>
      <div className="container">
        <div className="row">
          <div className="col-4 col-md-6 col-sm-12">
            <div className="content">
              <Link to="/" className="logo">
                <i className='bx bx-movie-play bx-tada main-color'></i>Phoe<span className="main-color">nix</span>Zone
              </Link>
              <p style={{ marginTop: '15px', color: '#a0a0a0', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Your ultimate entertainment destination powered by TMDB API. Discover trending movies, top rated TV series, anime collections, and manage your custom watchlist.
              </p>
            </div>
          </div>

          <div className="col-8 col-md-6 col-sm-12">
            <div className="row">
              <div className="col-6 col-md-6 col-sm-6">
                <div className="content">
                  <p><b>Navigation</b></p>
                  <ul className="footer-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/movies">Movies Catalog</Link></li>
                    <li><Link to="/series">TV Series</Link></li>
                    <li><Link to="/animes">Anime Collection</Link></li>
                  </ul>
                </div>
              </div>

              <div className="col-6 col-md-6 col-sm-6">
                <div className="content">
                  <p><b>My Library</b></p>
                  <ul className="footer-menu">
                    <li><Link to="/my-list">My Watchlist</Link></li>
                    <li><Link to="/toprated">Top Rated Selection</Link></li>
                    <li><Link to="/downloads">Downloads & Saved</Link></li>
                    <li><Link to="/sign">Account Sign In</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
