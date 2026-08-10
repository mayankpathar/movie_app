import React from 'react'

const topRatedItems = [
  {
    rank: 1,
    title: 'Transformer',
    year: 2007,
    rating: '9.3',
    duration: '2h 22m',
    poster: '/images/movies/transformer.jpg',
  },
  {
    rank: 2,
    title: 'Batman',
    year: 2022,
    rating: '9.2',
    duration: '2h 55m',
    poster: '/images/movies/bat-man.jpg',
  },
  {
    rank: 3,
    title: 'Call',
    year: 2020,
    rating: '9.0',
    duration: '2h 32m',
    poster: '/images/movies/call.jpg',
  },
  {
    rank: 4,
    title: 'Resident Evil',
    year: 2002,
    rating: '9.0',
    duration: '3h 32m',
    poster: '/images/movies/resident-evil.jpg',
  },
  {
    rank: 5,
    title: 'Captain Marvel',
    year: 2019,
    rating: '8.9',
    duration: '1h 36m',
    poster: '/images/movies/captain-marvel.png',
  },
  {
    rank: 6,
    title: 'Hunter Killer',
    year: 2018,
    rating: '8.9',
    duration: '3h 15m',
    poster: '/images/movies/hunter-killer.jpg',
  },
  {
    rank: 7,
    title: 'End Game',
    year: 2019,
    rating: '8.8',
    duration: '3h 21m',
    poster: '/images/movies/end-game.jpg',
  },
  {
    rank: 8,
    title: 'Pulp Fiction',
    year: 1994,
    rating: '8.8',
    duration: '2h 34m',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlvNurXLcnJu8dLBL5becB20ybIO7keqfONDzVbvLQ2Q&s=10',
  },
  {
    rank: 9,
    title: 'Theatre Dead',
    year: 2001,
    rating: '8.8',
    duration: '2h 58m',
    poster: '/images/movies/theatre-dead.jpg',
  },
  {
    rank: 10,
    title: 'Forrest Gump',
    year: 1994,
    rating: '8.8',
    duration: '2h 22m',
    poster: '/images/movies/insidious.jpg',
  },
  {
    rank: 11,
    title: 'Inception',
    year: 2010,
    rating: '8.7',
    duration: '2h 28m',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQg-lz9VcmtwA-IWSxqlLwRqL8yrJHRKNs5mkdMRXOyw&s=10',
  },
  {
    rank: 12,
    title: 'Fight Club',
    year: 1999,
    rating: '8.7',
    duration: '2h 19m',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXbGav2txLP4MLUNwuIQAg26r_M3Urtg1XmZ0w28Ue8A&s=10',
  },
]

function Toprated() {
  return (
    <main className="top-rated-page">
      <section className="top-rated-shell">
        <header className="top-rated-header">
          <div>
            <h1>
              Top Rated <span aria-hidden="true">☆</span>
            </h1>
            <p className="top-rated-subtitle">Highest rated movies by viewers around the world.</p>
            <p className="top-rated-count">100 Items</p>
          </div>

          <div className="top-rated-controls">
            <label className="sort-control">
              <span>Sort by</span>
              <select defaultValue="rating-high">
                <option value="rating-high">Rating (High to Low)</option>
                <option value="rating-low">Rating (Low to High)</option>
                <option value="recent">Recently Added</option>
              </select>
            </label>

            <div className="view-switch" aria-label="View mode">
              <button className="view-button is-active" type="button" aria-label="Grid view">
                <i className="bx bxs-grid" aria-hidden="true" />
              </button>
              <button className="view-button" type="button" aria-label="List view">
                <i className="bx bx-list-ul" aria-hidden="true" />
              </button>
            </div>
          </div>
        </header>

        <ul className="top-rated-grid">
          {topRatedItems.map((item) => (
            <li className="top-rated-card" key={item.rank}>
              <div className="card-poster-wrap">
                <span className="card-rank">{item.rank}</span>
                <button className="favorite-button" type="button" aria-label={`Add ${item.title} to favorites`}>
                  <i className="bx bx-heart" aria-hidden="true" />
                </button>
                <img src={item.poster} alt={item.title} className="card-poster" />
              </div>

              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p className="card-year">{item.year}</p>

                <div className="card-meta">
                  <span className="card-rating">
                    <i className="bx bxs-star" aria-hidden="true" />
                    {item.rating}
                  </span>
                  <span className="card-divider">|</span>
                  <span className="card-duration">{item.duration}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Toprated
