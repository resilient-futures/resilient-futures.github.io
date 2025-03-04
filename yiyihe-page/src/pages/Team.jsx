
import React from 'react'
import { Typography } from '@mui/material';

const teamData = {
	principalInvestigator: [
		{
			name: 'Yiyi He',
			bio: 'Yiyi He is an assistant professor in the School of City and Regional Planning (SCaRP) at the College of Design at Georgia Tech. Her research centers on the interdisciplinary fields of urban planning, GIScience, climate science, and artificial intelligence. She is interested in building a better understanding of the uncertainty and asymmetric impacts of climate-change-induced extreme weather events (e.g., flooding, wildfires, extreme heat) on critical components of the built environment (e.g., lifeline infrastructure networks, vulnerable neighborhoods). She leverages data-driven approaches, such as GIS, network science, hyperspectral remote sensing, machine learning, and spatial statistics to tackle complex challenges in climate change and resilience research and to inform more intelligent planning and policy directives.',
			image: '/team-member/yiyihe.png',
			link: 'https://www.linkedin.com/in/yiyihe'
		}
	],
	currentMembers: [
		{
			name: 'Tara Liu',
			bio: 'Tara is a master student in CSE(Computational Science & Engineering) and an aspiring data scientist. They are interested in the intersection of computer and marginalized communities. In their free time, Tara enjoys nature and metal music.',
			image: '/team-member/taraliu.jpg',
			link: 'https://taraliu.netlify.app/'
		},
		{
			name: 'Yuehan Zhang',
			bio: 'Yuehan is a CSE student.',
			image: '/team-member/yuehanzhang.jpg',
			link: ''
		}
	],
	pastMembers: [
		{
			name: '',
			bio: '',
			image: '',
			link: ''
		}
	]
}

const TeamMember = ({ name, bio, image, link }) => {
	return (
		<div className="team-member">
			<img src={image} alt={name} className="team-member__image" />
			<div className="team-member__info">
				<h3>{name}</h3>
				<p>{bio}</p>
				{link && <a href={link} target="_blank" rel="noopener noreferrer">[Website]</a>}
			</div>
		</div>
	)
}

const TeamSection = ({ title, members }) => {
	if (members.length === 0) return null // Don't render empty sections

	return (
		<div className="team-section">
			<h2>{title}</h2>
			<div className="team-grid">
				{members.map((member, index) => (
					<TeamMember key={index} {...member} />
				))}
			</div>
		</div>
	)
}


const Team = () => {
	return (

		<div className="team-members">
			{/* Profile Picture Section */}
			<div className="section-background">
				<img
					alt=""
					// src="https://images.squarespace-cdn.com/content/v1/5f502852f36d51610004c15d/9f7ed2a8-432d-414a-a7a8-189c977f690f/20230605_094649.jpg"
					src="/team-member/Profile-Pic-Team.jpg"
					className="section-image"
				/>
				<div className="section-background-overlay"></div>
				<Typography variant="h2" className="section-title">
					Team
				</Typography>
			</div>



			<div className="team">
				{/* <h1>Meet Our Team</h1> */}
				<div className="team-wrapper">
					<TeamSection title="Principal Investigator" members={teamData.principalInvestigator} />
					<TeamSection title="Current Members" members={teamData.currentMembers} />
					<TeamSection title="Alumni" members={teamData.pastMembers} />
				</div>
			</div>
		</div>

	)
}


export default Team;
