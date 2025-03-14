
// import React from 'react';
// import { Typography } from '@mui/material';

// const Publications = () => {
// 	return (

import React from 'react'
import '../App.css'
import { Typography } from '@mui/material'

const publications = [
	"Lindbergh, S., He, Y., & Radke, J. (2024). Beyond carbon: Unveiling vulnerabilities of the transportation fuel system for climate resilience. Energy Research & Social Science, 114, 103585.",
	"Appiah, G, Cooney, B, Kaufman, M, and Andris, C (2024). Public, Private, Personal: Shifting Patterns in Spatial Data Sources in used in Geospatial Research. Annals of the American Association of Geographers, 1-17.",
	"Andris C (2024). Social Life and Interpersonal Relationships in Environment and Planning B. Environment and Planning B: Urban Analytics and City Science, 51(5), 1055-1058.",
	"Kelly J, Sarkar D, and Andris C (2024). Locality, Personal Ties, and Efficiency in a Food Security Network. Annals of the American Association of Geographers, 1-12.",
	"Sarkar D, Gogarten JF, Liang X, Andris C, Opito EA, Valenta K, and Chapman CA (2024). Impacts of COVID-19 on Biodiversity Conservation and Community Networks at Kibale National Park, Uganda. The Professional Geographer, 76(2), 119-132."
]

const Publications = () => {
	return (
		<div className="team-members">
			<div className="section-background">
				<img
					alt=""
					src="/publications/Profile-Pic-Publications.jpg"

					className="section-image"
				/>
				<div className="section-background-overlay"></div>
				<Typography variant="h2" className="section-title">
					Publications
				</Typography>
			</div>


			{/* Reversed Ordered List */}
			<div
				className="publications-wrapper">


				<ol className="publications-list" reversed>
					{publications.map((citation, index) => (
						<li key={index} className="publication-item">
							<Typography variant="body1">{citation}</Typography>
						</li>
					))}
				</ol>
			</div>
		</div>
	)
}

export default Publications
