
// import React, { useRef } from 'react'
// import '../App.css'
// import { Typography } from '@mui/material'

// const researchAreas = {
// 	climateResilience: {
// 		title: 'Climate Resilience',
// 		image: '/research/solar_gallery_image.png',
// 		description:
// 			'Transportation networks underpin socioeconomic development by enabling the movement of goods and people. However, despite their frequency, little is known about how floods disrupt transportation systems in developing country cities.Transportation networks underpin socioeconomic development by enabling the movement of goods and people. However, despite their frequency, little is known about how floods disrupt transportation systems in developing country cities.Transportation networks underpin socioeconomic development by enabling the movement of goods and people. However, despite their frequency, little is known about how floods disrupt transportation systems in developing country cities.'
// 	},
// 	networkScience: {
// 		title: 'Network Science',
// 		image: '/research/graph_gallery_image.png',
// 		description:
// 			'Sea level rise (SLR) and storm surge inundation are major concerns along the coast of the San Francisco Bay, impacting both coastal communities and critical infrastructure networks. Sea level rise (SLR) and storm surge inundation are major concerns along the coast of the San Francisco Bay, impacting both coastal communities and critical infrastructure networks. Sea level rise (SLR) and storm surge inundation are major concerns along the coast of the San Francisco Bay, impacting both coastal communities and critical infrastructure networks. Sea level rise (SLR) and storm surge inundation are major concerns along the coast of the San Francisco Bay, impacting both coastal communities and critical infrastructure networks. Sea level rise (SLR) and storm surge inundation are major concerns along the coast of the San Francisco Bay, impacting both coastal communities and critical infrastructure networks. Sea level rise (SLR) and storm surge inundation are major concerns along the coast of the San Francisco Bay, impacting both coastal communities and critical infrastructure networks.'
// 	},
// 	machineLearning: {
// 		title: 'Machine Learning',
// 		image: '/research/machinelearning.jpg',
// 		description:
// 			'Sea level rise (SLR) and storm surge inundation are major concerns along the coast of the San Francisco Bay, impacting both coastal communities and critical infrastructure networks. Sea level rise (SLR) and storm surge inundation are major concerns along the coast of the San Francisco Bay, impacting both coastal communities and critical infrastructure networks. Sea level rise (SLR) and storm surge inundation are major concerns along the coast of the San Francisco Bay, impacting both coastal communities and critical infrastructure networks. Sea level rise (SLR) and storm surge inundation are major concerns along the coast of the San Francisco Bay, impacting both coastal communities and critical infrastructure networks. Sea level rise (SLR) and storm surge inundation are major concerns along the coast of the San Francisco Bay, impacting both coastal communities and critical infrastructure networks. Sea level rise (SLR) and storm surge inundation are major concerns along the coast of the San Francisco Bay, impacting both coastal communities and critical infrastructure networks.'

// 	}
// }

// const Research = () => {
// 	// Create references for each research topic
// 	const climateRef = useRef(null)
// 	const networkRef = useRef(null)
// 	const mlRef = useRef(null)

// 	// Function to handle scrolling to a topic
// 	const scrollToSection = (ref) => {
// 		ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
// 	}

// 	return (
// 		<div className="team-members">
// 			{/* Profile Picture Section */}
// 			<div className="section-background">
// 				<img alt=""
// 					src="/research/Profile-Pic-Research.jpg"
// 					className="section-image" />
// 				<div className="section-background-overlay"></div>
// 				<Typography variant="h2" className="section-title">Research</Typography>
// 			</div>


// 			<div className="research-wrapper">


// 				{/* Research Buttons for Jumping to Sections */}
// 				<div className="research-buttons">
// 					<button onClick={() => scrollToSection(climateRef)}>Climate Resilience</button>
// 					<button onClick={() => scrollToSection(networkRef)}>Network Science</button>
// 					<button onClick={() => scrollToSection(mlRef)}>Machine Learning</button>
// 				</div>

// 				{/* Research Sections */}
// 				<div className="research-wrapper">
// 					{/* Climate Resilience Section */}
// 					<div ref={climateRef} className="research-section">
// 						<img src={researchAreas.climateResilience.image} alt="Climate Resilience" className="research-image" />
// 						<div className="research-text">
// 							<h3>{researchAreas.climateResilience.title}</h3>
// 							<p>{researchAreas.climateResilience.description}</p>
// 						</div>

// 					</div>

// 					{/* Network Science Section */}
// 					<div ref={networkRef} className="research-section">
// 						<img src={researchAreas.networkScience.image} alt="Network Science" className="research-image" />
// 						<div className="research-text">

// 							<h3>{researchAreas.networkScience.title}</h3>
// 							<p>{researchAreas.networkScience.description}</p>
// 						</div>

// 					</div>


// 					{/* Machine Learning Section */}
// 					<div ref={mlRef} className="research-section">
// 						<img src={researchAreas.machineLearning.image} alt="Machine Learning" className="research-image" />
// 						<div className="research-text">
// 							<h3>{researchAreas.machineLearning.title}</h3>
// 							<p>{researchAreas.machineLearning.description}</p>
// 						</div>
// 					</div>

// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default Research

import React, { useRef } from 'react'
import '../App.css'
import { Typography } from '@mui/material'

const researchAreas = [
	{
		id: "climateResilience",
		title: "Climate Resilience",
		image: "/research/solar_gallery_image.png",
		description:
			"Transportation networks underpin socioeconomic development by enabling the movement of goods and people. However, despite their frequency, little is known about how floods disrupt transportation systems in developing country cities.",
		relatedPapers: [
			{
				title: "The Impact of Climate Change on Transportation Networks",
				link: "https://example.com/climate-paper"
			}
		]
	},
	{
		id: "networkScience",
		title: "Network Science",
		image: "/research/graph_gallery_image.png",
		description:
			"Sea level rise (SLR) and storm surge inundation are major concerns along the coast of the San Francisco Bay, impacting both coastal communities and critical infrastructure networks.",
		relatedPapers: [
			{
				title: "Network Resilience in Coastal Cities",
				link: "https://example.com/network-paper"
			},
			{
				title: "Graph Theory Applications in Disaster Response",
				link: "https://example.com/graph-theory-paper"
			}
		]
	},
	{
		id: "machineLearning",
		title: "Machine Learning",
		image: "/research/machinelearning.jpg",
		description:
			"The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities.",
		relatedPapers: [
			{
				title: "Deep Learning for Environmental Data Analysis",
				link: "https://example.com/ml-paper"
			},
			{
				title: "Predictive Models for Climate Change Impact",
				link: "https://example.com/climate-ml-paper"
			}
		],
		codeLink: "https://github.com/example/machine-learning-project"
	}
]

const Research = () => {
	// Create references for each research topic
	const sectionRefs = researchAreas.reduce((acc, area) => {
		acc[area.id] = useRef(null)
		return acc
	}, {})

	// Function to handle scrolling to a section
	const scrollToSection = (ref) => {
		ref.current?.scrollIntoView({ behavior: "smooth", block: "start" })
	}

	return (
		<div className="research-page">
			{/* Profile Picture Section */}
			<div className="section-background">
				<img alt="" src="/research/Profile-Pic-Research.jpg" className="section-image" />
				<div className="section-background-overlay"></div>
				<Typography variant="h2" className="section-title">Research</Typography>
			</div>

			{/* Research Navigation Buttons */}
			<div className="research-buttons">
				{researchAreas.map((area) => (
					<button key={area.id} onClick={() => scrollToSection(sectionRefs[area.id])}>
						{area.title}
					</button>
				))}
			</div>

			{/* Research Sections */}
			<div className="research-grid">
				{researchAreas.map((area) => (
					<div key={area.id} ref={sectionRefs[area.id]} className="research-section">
						<Typography variant="h3" className="research-title">{area.title}</Typography>
						<img src={area.image} alt={area.title} className="research-image" />
						<Typography className="research-description">{area.description}</Typography>

						{/* Related Papers Section */}
						{area.relatedPapers && (
							<div className="research-papers">
								<Typography variant="h5" className="papers-title">Related Papers:</Typography>
								<ul>
									{area.relatedPapers.map((paper, index) => (
										<li key={index}>
											<a href={paper.link} target="_blank" rel="noopener noreferrer">
												{paper.title}
											</a>
										</li>
									))}
								</ul>
							</div>
						)}

						{/* Code Link (if available) */}
						{area.codeLink && (
							<p className="research-code">
								<strong>Code:</strong>{" "}
								<a href={area.codeLink} target="_blank" rel="noopener noreferrer">
									View on GitHub
								</a>
							</p>
						)}
					</div>
				))}
			</div>
		</div>
	)
}

export default Research
