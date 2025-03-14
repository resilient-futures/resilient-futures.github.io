

// import React, { useState } from 'react'
// import '../App.css'
// import { Typography } from '@mui/material';


// const researchAreas = {
// 	climateResilience: {
// 		title: 'Climate Resilience',
// 		image: '/research/climate.jpg',
// 		description: 'Transportation networks underpin socioeconomic development by enabling the movement of goods and people. However, despite their frequency, little is known about how floods disrupt transportation systems in developing country cities.Transportation networks underpin socioeconomic development by enabling the movement of goods and people. However, despite their frequency, little is known about how floods disrupt transportation systems in developing country cities. '
// 	},
// 	networkScience: {
// 		title: 'Network Science',
// 		image: '/research/network.png',
// 		description: 'Sea level rise (SLR) and storm surge inundation are major concerns along the coast of the San Francisco Bay (the Bay Area), impacting both coastal communities and critical infrastructure networks. The oil industry comprises a complex and critical infrastructure network located in the Bay Area. Transportation networks underpin socioeconomic development by enabling the movement of goods and people. However, despite their frequency, little is known about how floods disrupt transportation systems in developing country cities.'
// 	},
// 	machineLearning: {
// 		title: 'Machine Learning',
// 		image: '/research/machinelearning.jpg',
// 		description: 'The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities. Recently, there has been a growing recognition of the importance of evaluating urban greenness from a human-centered perspective, partly due to the rapid development of eye-level greenness measurement. Transportation networks underpin socioeconomic development by enabling the movement of goods and people. However, despite their frequency, little is known about how floods disrupt transportation systems in developing country cities.'
// 	}
// }

// const Research = () => {
// 	const [activeTab, setActiveTab] = useState('climateResilience')
// 	return (

// 		<div className="team-members">
// 			{/* Profile Picture Section */}
// 			<div className="section-background">
// 				<img
// 					alt=""
// 					src="/research/Profile-Pic-Research.jpg"
// 					className="section-image"
// 				/>
// 				<div className="section-background-overlay"></div>
// 				<Typography variant="h2" className="section-title">
// 					Research
// 				</Typography>
// 			</div>

// 			{/* Research Buttons */}
// 			<div className="research-buttons">
// 				{Object.keys(researchAreas).map((key) => (
// 					<button
// 						key={key}
// 						className={activeTab === key ? 'active' : ''}
// 						onClick={() => setActiveTab(key)}
// 					>
// 						{researchAreas[key].title}
// 					</button>
// 				))}
// 			</div>

// 			{/* Research Content (Wrapper) */}
// 			<div className="research-wrapper">
// 				<div className="research-item">
// 					<img
// 						src={researchAreas[activeTab].image}
// 						alt={researchAreas[activeTab].title}
// 						className="research-image"
// 					/>
// 					<div className="research-text">
// 						<h3>{researchAreas[activeTab].title}</h3>
// 						<p>{researchAreas[activeTab].description}</p>
// 					</div>
// 				</div>
// 			</div>
// 		</div>


// 	)
// }

// export default Research

import React, { useState } from 'react'
import '../App.css'
import { Typography } from '@mui/material'

const researchAreas = {
	climateResilience: {
		title: 'Climate Resilience',
		image: '/research/climate.jpg',
		description:
			'Transportation networks underpin socioeconomic development by enabling the movement of goods and people. However, despite their frequency, little is known about how floods disrupt transportation systems in developing country cities.'
	},
	networkScience: {
		title: 'Network Science',
		image: '/research/network.png',
		description:
			'Sea level rise (SLR) and storm surge inundation are major concerns along the coast of the San Francisco Bay, impacting both coastal communities and critical infrastructure networks.'
	},
	machineLearning: {
		title: 'Machine Learning',
		image: '/research/machinelearning.jpg',
		description:
			'The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities.'
	}
}

const Research = () => {
	const [activeTab, setActiveTab] = useState(null) // No default selection

	return (
		<div className="team-members">
			{/* Profile Picture Section */}
			<div className="section-background">
				<img alt=""
					src="/research/Profile-Pic-Research.jpg"
					className="section-image" />

				<div className="section-background-overlay"></div>
				<Typography variant="h2" className="section-title">Research</Typography>
			</div>

			{/* Research Buttons */}
			<div className="research-buttons">
				{Object.keys(researchAreas).map((key) => (
					<button
						key={key}
						className={activeTab === key ? 'active' : ''}
						onClick={() => setActiveTab(key)}
					>
						{researchAreas[key].title}
					</button>
				))}
			</div>

			{/* Default View when no button is selected */}
			{activeTab === null ? (
				<div className="research-default">
					<Typography variant="h5" className="default-title">Explore Our Research</Typography>
					<Typography className="default-text">
						Select a research topic above to learn more about our areas of focus.
						Select a research topic above to learn more about our areas of focus.
						Select a research topic above to learn more about our areas of focus.
						Select a research topic above to learn more about our areas of focus.
					</Typography>
				</div>
			) : (
				<div className="research-wrapper">
					<div className="research-item">
						<img src={researchAreas[activeTab].image} alt={researchAreas[activeTab].title} className="research-image" />
						<div className="research-text">
							<h3>{researchAreas[activeTab].title}</h3>
							<p>{researchAreas[activeTab].description}</p>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default Research
