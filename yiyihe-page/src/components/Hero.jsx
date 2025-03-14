// import React from 'react'
// import { Box } from '@mui/material'

// const Hero = () => {
// 	return (
// 		<Box className="hero">

// 			<h2 className='hero-title'>
// 				Welcome to Resilient Futures Lab
// 			</h2>



// 		</Box>
// 	)
// }

// export default Hero

import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'

const images = [
	'/home/image0.jpg',
	'/home/image1.jpg',
	'/home/image2.jpg',
	'/home/image3.jpg',
	'/home/image4.jpg',
	'/home/image5.jpg',
	'/home/image6.jpg'
]

const Hero = () => {
	const [currentIndex, setCurrentIndex] = useState(0)

	// Auto-switch images every 3 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
		}, 3000)

		return () => clearInterval(interval) // Cleanup on unmount
	}, [])

	// Change image on scroll
	const handleScroll = (event) => {
		if (event.deltaY > 0) {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
		} else {
			setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
		}
	}

	return (
		<Box className="hero" onWheel={handleScroll} style={{ backgroundImage: `url(${images[currentIndex]})` }}>
			<div className="hero-overlay"></div>
			<h2 className="hero-title">Welcome to Resilient Futures Lab</h2>

			{/* Dots Navigation */}
			<div className="hero-dots">
				{images.map((_, index) => (
					<span
						key={index}
						className={`dot ${currentIndex === index ? 'active' : ''}`}
						onClick={() => setCurrentIndex(index)}
					></span>
				))}
			</div>
		</Box>
	)
}

export default Hero