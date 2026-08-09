import React from 'react'

const cast = [
    { name: 'Leonardo DiCaprio', role: 'Cobb', img: '/images/uploads/cast1.jpg' },
    { name: 'Joseph Gordon-Levitt', role: 'Arthur', img: '/images/uploads/cast2.jpg' },
    { name: 'Elliot Page', role: 'Ariadne', img: '/images/uploads/cast3.jpg' },
    { name: 'Tom Hardy', role: 'Eames', img: '/images/uploads/cast4.jpg' },
    { name: 'Ken Watanabe', role: 'Saito', img: '/images/uploads/cast5.jpg' },
]

const similar = [
    { img: './images/GATG vol3.jpeg', title: 'Guardians of the Galaxy Vol. 3', year: 2010, rating: 8.1 },
    { img: './images/John wick.jpg', title: 'John Wick', year: 2018, rating: 7.3 },
    { img: '/images/uploads/mv-item5.jpg', title: 'Memento', year: 2000, rating: 8.4 },
    { img: '/images/uploads/mv-item4.jpg', title: 'Prestige', year: 2006, rating: 8.5 },
    { img: './images/black-banner.png', title: 'Black Panther', year: 1999, rating: 8.7 },
]

function YourNamedetail() {
  return (
    <div>
      <div className="movie-details-page">
            <div className="movie-container">
                <main className="movie-main">
                    <div className="left-col">
                        <div className="poster-wrap">
                            <img src="./images/cartoons/your-name.jpg" alt="Your Name poster" />
                            <button className="play-big">▶</button>
                            <button className="watch-trailer small">Watch Trailer</button>
                        </div>

                        <div className="title-block">
                            <h1>Your Name</h1>
                            <div className="meta">2019 • 1h 52m • <span className="rating">★ 7.8/10</span></div>
                            <p className="synopsis">
                                A high school student runs away from his hometown and meets a mysterious girl.
                            </p>

                            <div className="actions">
                                <button className="btn primary">▶ Watch Now</button>
                                <button className="btn outline">+ Add to Watchlist</button>
                                <button className="more">•••</button>
                            </div>

                            <div className="info-grid">
                                <div><strong>Director</strong><div>Christopher Nolan</div></div>
                                <div><strong>Writers</strong><div>Christopher Nolan</div></div>
                                <div><strong>Stars</strong><div>Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page</div></div>
                                <div><strong>Language</strong><div>English</div></div>
                                <div><strong>Budget</strong><div>$160 million</div></div>
                                <div><strong>Box Office</strong><div>$837 million</div></div>
                            </div>

                            <section className="cast-section">
                                <h3>Cast</h3>
                                <div className="cast-list">
                                    {cast.map((c) => (
                                        <div className="cast-item" key={c.name}>
                                            <img src={c.img} alt={c.name} />
                                            <div className="cast-name">{c.name}</div>
                                            <div className="cast-role">{c.role}</div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="similar-section">
                                <h3>Similar Movies</h3>
                                <div className="similar-list">
                                    {similar.map((s) => (
                                        <div className="similar-item" key={s.title}>
                                            <img src={s.img} alt={s.title} />
                                            <div className="sim-info">
                                                <div className="sim-title">{s.title}</div>
                                                <div className="sim-sub">{s.year} • ★ {s.rating}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </main>

                <aside className="movie-sidebar">
                    <div className="details-card">
                        <h4>Details</h4>
                        <ul>
                            <li><span className="label">Release Date</span><span className="value">July 16, 2010</span></li>
                            <li><span className="label">Original Title</span><span className="value">Inception</span></li>
                            <li><span className="label">Country</span><span className="value">USA, UK</span></li>
                            <li><span className="label">Cinematography</span><span className="value">Wally Pfister</span></li>
                            <li><span className="label">Music</span><span className="value">Hans Zimmer</span></li>
                            <li><span className="label">Runtime</span><span className="value">2h 28m</span></li>
                            <li><span className="label">Genres</span><span className="value">Sci-Fi, Thriller, Action</span></li>
                            <li><span className="label">Certification</span><span className="value">PG-13</span></li>
                        </ul>
                    </div>

                    <div className="overview-card">
                        <h4>Overview</h4>
                        <p>
                            A thief who steals corporate secrets through the use of dream-sharing
                            technology is given the inverse task of planting an idea into the mind of
                            a C.E.O., but his tragic past may doom the project and his team to disaster.
                        </p>
                    </div>
                </aside>
            </div>
        </div>
    </div>
  )
}

export default YourNamedetail