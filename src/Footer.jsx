import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
	return (
		<footer className="section">
			<div className="container">
				<div className="row">
					<div className="col-4 col-md-6 col-sm-12">
						<div className="content">
							<Link to="/" className="logo">
								<i className='bx bx-movie-play bx-tada main-color'></i>Phoe<span className="main-color">nix</span>Zone
							</Link>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut veniam ex quos hic id nobis beatae earum sapiente! Quod ipsa exercitationem officiis non error illum minima iusto et. Dolores, quibusdam?
							</p>
							<div className="social-list">
								<Link to="/" className="social-item">
									<i className="bx bxl-facebook"></i>
								</Link>
								<Link to="/" className="social-item">
									<i className="bx bxl-twitter"></i>
								</Link>
								<Link to="/" className="social-item">
									<i className="bx bxl-instagram"></i>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-8 col-md-6 col-sm-12">
						<div className="row">
							<div className="col-3 col-md-6 col-sm-6">
								<div className="content">
									<p><b>Flix</b></p>
									<ul className="footer-menu">
										<li><Link to="/about">About us</Link></li>
										<li><Link to="/profile">My profile</Link></li>
										<li><Link to="/pricing">Pricing plans</Link></li>
										<li><Link to="/contacts">Contacts</Link></li>
									</ul>
								</div>
							</div>
							<div className="col-3 col-md-6 col-sm-6">
								<div className="content">
									<p><b>Browse</b></p>
									<ul className="footer-menu">
										<li><Link to="/about">About us</Link></li>
										<li><Link to="/profile">My profile</Link></li>
										<li><Link to="/pricing">Pricing plans</Link></li>
										<li><Link to="/contacts">Contacts</Link></li>
									</ul>
								</div>
							</div>
							<div className="col-3 col-md-6 col-sm-6">
								<div className="content">
									<p><b>Help</b></p>
									<ul className="footer-menu">
										<li><Link to="/about">About us</Link></li>
										<li><Link to="/profile">My profile</Link></li>
										<li><Link to="/pricing">Pricing plans</Link></li>
										<li><Link to="/contacts">Contacts</Link></li>
									</ul>
								</div>
							</div>
							<div className="col-3 col-md-6 col-sm-6">
								<div className="content">
									<p><b>Download app</b></p>
									<ul className="footer-menu">
										<li>
											<Link to="/">
												<img src="./images/google-play.png" alt="" />
											</Link>
										</li>
										<li>
											<Link to="/">
												<img src="./images/app-store.png" alt="" />
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>

	)
}

export default Footer
