// import React from 'react'
// import { Container, Typography, Link } from '@mui/material';


// const Teaching = () => {
// 	return (
// 		<div className="teaching">
// 			{/* Profile Picture Section */}
// 			<div className="section-background">
// 				<img
// 					alt=""
// 					src="https://images.squarespace-cdn.com/content/v1/5f502852f36d51610004c15d/9f7ed2a8-432d-414a-a7a8-189c977f690f/20230605_094649.jpg"
// 					className="section-image"
// 				/>
// 				<div className="section-background-overlay"></div>
// 				<Typography variant="h2" className="section-title">
// 					Teaching
// 				</Typography>
// 			</div>

// 			{/* Teaching Content */}
// 			<div className="teaching-content">
// 				<h3>Courses Taught</h3>
// 				<ul>
// 					<li>Introduction to Computer Science</li>
// 					<li>Advanced Algorithms</li>
// 					<li>Machine Learning and AI</li>
// 				</ul>
// 			</div>
// 		</div>
// 	)
// }

// export default Teaching

import React from 'react'
import { Typography } from '@mui/material';

const courses = [
	{
		name: 'CP4813: Urban Data Science',
		description: 'In today’s world, understanding cities requires more than just traditional methods. Urban planners and social scientists are increasingly turning to data science techniques to gain deeper insights into the complex issues that cities face. This course serves as an introduction to data science for undergraduate and graduate students in urban planning and related fields.',
		image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnextrendsasia.org%2Fwp-content%2Fuploads%2F2020%2F04%2FBig-Data-Featured.jpg&f=1&nofb=1&ipt=0c47661f45e60c0aad4bea7a14a6ddb86750cec4ce273d892e9f7ddede00f18d&ipo=images',
		syllabus: '',
		code: 'https://github.com/jesuslovesyiyi/Urban-Data-Science'
	},
	{
		name: 'Transport & GIS',
		description: 'How to use GIS to analyze transportation data.',
		image: 'https://giscenter.sites.clemson.edu/gis-for-urban-transportation-planning/Overall_darktheme.PNG',
		syllabus: '',
		code: ''
	},

]

const Course = ({ name, description, image, syllabus, code }) => {
	return (
		<div className="course">
			<img src={image} alt={name} className="course__image" />
			<div className="course__info">
				<h3>{name}</h3>
				<p>{description}</p>
				<div className="course__links">
					<a href={syllabus} target="_blank" rel="noopener noreferrer">Syllabus</a>
					<a href={code} target="_blank" rel="noopener noreferrer">Code</a>
				</div>
			</div>
		</div>
	)
}

const Teaching = () => {
	return (
		<div className="team-members">
			{/* Profile Picture Section */}
			<div className="section-background">
				<img
					alt=""
					src="https://images.squarespace-cdn.com/content/v1/5f502852f36d51610004c15d/9f7ed2a8-432d-414a-a7a8-189c977f690f/20230605_094649.jpg"
					className="section-image"
				/>
				<div className="section-background-overlay"></div>
				{/* <h2 className="section-title">Teaching</h2> */}
				<Typography variant="h2" className="section-title">
					Teaching
				</Typography>
			</div>

			{/* Course List */}
			<div className="teaching">
				<div className="teaching-wrapper">
					<div className="teaching-grid">
						{courses.map((course, index) => (
							<Course key={index} {...course} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Teaching


// < div className = "section-background" >
// 			<img
// 				alt=""
// 				src="https://images.squarespace-cdn.com/content/v1/5f502852f36d51610004c15d/9f7ed2a8-432d-414a-a7a8-189c977f690f/20230605_094649.jpg"
// 				style={{ display: 'block', width: '100%', height: 'auto', objectPosition: '49.7907949790795% 30.68429463896557%' }}
// 			/>
// 			<div className="section-background-overlay" style={{ opacity: 0 }}></div>
// 			<Typography variant="h2" className="section-title">
// 				Contact
// 			</Typography>
// 		</div >