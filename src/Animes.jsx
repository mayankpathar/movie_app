import React from 'react'
import Latestanime from './Latestanime'
import Meunbar1 from './Meunbar1'
import { Link } from 'react-router-dom'

function Animes() {
    return (
        <>
            <Meunbar1 />
              <div className="section">
                    <div className="container">
                        <div className="movies-slide carousel-nav-center owl-carousel">
                            

                            <div className="movie-item">
                                <img src="./images/cartoons/dragon.jpg" alt="Dragonball" />
                                <div className="movie-item-content">
                                    <div className="movie-item-title">
                                        Dragonball
                                    </div>
                                    <div className="item-action top-down delay-6">
                                            <Link to="/movie/dragonball" className="btn btn-hover">
                                                <i className="bx bxs-right-arrow"></i>
                                                <span>Watch now</span>
                                            </Link>
                                        </div>
                                    <div className="movie-infos">
                                        <div className="movie-info">
                                            <i className="bx bxs-star"></i>
                                            <span>9.5</span>
                                        </div>
                                        <div className="movie-info">
                                            <i className="bx bxs-time"></i>
                                            <span>120 mins</span>
                                        </div>
                                        <div className="movie-info">
                                            <span>HD</span>
                                        </div>
                                        <div className="movie-info">
                                            <span>16+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="movie-item">
                                <img src="./images/cartoons/coco.jpg" alt="Coco" />
                                <div className="movie-item-content">
                                    <div className="movie-item-title">
                                        Coco
                                    </div>
                                    <div className="item-action top-down delay-6">
                                            <Link to="/movie/coco" className="btn btn-hover">
                                                <i className="bx bxs-right-arrow"></i>
                                                <span>Watch now</span>
                                            </Link>
                                        </div>
                                    <div className="movie-infos">
                                        <div className="movie-info">
                                            <i className="bx bxs-star"></i>
                                            <span>9.5</span>
                                        </div>
                                        <div className="movie-info">
                                            <i className="bx bxs-time"></i>
                                            <span>120 mins</span>
                                        </div>
                                        <div className="movie-info">
                                            <span>HD</span>
                                        </div>
                                        <div className="movie-info">
                                            <span>16+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                            
                            
                            
                            
                            
                            
                            <div className="movie-item">
                                <img src="./images/cartoons/over-the-moon.jpg" alt="Over The Moon" />
                                <div className="movie-item-content">
                                    <div className="movie-item-title">
                                        Over The Moon
                                    </div>
                                    <div className="item-action top-down delay-6">
                                            <Link to="/movie/over-the-moon" className="btn btn-hover">
                                                <i className="bx bxs-right-arrow"></i>
                                                <span>Watch now</span>
                                            </Link>
                                        </div>
                                    <div className="movie-infos">
                                        <div className="movie-info">
                                            <i className="bx bxs-star"></i>
                                            <span>9.5</span>
                                        </div>
                                        <div className="movie-info">
                                            <i className="bx bxs-time"></i>
                                            <span>120 mins</span>
                                        </div>
                                        <div className="movie-info">
                                            <span>HD</span>
                                        </div>
                                        <div className="movie-info">
                                            <span>16+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div className="movie-item">
                                <img src="./images/cartoons/weathering.jpg" alt="Weathering With You" />
                                <div className="movie-item-content">
                                    <div className="movie-item-title">
                                        Weathering With You
                                    </div>
                                    <div className="item-action top-down delay-6">
                                            <Link to="/movie/weathering-with-you" className="btn btn-hover">
                                                <i className="bx bxs-right-arrow"></i>
                                                <span>Watch now</span>
                                            </Link>
                                        </div>
                                    <div className="movie-infos">
                                        <div className="movie-info">
                                            <i className="bx bxs-star"></i>
                                            <span>9.5</span>
                                        </div>
                                        <div className="movie-info">
                                            <i className="bx bxs-time"></i>
                                            <span>120 mins</span>
                                        </div>
                                        <div className="movie-info">
                                            <span>HD</span>
                                        </div>
                                        <div className="movie-info">
                                            <span>16+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="movie-item">
                                <img src="./images/cartoons/croods.jpg" alt="Croods" />
                                <div className="movie-item-content">
                                    <div className="movie-item-title">
                                        Croods
                                    </div>
                                    <div className="item-action top-down delay-6">
                                            <Link to="/movie/croods" className="btn btn-hover">
                                                <i className="bx bxs-right-arrow"></i>
                                                <span>Watch now</span>
                                            </Link>
                                        </div>
                                    <div className="movie-infos">
                                        <div className="movie-info">
                                            <i className="bx bxs-star"></i>
                                            <span>9.5</span>
                                        </div>
                                        <div className="movie-info">
                                            <i className="bx bxs-time"></i>
                                            <span>120 mins</span>
                                        </div>
                                        <div className="movie-info">
                                            <span>HD</span>
                                        </div>
                                        <div className="movie-info">
                                            <span>16+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div className="movie-item">
                                <img src="./images/cartoons/your-name.jpg" alt="Your Name" />
                                <div className="movie-item-content">
                                    <div className="movie-item-title">
                                        Your Name
                                    </div>
                                    <div className="item-action top-down delay-6">
                                            <Link to="/movie/your-name" className="btn btn-hover">
                                                <i className="bx bxs-right-arrow"></i>
                                                <span>Watch now</span>
                                            </Link>
                                        </div>
                                    <div className="movie-infos">
                                        <div className="movie-info">
                                            <i className="bx bxs-star"></i>
                                            <span>9.5</span>
                                        </div>
                                        <div className="movie-info">
                                            <i className="bx bxs-time"></i>
                                            <span>120 mins</span>
                                        </div>
                                        <div className="movie-info">
                                            <span>HD</span>
                                        </div>
                                        <div className="movie-info">
                                            <span>16+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                           
                             <div className="movie-item">
                                <img src="./images/cartoons/demon-slayer.jpg" alt="Demon Slayer" />
                                <div className="movie-item-content">
                                    <div className="movie-item-title">
                                        Demon Slayer
                                    </div>
                                    <div className="item-action top-down delay-6">
                                            <Link to="/movie/demon-slayer" className="btn btn-hover">
                                                <i className="bx bxs-right-arrow"></i>
                                                <span>Watch now</span>
                                            </Link>
                                        </div>
                                    <div className="movie-infos">
                                        <div className="movie-info">
                                            <i className="bx bxs-star"></i>
                                            <span>9.5</span>
                                        </div>
                                        <div className="movie-info">
                                            <i className="bx bxs-time"></i>
                                            <span>120 mins</span>
                                        </div>
                                        <div className="movie-info">
                                            <span>HD</span>
                                        </div>
                                        <div className="movie-info">
                                            <span>16+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
             <div className="section">
                    <div className="container">
                        <div className="section-header">
                            Top Animes
                        </div>
                        <div className="movies-slide carousel-nav-center owl-carousel">
                            
                           
                            
                            <div className="movie-item">
                                <img src="./images/cartoons/over-the-moon.jpg" alt="Over The Moon" />
                                <div className="movie-item-content">
                                    <div className="movie-item-title">
                                        Over The Moon
                                    </div>
                                    <div className="item-action top-down delay-6">
                                            <Link to="/movie/over-the-moon" className="btn btn-hover">
                                                <i className="bx bxs-right-arrow"></i>
                                                <span>Watch now</span>
                                            </Link>
                                        </div>
                                    <div className="movie-infos">
                                        <div className="movie-info">
                                            <i className="bx bxs-star"></i>
                                            <span>9.5</span>
                                        </div>
                                        <div className="movie-info">
                                            <i className="bx bxs-time"></i>
                                            <span>120 mins</span>
                                        </div>
                                        <div className="movie-info">
                                            <span>HD</span>
                                        </div>
                                        <div className="movie-info">
                                            <span>16+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div className="movie-item">
                                <img src="./images/cartoons/weathering.jpg" alt="Weathering With You" />
                                <div className="movie-item-content">
                                    <div className="movie-item-title">
                                        Weathering With You
                                    </div>
                                    <div className="item-action top-down delay-6">
                                            <Link to="/movie/weathering-with-you" className="btn btn-hover">
                                                <i className="bx bxs-right-arrow"></i>
                                                <span>Watch now</span>
                                            </Link>
                                        </div>
                                    <div className="movie-infos">
                                        <div className="movie-info">
                                            <i className="bx bxs-star"></i>
                                            <span>9.5</span>
                                        </div>
                                        <div className="movie-info">
                                            <i className="bx bxs-time"></i>
                                            <span>120 mins</span>
                                        </div>
                                        <div className="movie-info">
                                            <span>HD</span>
                                        </div>
                                        <div className="movie-info">
                                            <span>16+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div className="movie-item">
                                <img src="./images/cartoons/your-name.jpg" alt="Your Name" />
                                <div className="movie-item-content">
                                    <div className="movie-item-title">
                                        Your Name
                                    </div>
                                    <div className="item-action top-down delay-6">
                                            <Link to="/movie/your-name" className="btn btn-hover">
                                                <i className="bx bxs-right-arrow"></i>
                                                <span>Watch now</span>
                                            </Link>
                                        </div>
                                    <div className="movie-infos">
                                        <div className="movie-info">
                                            <i className="bx bxs-star"></i>
                                            <span>9.5</span>
                                        </div>
                                        <div className="movie-info">
                                            <i className="bx bxs-time"></i>
                                            <span>120 mins</span>
                                        </div>
                                        <div className="movie-info">
                                            <span>HD</span>
                                        </div>
                                        <div className="movie-info">
                                            <span>16+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div className="movie-item">
                                <img src="./images/cartoons/coco.jpg" alt="Coco" />
                                <div className="movie-item-content">
                                    <div className="movie-item-title">
                                        Coco
                                    </div>
                                    <div className="item-action top-down delay-6">
                                            <Link to="/movie/coco" className="btn btn-hover">
                                                <i className="bx bxs-right-arrow"></i>
                                                <span>Watch now</span>
                                            </Link>
                                        </div>
                                    <div className="movie-infos">
                                        <div className="movie-info">
                                            <i className="bx bxs-star"></i>
                                            <span>9.5</span>
                                        </div>
                                        <div className="movie-info">
                                            <i className="bx bxs-time"></i>
                                            <span>120 mins</span>
                                        </div>
                                        <div className="movie-info">
                                            <span>HD</span>
                                        </div>
                                        <div className="movie-info">
                                            <span>16+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            

                             <div className="movie-item">
                                <img src="./images/cartoons/demon-slayer.jpg" alt="Demon Slayer" />
                                <div className="movie-item-content">
                                    <div className="movie-item-title">
                                        Demon Slayer
                                    </div>
                                    <div className="item-action top-down delay-6">
                                            <Link to="/movie/demon-slayer" className="btn btn-hover">
                                                <i className="bx bxs-right-arrow"></i>
                                                <span>Watch now</span>
                                            </Link>
                                        </div>
                                    <div className="movie-infos">
                                        <div className="movie-info">
                                            <i className="bx bxs-star"></i>
                                            <span>9.5</span>
                                        </div>
                                        <div className="movie-info">
                                            <i className="bx bxs-time"></i>
                                            <span>120 mins</span>
                                        </div>
                                        <div className="movie-info">
                                            <span>HD</span>
                                        </div>
                                        <div className="movie-info">
                                            <span>16+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div className="movie-item">
                                <img src="./images/cartoons/croods.jpg" alt="Croods" />
                                <div className="movie-item-content">
                                    <div className="movie-item-title">
                                        Croods
                                    </div>
                                    <div className="item-action top-down delay-6">
                                            <Link to="/movie/croods" className="btn btn-hover">
                                                <i className="bx bxs-right-arrow"></i>
                                                <span>Watch now</span>
                                            </Link>
                                        </div>
                                    <div className="movie-infos">
                                        <div className="movie-info">
                                            <i className="bx bxs-star"></i>
                                            <span>9.5</span>
                                        </div>
                                        <div className="movie-info">
                                            <i className="bx bxs-time"></i>
                                            <span>120 mins</span>
                                        </div>
                                        <div className="movie-info">
                                            <span>HD</span>
                                        </div>
                                        <div className="movie-info">
                                            <span>16+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div className="movie-item">
                                <img src="./images/cartoons/dragon.jpg" alt="Dragonball" />
                                <div className="movie-item-content">
                                    <div className="movie-item-title">
                                        Dragonball
                                    </div>
                                    <div className="item-action top-down delay-6">
                                            <Link to="/movie/dragonball" className="btn btn-hover">
                                                <i className="bx bxs-right-arrow"></i>
                                                <span>Watch now</span>
                                            </Link>
                                        </div>
                                    <div className="movie-infos">
                                        <div className="movie-info">
                                            <i className="bx bxs-star"></i>
                                            <span>9.5</span>
                                        </div>
                                        <div className="movie-info">
                                            <i className="bx bxs-time"></i>
                                            <span>120 mins</span>
                                        </div>
                                        <div className="movie-info">
                                            <span>HD</span>
                                        </div>
                                        <div className="movie-info">
                                            <span>16+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            <Latestanime />
        </>
    )
}

export default Animes
