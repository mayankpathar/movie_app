
import React from 'react'

const sampleItems = [
    {
        title: 'Transformer',
        year: 2007,
        rating: '7.8',
        duration: '2h 24m',
        date: 'May 12, 2025',
        poster: '/images/movies/transformer.jpg'
    },
    {
        title: 'Batman',
        year: 2022,
        rating: '8.5',
        duration: '2h 56m',
        date: 'May 10, 2025',
        poster: '/images/movies/bat-man.jpg'
    },
    {
        title: 'Dragon Ball',
        year: 1989,
        rating: '8.8',
        duration: '115h 24m',
        date: 'May 08, 2025',
        poster: '/images/cartoons/dragon.jpg'
    },
]
function My_list() {
    return (
        <div>


            <div className="watchlist-page container">
                <div className="watchlist-header">
                    <div>
                        <h2>My list</h2>
                        <p className="subtitle">Movies and shows you want to watch later.</p>
                        <p className="count">{sampleItems.length} Items</p>
                    </div>

                </div>

                <ul className="watchlist-items">
                    {sampleItems.map((it, i) => (
                        <li key={i} className="watchlist-item">
                            <div className="thumb">
                                <div className="thumb-img" style={{ backgroundImage: `url(${it.poster})` }} aria-hidden="true"> </div>
                            </div>
                            <div className="item-main">

                                <h4 className="item-title">{it.title}</h4>
                                <div className="item-meta-row">
                                    <div className="meta-badges">
                                        <span className="badge year">{it.year}</span>
                                        <span className="badge rating"><div class="movie-info">
                                            <i class="bx bxs-star"></i>
                                            <span>{it.rating}</span>
                                        </div></span>
                                        <span className="badge duration">{it.duration}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item-actions">
                                <div className="added">
                                    <i className='bx bx-calendar'></i>
                                    <div className="added-text">Added on<br /><strong>{it.date}</strong></div>
                                </div>
                                <button className="play-btn" aria-label="play">▶</button>
                                <button className="more-btn" aria-label="more">⋮</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>


        </div>
    )
}

export default My_list
