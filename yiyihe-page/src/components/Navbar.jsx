// // import React from 'react';
// // import { Link } from 'react';

// // const Navbar = () => {
// // 	return (
// // 		<nav className="navbar">
// // 			<div className="navbar-brand">
// // 				<Link to="/">Professor's Name</Link>
// // 			</div>
// // 			<ul className="navbar-links">
// // 				<li><Link to="/">Home</Link></li>
// // 				<li><Link to="/research">Research</Link></li>
// // 				<li><Link to="/bio">Bio</Link></li>
// // 				<li><Link to="/publications">Publications</Link></li>
// // 				<li><Link to="/people">People</Link></li>
// // 				<li><Link to="/gallery">Gallery</Link></li>
// // 				<li><Link to="/Teaching">Teaching</Link></li>
// // 				<li><Link to="/contact">Contact</Link></li>
// // 				<li><Link to="/news">News</Link></li>
// // 			</ul>
// // 		</nav>
// // 	);
// // };

// // export default Navbar;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
// 	const [isMenuOpen, setIsMenuOpen] = useState(false);

// 	const toggleMenu = () => {
// 		setIsMenuOpen(!isMenuOpen);
// 	};

// 	return (
// 		<div className="header-announcement-bar-wrapper">
// 			{/* Skip to Content Link */}
// 			<a href="#page" className="header-skip-link sqs-button-element--primary">
// 				Skip to Content
// 			</a>

// 			{/* Header Border and Dropshadow (Placeholder) */}
// 			<div className="header-border" data-header-style="theme" data-header-border="false"></div>
// 			<div className="header-dropshadow" data-header-style="theme" data-header-dropshadow="false"></div>

// 			{/* Header Inner Container */}
// 			<div className="header-inner container--fluid header-mobile-layout-logo-left-nav-right header-layout-nav-left">
// 				{/* Background */}
// 				<div className="header-background theme-bg--primary"></div>

// 				{/* Desktop Header */}
// 				<div className="header-display-desktop" data-content-field="site-title">
// 					{/* Title and Nav Wrapper */}
// 					<div className="header-title-nav-wrapper">
// 						{/* Title */}
// 						<div className="header-title preSlide slideIn" data-animation-role="header-element">
// 							<div className="header-title-text">
// 								<Link to="/" id="site-title" data-animation-role="header-element" className="preSlide slideIn">
// 									C. Yao Lai
// 								</Link>
// 							</div>
// 						</div>

// 						{/* Navigation Menu */}
// 						<div className="header-nav">
// 							<div className="header-nav-wrapper">
// 								<nav className="header-nav-list">
// 									<div className="header-nav-item header-nav-item--collection header-nav-item--active header-nav-item--homepage">
// 										<Link to="/" data-animation-role="header-element" aria-current="page" className="preSlide slideIn">
// 											Home
// 										</Link>
// 									</div>
// 									<div className="header-nav-item header-nav-item--collection">
// 										<Link to="/research" data-animation-role="header-element" className="preSlide slideIn">
// 											Research
// 										</Link>
// 									</div>
// 									<div className="header-nav-item header-nav-item--collection">
// 										<Link to="/bio" data-animation-role="header-element" className="preSlide slideIn">
// 											Bio
// 										</Link>
// 									</div>
// 									<div className="header-nav-item header-nav-item--collection">
// 										<Link to="/publications" data-animation-role="header-element" className="preSlide slideIn">
// 											Publications
// 										</Link>
// 									</div>
// 									<div className="header-nav-item header-nav-item--collection">
// 										<Link to="/people" data-animation-role="header-element" className="preSlide slideIn">
// 											People
// 										</Link>
// 									</div>
// 									<div className="header-nav-item header-nav-item--collection">
// 										<Link to="/gallery" data-animation-role="header-element" className="preSlide slideIn">
// 											Gallery
// 										</Link>
// 									</div>
// 									<div className="header-nav-item header-nav-item--collection">
// 										<Link to="/teaching" data-animation-role="header-element" className="preSlide slideIn">
// 											Teaching
// 										</Link>
// 									</div>
// 									<div className="header-nav-item header-nav-item--collection">
// 										<Link to="/contact" data-animation-role="header-element" className="preSlide slideIn">
// 											Contact
// 										</Link>
// 									</div>
// 									<div className="header-nav-item header-nav-item--collection">
// 										<Link to="/news" data-animation-role="header-element" className="preSlide slideIn">
// 											News
// 										</Link>
// 									</div>
// 								</nav>
// 							</div>
// 						</div>
// 					</div>

// 					{/* Social Icons */}
// 					<div className="header-actions header-actions--right">
// 						<div className="header-actions-action header-actions-action--social">
// 							<a
// 								className="icon icon--fill header-icon header-icon-border-shape-none header-icon-border-style-outline"
// 								href="https://scholar.google.com/citations?user=e1kTy34AAAAJ&hl=en"
// 								target="_blank"
// 								rel="noopener noreferrer"
// 								aria-label="Google Scholar"
// 							>
// 								<img src="/path/to/google-scholar-icon.svg" alt="Google Scholar" />
// 							</a>
// 							<a
// 								className="icon icon--fill header-icon header-icon-border-shape-none header-icon-border-style-outline"
// 								href="https://github.com/YaoGroup"
// 								target="_blank"
// 								rel="noopener noreferrer"
// 								aria-label="GitHub"
// 							>
// 								<img src="/path/to/github-icon.svg" alt="GitHub" />
// 							</a>
// 							<a
// 								className="icon icon--fill header-icon header-icon-border-shape-none header-icon-border-style-outline"
// 								href="https://www.youtube.com/@c.yaolai/featured"
// 								target="_blank"
// 								rel="noopener noreferrer"
// 								aria-label="YouTube"
// 							>
// 								<img src="/path/to/youtube-icon.svg" alt="YouTube" />
// 							</a>
// 						</div>
// 					</div>

// 					{/* Burger Menu for Mobile */}
// 					<div className="header-burger menu-overlay-has-visible-non-navigation-items preSlide slideIn" data-animation-role="header-element">
// 						<button className="header-burger-btn burger" onClick={toggleMenu}>
// 							<span className="js-header-burger-open-title visually-hidden">Open Menu</span>
// 							<span hidden className="js-header-burger-close-title visually-hidden">Close Menu</span>
// 							<div className="burger-box">
// 								<div className="burger-inner header-menu-icon-doubleLineHamburger">
// 									<div className="top-bun"></div>
// 									<div className="patty"></div>
// 									<div className="bottom-bun"></div>
// 								</div>
// 							</div>
// 						</button>
// 					</div>
// 				</div>

// 				{/* Mobile Header (Optional) */}
// 				<div className="header-display-mobile" data-content-field="site-title">
// 					{/* Add mobile-specific content here if needed */}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					<Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
						Yiyi He
					</Link>
				</Typography>
				<Button color="inherit" component={Link} to="/">
					Home
				</Button>
				<Button color="inherit" component={Link} to="/about">
					About
				</Button>
				<Button color="inherit" component={Link} to="/publications">
					Publications
				</Button>
				<Button color="inherit" component={Link} to="/contact">
					Contact
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;