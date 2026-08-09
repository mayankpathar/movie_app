import { useMemo, useState } from 'react'



const downloads = [
    {
        title: 'Transformers',
        year: 2007,
        rating: '7.8',
        duration: '2h 24m',
        description:
            'An ancient conflict between two Cybertronian races spills onto Earth, forcing Sam and Mikaela into the middle of the battle.',
        date: 'May 12, 2025',
        size: '2.3 GB',
        poster: '/images/movies/transformer.jpg',
    },
    {
        title: 'Call',
        year: 2020,
        rating: '7.5',
        duration: '1h 34m',
        description:
            'A mysterious phone connection links two people from different times, and every choice begins to rewrite the past.',
        date: 'May 10, 2025',
        size: '2.1 GB',
        poster: '/images/movies/call.jpg',
    },
    {
        title: 'Resident Evil',
        year: 2002,
        rating: '7.8',
        duration: '1h 40m',
        description:
            'An elite strike team enters a hidden facility where a deadly virus has turned the underground complex into a trap.',
        date: 'May 08, 2025',
        size: '2.8 GB',
        poster: '/images/movies/resident-evil.jpg',
    },
]

function Downloads() {
    const [items, setItems] = useState(downloads)
    const [openMenu, setOpenMenu] = useState(null)

    const totalItems = useMemo(() => items.length, [items.length])

    const handleDeleteAll = () => {
        setItems([])
        setOpenMenu(null)
    }

    const handleDeleteItem = (title) => {
        setItems((currentItems) => currentItems.filter((item) => item.title !== title))
        setOpenMenu(null)
    }

    return (
        <main className="downloads-page">
            <section className="downloads-shell">
                <header className="downloads-header">
                    <div>
                        <h1>Downloads</h1>
                        <p className="downloads-subtitle">Movies and shows you've downloaded.</p>
                        <p className="downloads-summary">
                            <span>{totalItems} Items</span>
                            <span className="summary-separator">•</span>
                            <strong>45.6 GB Used</strong>
                        </p>
                    </div>

                    <div className="downloads-actions">
                        <button className="ghost-button" type="button" onClick={handleDeleteAll}>
                            <i className="bx bx-trash" aria-hidden="true" />
                            <span>Delete All</span>
                        </button>
                    </div>
                </header>

                <ul className="downloads-list">
                    {items.map((item) => (
                        <li className="download-card" key={item.title}>
                            <div className="download-poster">
                                <img src={item.poster} alt={item.title} />
                            </div>

                            <div className="download-content">
                                <div className="download-title-row">
                                    <h2>{item.title}</h2>
                                    <div className="download-tags">
                                        <span>{item.year}</span>
                                        <span>
                                            <i className="bx bxs-star" aria-hidden="true" />
                                            {item.rating}
                                        </span>
                                        <span>{item.duration}</span>
                                    </div>
                                </div>

                                <p className="download-description">{item.description}</p>
                            </div>

                            <div className="download-meta">
                                <div className="downloaded-on">
                                    <span>Downloaded on</span>
                                    <strong>{item.date}</strong>
                                </div>

                                <div className="download-status">
                                    <span className="status-pill">
                                        <i className="bx bxs-check-circle" aria-hidden="true" />
                                        Completed
                                    </span>
                                    <strong>{item.size}</strong>
                                </div>
                            </div>

                            <div className="download-controls">
                                <button className="icon-button play-button" type="button" aria-label={`Play ${item.title}`}>
                                    <i className="bx bx-play" aria-hidden="true" />
                                </button>

                                <div className="more-menu-wrap">
                                    <button
                                        className="icon-button more-button"
                                        type="button"
                                        aria-label={`More actions for ${item.title}`}
                                        aria-expanded={openMenu === item.title}
                                        onClick={() => setOpenMenu(openMenu === item.title ? null : item.title)}
                                    >
                                        <i className="bx bx-dots-vertical-rounded" aria-hidden="true" />
                                    </button>

                                    {openMenu === item.title ? (
                                        <div className="more-dropdown" role="menu" aria-label={`${item.title} actions`}>
                                            <button type="button" role="menuitem" onClick={() => handleDeleteItem(item.title)}>
                                                <i className="bx bx-trash" aria-hidden="true" />
                                                Delete
                                            </button>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    )
}

export default Downloads
