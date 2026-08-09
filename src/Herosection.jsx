import React from 'react'
import { Link } from 'react-router-dom'

function Herosection() {
  return (
      <div className="hero-section">
        {/* <!-- HERO SLIDE --> */}
        <div className="hero-slide">
            <div className="owl-carousel carousel-nav-center" id="hero-carousel">
                {/* <!-- SLIDE ITEM --> */}
                <div className="hero-slide-item">
                    <img src="./images/black-banner.png" alt="" />
                    <div className="overlay"></div>
                    <div className="hero-slide-item-content">
                        <div className="item-content-wraper">
                            <div className="item-content-title top-down">
                                Black Panther
                            </div>
                            <div className="movie-infos top-down delay-2">
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
                            <div className="item-content-description top-down delay-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, possimus eius. Deserunt non odit, cum vero reprehenderit laudantium odio vitae autem quam, incidunt molestias ratione mollitia accusantium, facere ab suscipit.
                            </div>
                            <div className="item-action top-down delay-6">
                                <Link to="/movie/black-panther" className="btn btn-hover">
                                    <i className="bx bxs-right-arrow"></i>
                                    <span>Watch now</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- END SLIDE ITEM -->
                <!-- SLIDE ITEM --> */}
                <div className="hero-slide-item">
                    <img src="./images/John wick.jpg" alt="" />
                    <div className="overlay"></div>
                    <div className="hero-slide-item-content">
                        <div className="item-content-wraper">
                            <div className="item-content-title top-down">
                                John Wick
                            </div>
                            <div className="movie-infos top-down delay-2">
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
                            <div className="item-content-description top-down delay-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, possimus eius. Deserunt non odit, cum vero reprehenderit laudantium odio vitae autem quam, incidunt molestias ratione mollitia accusantium, facere ab suscipit.
                            </div>
                            <div className="item-action top-down delay-6">
                                <Link to="/movie/john-wick" className="btn btn-hover">
                                    <i className="bx bxs-right-arrow"></i>
                                    <span>Watch now</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- END SLIDE ITEM -->
                <!-- SLIDE ITEM --> */}
                <div className="hero-slide-item">
                    <img src="./images/GATG vol3.jpeg" alt="" />
                    <div className="overlay"></div>
                    <div className="hero-slide-item-content">
                        <div className="item-content-wraper">
                            <div className="item-content-title top-down">
                                GOTG Vol 3
                            </div>
                            <div className="movie-infos top-down delay-2">
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
                            <div className="item-content-description top-down delay-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, possimus eius. Deserunt non odit, cum vero reprehenderit laudantium odio vitae autem quam, incidunt molestias ratione mollitia accusantium, facere ab suscipit.
                            </div>
                            <div className="item-action top-down delay-6">
                                <Link to="/movie/gotg-vol3" className="btn btn-hover">
                                    <i className="bx bxs-right-arrow"></i>
                                    <span>Watch now</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- END SLIDE ITEM --> */}
            </div>
        </div>
        {/* <!-- END HERO SLIDE -->
        <!-- TOP MOVIES SLIDE --> */}
        <div className="top-movies-slide">
            <div className="owl-carousel" id="top-movies-slide">
                {/* <!-- MOVIE ITEM --> */}
                <div className="movie-item">
                    <img src="./images/series/supergirl.jpg" alt="" />
                    <div className="movie-item-content">
                        <div className="movie-item-title">
                            Supergirl
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
                {/* <!-- END MOVIE ITEM -->
                <!-- MOVIE ITEM --> */}
                <div className="movie-item">
                    <img src="./images/movies/captain-marvel.png" alt="" />
                    <div className="movie-item-content">
                        <div className="movie-item-title">
                            Captain Marvel
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
                {/* <!-- END MOVIE ITEM -->
                <!-- MOVIE ITEM --> */}
                <div className="movie-item">
                    <img src="./images/cartoons/demon-slayer.jpg" alt="" />
                    <div className="movie-item-content">
                        <div className="movie-item-title">
                            Infinity Train
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
                {/* <!-- END MOVIE ITEM -->
                <!-- MOVIE ITEM --> */}
                <div className="movie-item">
                    <img src="./images/movies/blood-shot.jpg" alt="" />
                    <div className="movie-item-content">
                        <div className="movie-item-title">
                            Bloodshot
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
                {/* <!-- END MOVIE ITEM -->
                <!-- MOVIE ITEM --> */}
                <div className="movie-item">
                    <img src="./images/series/wanda.png" alt="" />
                    <div className="movie-item-content">
                        <div className="movie-item-title">
                            Wanda Vision
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
                {/* <!-- END MOVIE ITEM -->
                <!-- MOVIE ITEM --> */}
                <div className="movie-item">
                    <img src="./images/movies/bat-man.jpg" alt="" />
                    <div className="movie-item-content">
                        <div className="movie-item-title">
                            The Dark Knight
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
                {/* <!-- END MOVIE ITEM --> */}
            </div>
        </div>
        {/* <!-- END TOP MOVIES SLIDE --> */}
    </div>
  )
}

export default Herosection
