import React from 'react'

function Meunbar1() {
    return (



<div class="phone-wrap">
 

  <div class="hero">
    <i class="fa-solid fa-mask hero-icon"></i>
    <div class="top-bar">
      <button class="icon-btn"><i class="fa-solid fa-chevron-left"></i></button>
      <div class="d-flex gap-2">
        <button class="icon-btn"><i class="fa-solid fa-share-nodes"></i></button>
        <button class="icon-btn"><i class="fa-regular fa-heart"></i></button>
      </div>
    </div>
    <div class="hero-gradient"></div>
    <span class="hd-badge">HD</span>
    <h1 class="movie-title">The Dark Knight</h1>
    <div class="movie-meta">2008 &nbsp;•&nbsp; 2h 32m &nbsp;•&nbsp; Action, Crime, Drama</div>
    <div class="rating-row">
      <span class="rating-score">9.0/10</span>
      <span class="stars">
        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>
      </span>
      <span class="rating-count">(2.1M)</span>
    </div>
  </div>
 

  <div class="action-row">
    <button class="btn btn-play"><i class="fa-solid fa-play me-2"></i>Play</button>
    <button class="btn btn-soft"><i class="fa-solid fa-download me-2"></i>Download</button>
    <button class="btn btn-soft"><i class="fa-solid fa-plus me-2"></i>My List</button>
  </div>

  <div class="nav-tabs-custom">
    <button class="tab-item active">Overview</button>
    <button class="tab-item">Cast</button>
    <button class="tab-item">Reviews</button>
    <button class="tab-item">More Like This</button>
  </div>
 
  <div class="section">
    <p class="overview-text">
      When the menace known as the Joker wreaks havoc and chaos on the people of Gotham,
      Batman must accept one of the greatest psychological and physical tests of his ability
      to fight injustice.
    </p>
 
    <div class="details-table mt-3">
      <div class="row-line"><span class="label">Director</span><span class="value">Christopher Nolan</span></div>
      <div class="row-line"><span class="label">Writer</span><span class="value">Jonathan Nolan, Christopher Nolan</span></div>
      <div class="row-line"><span class="label">Stars</span><span class="value">Christian Bale, Heath Ledger, Aaron Eckhart</span></div>
      <div class="row-line">
        <span class="label">Genre</span>
        <span class="value">
          <span class="genre-pill">Action</span><span class="genre-pill">Crime</span><span class="genre-pill">Drama</span>
        </span>
      </div>
      <div class="row-line"><span class="label">Release</span><span class="value">July 18, 2008</span></div>
    </div>
  </div>

  <div class="section pt-0">
    <div class="section-header">
      <h6>Top Cast</h6>
      <a href="#" class="view-all">View All</a>
    </div>
    <div class="cast-scroll">
      <div class="cast-card">
        <div class="cast-avatar" style="background:#3a4a7a;">CB</div>
        <div class="cast-name">Christian Bale</div>
        <div class="cast-role">Bruce Wayne</div>
      </div>
      <div class="cast-card">
        <div class="cast-avatar" style="background:#6d3a3a;">HL</div>
        <div class="cast-name">Heath Ledger</div>
        <div class="cast-role">The Joker</div>
      </div>
      <div class="cast-card">
        <div class="cast-avatar" style="background:#3a6d5a;">AE</div>
        <div class="cast-name">Aaron Eckhart</div>
        <div class="cast-role">Harvey Dent</div>
      </div>
      <div class="cast-card">
        <div class="cast-avatar" style="background:#5a3a6d;">MC</div>
        <div class="cast-name">Michael Caine</div>
        <div class="cast-role">Alfred Pennyworth</div>
      </div>
      <div class="cast-card">
        <div class="cast-avatar" style="background:#6d5a3a;">GO</div>
        <div class="cast-name">Gary Oldman</div>
        <div class="cast-role">Jim Gordon</div>
      </div>
    </div>
  </div>

  <div class="bottom-nav">
    <i class="fa-solid fa-house nav-icon active"></i>
    <i class="fa-solid fa-magnifying-glass nav-icon"></i>
    <i class="fa-regular fa-bookmark nav-icon"></i>
    <i class="fa-regular fa-user nav-icon"></i>
  </div>
 
</div>
 
    )
}

export default Meunbar1
